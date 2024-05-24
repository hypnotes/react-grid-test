import Footer from '@components/Footer'
import Speakers from '@components/Speakers'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import KeyVisitors from '../components/KeyVisitors'

export default function KeynotePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography variant={isMobile ? 'h5' : 'h2'} align="center" gutterBottom>
        Keynote & Speakers
      </Typography>
      <KeyVisitors />
      <Speakers />
      <Footer />
    </Box>
  )
}
