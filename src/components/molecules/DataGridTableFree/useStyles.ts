// TSS
import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles()(() => ({
  root: {
    '& .MuiDataGrid-columnHeaderTitleContainerContent': {
      paddingTop: 20,
      paddingBottom: 20,
      '& .MuiOutlinedInput-notchedOutline': {
        fontSize: 12,
      },
      '& .MuiFormLabel-root': {
        fontSize: 12,
      },
      '& .MuiInputBase-input': {
        fontSize: 12,
      }
    }
  }
}))

export default useStyles