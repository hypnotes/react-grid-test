import Footer from '@components/Footer'
import Speakers from '@components/Speakers'
import Box from '@mui/material/Box'
import KeyVisitors from '../components/KeyVisitors'

export default function KeynotePage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <KeyVisitors />
      <Speakers />
      <Footer />
    </Box>
  )
}
