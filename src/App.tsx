import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRoutes } from 'react-router-dom'
import { CssBaseline, PaletteMode } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import router from './router'

function App() {
  const content = useRoutes(router)

  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider
        theme={createTheme({ palette: { mode: 'dark' as PaletteMode } })}
      >
        <CssBaseline />
        <SnackbarProvider>{content}</SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
