import Footer from '@components/Footer'
import Speakers from '@components/Speakers'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import KeyVisitors from '../components/KeyVisitors'

export default function KeynotePage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography variant="h2" align="center" gutterBottom>
        Keynote & Speakers
      </Typography>
      <KeyVisitors />
      <Speakers />
      <Footer />
    </Box>
  )
}
