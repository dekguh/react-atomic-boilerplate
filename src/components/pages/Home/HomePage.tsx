import React, { useState } from 'react'
import Router from 'next/router'
import _ from 'lodash'

// REDUX
import { useDispatch } from 'react-redux'
import { userLogoutAct } from '@/store/slice/authSlice'

// COMPONENTS
import Button from '@/components/atoms/control/Button'
import Progress from '@/components/atoms/elements/Progress'
import TableData from '@/components/organisms/home/TableData'
import TableFilterAction from '@/components/organisms/home/TableFilterAction'

// MUIS
import Stack from '@mui/material/Stack'

// SERVICES
import { useGetProductsQuery } from '@/services/productService'

const HomePage = () => {
  const dispatch = useDispatch()
  const { data : responseData, isLoading } = useGetProductsQuery('')

  const [modeFilter, setModeFilter] = useState<boolean>(false)
  const [selectedColumns, setSelectedColumns] = useState([{ field: 'title', value: true }, { field: 'description', value: true }])

  const handleCheckboxChange = (event : {key: string; value: boolean;}) => {
    const temp = [...selectedColumns]
    const findIndex = _.findIndex(temp, { field: event.key })
    temp[findIndex].value = event.value
    setSelectedColumns([...temp])
  }

  return (
    <Stack padding='20px' height='100vh'>    
      <Button data-testid='btnSignOutId' variant='contained' onClick={() => {
        dispatch(userLogoutAct())
        Router.push('/sign-in')
      }}>
          logout
      </Button>

      <Stack marginTop='20px'>
        <TableFilterAction
          setModeFilter={setModeFilter}
          modeFilter={modeFilter}
          onCheckboxChange={handleCheckboxChange}
          selectedColumns={selectedColumns}
        />
      </Stack>

      {isLoading ? <Stack marginTop='20px' data-testid='loadingId'>
        <Progress
          type='linear'
          linearProps={{
            color: 'primary'
          }}
        />
      </Stack> : ''}

      <Stack marginTop='32px' flex={1}>
        <TableData
          dataRows={responseData?.products ?? []}
          modeFilter={modeFilter}
          selectedColumns={selectedColumns.filter(item => item.value).map(item => _.pick(item, 'field'))}
        />
      </Stack>
    </Stack>
  )
}

export default HomePage