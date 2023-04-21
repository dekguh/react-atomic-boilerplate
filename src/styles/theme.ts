// CONSTANTS
import colors from '@/constants/colors'
import { fontFamily, typography } from '@/constants/typography'

// TYPES
import './theme.d'

// MUIS
import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme()
const customTheme = createTheme({
  palette: colors,
  text: {
    heading: '#3C3C3C',
    body: '#6B6B6B'
  },
  typography: {
    h1: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.h1.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.h1.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.h1.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.h1.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.h1.xs,
      }
    },
    h2: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.h2.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.h2.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.h2.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.h2.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.h2.xs,
      }
    },
    h3: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.h3.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.h3.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.h3.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.h3.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.h3.xs,
      }
    },
    h4: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.h4.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.h4.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.h4.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.h4.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.h4.xs,
      }
    },
    h5: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.h5.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.h5.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.h5.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.h5.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.h5.xs,
      }
    },
    h6: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.h6.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.h6.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.h6.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.h6.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.h6.xs,
      }
    },
    subtitle1: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.subtitle1.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.subtitle1.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.subtitle1.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.subtitle1.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.subtitle1.xs,
      }
    },
    subtitle2: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.subtitle2.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.subtitle2.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.subtitle2.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.subtitle2.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.subtitle2.xs,
      }
    },
    body1: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.body1.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.body1.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.body1.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.body1.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.body1.xs,
      }
    },
    body2: {
      [defaultTheme.breakpoints.up('xl')]: {
        fontSize: typography.body2.xl,
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: typography.body2.lg,
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: typography.body2.md,
      },
      [defaultTheme.breakpoints.only('sm')]: {
        fontSize: typography.body2.sm,
      },
      [defaultTheme.breakpoints.only('xs')]: {
        fontSize: typography.body2.xs,
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        font-family: ${fontFamily};
      `
    }
  }
})

export default customTheme