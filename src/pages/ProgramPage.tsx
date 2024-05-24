import ScheduleGrid from '@components/ScheduleGrid'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Footer from '../components/Footer'

export default function ProgramPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ bgcolor: 'background.default' }} mt={16}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        color="text.primary"
        textAlign={'center'}
      >
        Program
      </Typography>
      <Divider />
      <ScheduleGrid />
      <Footer />
    </Box>
  )
}
