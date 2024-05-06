import ScheduleGrid from '@components/ScheduleGrid'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Footer from '../components/Footer'

export default function ProgramPage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography variant="h2" align="center" gutterBottom>
        Program
      </Typography>
      <Divider />
      <ScheduleGrid />
      <Footer />
    </Box>
  )
}
