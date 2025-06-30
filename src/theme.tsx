// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3eb489',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#baf2ba', // lighter mint green
    },
    background: {
      default: '#cccccc', // darker grey
      paper: '#ffffff',
    },
    text: {
      primary: '#2f4f4f',
    },
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
    h1: {
      fontSize: '3.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      fontSize: '1.5rem',
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#3eb489',
          borderRadius: '5px',
          padding: '0.75rem 1.5rem',
          color: '#fff',
          fontWeight: 500,
          fontSize: '1.5rem',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#31997d',
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#baf2ba',
          borderRadius: '5px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
});

export default theme;
