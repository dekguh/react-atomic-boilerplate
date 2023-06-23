// TSS
import { makeStyles } from 'tss-react/mui'


const useStyles = makeStyles()((theme) => ({
  cardWrapper: {
    borderRadius: 4,
  },
  cardHeader: {
    padding: 16,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  cardTitle: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  inputWrapper: {
    padding: 16,
  },
  formControl: {
    marginBottom: 12,
  }
}))

export default useStyles