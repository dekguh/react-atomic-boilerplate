import React, { FormEvent, useState } from 'react'
import Link from 'next/link'

// COMPONENTS
import CardForm from '@/components/atoms/elements/CardForm'
import Typography from '@/components/atoms/text/Typography'
import FormControl from '@/components/atoms/control/FormControl'
import TextField from '@/components/atoms/input/TextField'
import Button from '@/components/atoms/control/Button'

// MUIS
import Stack from '@mui/material/Stack'

// STYLES
import useStyles from './useStyles'

// TYPES
import { IFormSignIn } from './types'

const FormSignIn : React.FC<IFormSignIn> = (props) => {
  const { getParamsObject } = props
  const { classes } = useStyles()

  const initParamsObject = {
    email: '',
    password: ''
  }
  const initMessageError = {
    email: '',
    password: ''
  }

  const [paramsObject, setParamsObject] = useState<{[key: string]: string;}>(initParamsObject)
  const [messageError, setMessageError] = useState<{[key: string]: string;}>(initMessageError)

  const handleFormSubmit = (event : FormEvent) => {
    event.preventDefault()

    // validation value here
    let isFormValid = true
    // eslint-disable-next-line prefer-const
    let tempMessageError = messageError
    Object.keys(paramsObject).forEach(keys => {
      if(!paramsObject[keys]) {
        isFormValid = false
        tempMessageError[keys] = 'this field must filled'
      } else {
        tempMessageError[keys] = ''
      }
    })
    setMessageError({...tempMessageError})
    
    if(isFormValid) {
      getParamsObject(paramsObject)
    }
  }

  const handleParamsChange = (name: string, value: string) => {
    setParamsObject({...paramsObject, [name]: value})
  }

  return (
    <CardForm onSubmit={handleFormSubmit} className={classes.cardWrapper} data-testid='formSignInId'>
      <Stack className={classes.cardHeader}>
        <Typography variant='h4' className={classes.cardTitle}>Sign In</Typography>
      </Stack>

      <Stack component='form' className={classes.inputWrapper}>
        <FormControl
          controlProps={{
            error: Boolean(messageError?.email), fullWidth: true, className: classes.formControl, required: true, size: 'medium'
          }}
          helperProps={{ children: messageError?.email }}
        >
          <TextField
            type='text' size='medium' error={Boolean(messageError?.email)}
            value={paramsObject?.email} label='Email' inputProps={{ 'data-testid': 'inputEmailId' }}
            onChange={event => handleParamsChange('email', event.target.value)}
          />
        </FormControl>

        <FormControl
          controlProps={{
            error: Boolean(messageError?.password), fullWidth: true, className: classes.formControl, required: true, size: 'medium'
          }}
          helperProps={{ children: messageError?.password }}
        >
          <TextField
            type='password' size='medium' error={Boolean(messageError?.password)}
            value={paramsObject?.password} label='Password' inputProps={{ 'data-testid': 'inputPasswordId' }}
            onChange={event => handleParamsChange('password', event.target.value)}
          />
        </FormControl>

        <FormControl>
          <Button variant='contained' type='submit' data-testid='buttonSubmitId'>Sign in</Button>
        </FormControl>

        <Typography className={classes.textRouting}>
          dont have an account? <Link href='/sign-up'>sign up</Link>
        </Typography>
      </Stack>
    </CardForm>
  )
}

export default FormSignIn