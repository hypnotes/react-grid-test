import Introduction from '@components/Introduction'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Introduction />
        <Divider />
        <Footer />
      </Box>
    </>
  )
}
