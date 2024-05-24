import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import Committee from '../components/Committee'
import Footer from '../components/Footer'

export default function CommitteePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        color="text.primary"
        textAlign={'center'}
      >
        Committee
      </Typography>
      <Committee />
      <Footer />
    </Box>
  )
}
