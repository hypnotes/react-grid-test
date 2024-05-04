import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRoutes } from 'react-router-dom'
import AppAppBar from '@components/AppAppBar'
import { CheckCircle, Error, Warning } from '@mui/icons-material'
import { CssBaseline, PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { StyledMaterialDesignContent } from './components/styles/snackbar'
import getLPTheme from './components/theme/getLPTheme'
import router from './router'

function App() {
  const content = useRoutes(router)

  const [mode, setMode] = useState<PaletteMode>('light')

  const LPtheme = createTheme(getLPTheme(mode))

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          iconVariant={{
            success: <CheckCircle color="success" />,
            error: <Error color="error" />,
            warning: <Warning color="warning" />
          }}
          Components={{
            success: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
            warning: StyledMaterialDesignContent
          }}
        >
          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          {content}
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
