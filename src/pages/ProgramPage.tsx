import { useState } from 'react'
import ScheduleGrid from '@components/ScheduleGrid'
import { Snackbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Footer from '../components/Footer'
import AddressBox from '@components/AddressBox'

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
      <AddressBox />
      <ScheduleGrid />
      <Footer />
    </Box>
  )
}
