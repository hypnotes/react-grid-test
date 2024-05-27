import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '@components/Footer'
import Speakers from '@components/Speakers'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

export default function KeynotePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { speaker } = useParams<{ speaker: string }>()

  console.log(speaker)

  useEffect(() => {
    if (speaker) {
      scroll(speaker)
    }
  }, [speaker])

  const scroll = (name: string) => {
    console.log('STARTING TO SCROLL....')
    const scrollDiv = document.getElementById(name)?.offsetTop
    console.log("FOUND DIV OF: ", name, " AT: ", scrollDiv)
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' })
    console.log("DONE SCROLLING....")
  }
  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography variant={isMobile ? 'h4' : 'h2'} align="center" gutterBottom>
        Keynote & Speakers
      </Typography>
      <Speakers />
      <Footer />
    </Box>
  )
}
