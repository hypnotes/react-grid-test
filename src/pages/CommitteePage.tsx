import { Box, Typography } from '@mui/material'
import Committee from '../components/Committee'
import Footer from '../components/Footer'

export default function CommitteePage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography variant="h2" align="center" gutterBottom>
        Committee
      </Typography>
      <Committee />
      <Footer />
    </Box>
  )
}
