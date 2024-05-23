import { Typography } from '@mui/material'

export default function SitemarkIcon({ isRevert }: { isRevert: boolean }) {
  return (
    <Typography
      variant="h6"
      component="span"
      sx={{ color: 'primary.main', fontWeight: 'bold' }}
    >
      Mobile AI Systems
    </Typography>
  )
}
