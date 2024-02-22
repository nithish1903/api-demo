import { createTheme } from '@mui/material/styles';

const typography = {
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
  h1: {
    fontSize: 50,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    lineHeight: '48px',
  },
  h2: {
    fontSize: 26,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    lineHeight: '36px',
  },
  h3: {
    fontSize: 20,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    lineHeight: '32px'
  },
  h4: {
    fontSize: 16,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    lineHeight: '24px'
  },
  h5: {
    fontSize: 12,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 500,
    lineHeight: '20px'
  },
  h6: {
    fontSize: 11,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 500,
    lineHeight: '16px'
  },
  subtitle1: {
    fontSize: 20,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 400,
    lineHeight: '32px'
  },
  subtitle2: {
    fontSize: 16,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 400,
    lineHeight: '24px'
  },
  body1: {
    fontSize: 14,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 400,
    lineHeight: '20px'
  },
  body2: {
    fontSize: 12,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 400,
    lineHeight: '16px'
  },
  button: {
    textTransform: 'none'
  }
};

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },

    primary: {
        light: '#91B0FA', // primary300
        main: '#2C63E5', // primary500
        dark: '#264CA4', // primary600
        900: '#151E33',
        800: '#24428A',
        200: '#BFD2FD',
        100: '#D7E3FE',
        50: '#F3F5F8',
        contrastText: '#F5F8FF'
      },
      secondary: {
        light: '#FFF7E6',
        main: '#FFCD59',
        dark: '#CC981F',
        50: '#FFF7E5'
      },
      success: {
        light: '#C2FAEA',
        main: '#00C28B',
        dark: '#008F66',
        contrastText: '#C2FAEA'
      },
      error: {
        light: '#F9D7D7',
        main: '#FF5757',
        dark: '#CC3333',
        contrastText: '#F9D7D7'
      },
      warning: {
        light: '#FFECDB',
        main: '#F2984A',
        dark: '#D97E2E',
        600: '#D97F30',
        contrastText: '#FFECDB'
      },
      grey: {
        100: '#A1A1A1',
        150: '#F2F2F2', // grey50
        200: '#E0E0E0',
        300: '#E3E3E3', // grey100
        350: '#C7C7C7', // grey200
        650: '#666666' // grey500
      },
      common: {
        black: '#1A1A1A',
        white: '#ffffff'
      }
  },
  typography: {
    ...typography,
  },
});

lightTheme = createTheme(lightTheme, {
  palette: {
    warning: lightTheme.palette?.warning,
    error: lightTheme.palette?.error,
    success: lightTheme.palette?.success,
  },
});

lightTheme = createTheme(lightTheme, {
    components: {
        MuiButton: {
          styleOverrides: {
            sizeSmall: {
              minWidth: '98px',
              height: 32,
              ...lightTheme.typography.h6,
              padding: '8px 16px',
              textTransform: 'none'
            },
            sizeMedium: {
              minWidth: '120px',
              height: '40px',
              ...lightTheme.typography.h5,
              padding: '10px 24px',
              textTransform: 'none'
            },
            sizeLarge: {
              minWidth: '161px',
              height: '48px',
              ...lightTheme.typography.h4,
              padding: '12px 32px',
              textTransform: 'none'
            }
          }
        },
        MuiChip: {
          styleOverrides: {
            sizeSmall: {
              width: 'auto',
              height: 32,
              padding: '8px 0px',
              ...lightTheme.typography.body2,
              borderRadius: 5000
            },
            sizeMedium: {
              height: 40,
              padding: '10px 0px',
              ...lightTheme.typography.body1,
              borderRadius: 5000
            }
          }
        },
        MuiSvgIcon: {
          styleOverrides: {
            fontSizeSmall: {
              fontSize: '16px'
            },
            fontSizeMedium: {
              fontSize: '20px'
            },
            fontSizeLarge: {
              fontSize: '24px'
            }
          }
        },
        MuiSnackbar: {
          styleOverrides: {
            root: {
              borderRadius: `4px`
            }
          }
        },
        MuiSnackbarContent: {
          styleOverrides: {
            root: {
              width: 328,
              position: 'relative',
              minWidth: 360,
              padding: `8px 16px`
            }
          }
        },
        MuiPagination: {
          styleOverrides: {
            root: {
              ...lightTheme.typography.body2,
              height: 32,
    
              '& ul>li>button.Mui-selected': {
                backgroundColor: lightTheme.palette.primary.main,
                color: lightTheme.palette.common.white
              },
              '& ul>li>button:hover': {
                backgroundColor: `rgba(0, 0, 0, 0.04)`
              },
              '& ul>li>button:hover.Mui-selected': {
                color: lightTheme.palette.primary.contrastText,
                backgroundColor: lightTheme.palette.primary.main
              },
              '& ul>li>button:hover.Mui-selected:hover': {
                backgroundColor: lightTheme.palette.primary.dark
              },
              '& svg': {
                fill: lightTheme.palette.primary.main
              }
            }
          }
        },
    
        MuiPaper: {
          styleOverrides: {
            root: {
              margin: 0,
              padding: 0
            }
          }
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              marginBottom: '4px',
              '&>span': {
                color: lightTheme.palette.error?.main
              }
            }
          }
        },
        MuiInputBase: {
          styleOverrides: {
            input: (props) => ({
              '&::placeholder': {
                color: props.disabled ? lightTheme.palette.grey[100] : lightTheme.palette.grey[650],
                opacity: `1 !important`,
                fontFamily: 'Source Sans Pro, sans-serif, FontAwesome'
              },
              backgroundColor: props.disabled
                ? lightTheme.palette.grey[150]
                : lightTheme.palette.common.white
            })
          }
        },
    
        MuiCheckbox: {
          styleOverrides: {
            root: {
              '&.Mui-disabled': {
                color: lightTheme.palette.grey[100],
                cursor: 'not-allowed'
              }
            }
          }
        },
    
        MuiTableCell: {
          styleOverrides: {
            root: {
              padding: '8px',
              ...lightTheme.typography.body2
            }
          }
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              paddingLeft: lightTheme.spacing(2),
              paddingRight: lightTheme.spacing(1)
            }
          }
        }
      }
});

export default lightTheme;
