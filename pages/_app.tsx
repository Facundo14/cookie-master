import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '../themes'
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = 'dark' }: Props) {


  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light';
  
    const selectedTheme = cookieTheme === 'dark' ? darkTheme : cookieTheme === 'custom' ? customTheme : lightTheme;

    setCurrentTheme(selectedTheme);
    
  }, [])
  


  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {

//   const { theme } = appContext.ctx.req ? ( appContext.ctx.req as any ).cookies : { theme: 'light' };

//   const validThemes = ['light', 'dark', 'custom'].includes(theme) ? theme : 'dark';

//   return {
//     theme: validThemes
//   }
// }

export default MyApp
