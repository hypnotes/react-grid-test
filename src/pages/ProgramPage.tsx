import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Testimonials from '../components/Committee'
import FAQ from '../components/FAQ'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import LogoCollection from '../components/LogoCollection'
import Pricing from '../components/Pricing'

export default function ProgramPage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  )
}
