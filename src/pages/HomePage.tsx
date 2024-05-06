import Introduction from '@components/Introduction'
import Box from '@mui/material/Box'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Introduction />
        <Footer />
      </Box>
    </>
  )
}
