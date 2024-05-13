import { Typography } from '@mui/material'

export default function SitemarkIcon({ isRevert }: { isRevert: boolean }) {
  return (
    <Typography
      variant="h6"
      component="span"
      color={'primary.main'}
      sx={{ color: isRevert ? 'secondary.light' : 'secondary.main', fontWeight: 'bold' }}
    >
      Mobile AI Systems
    </Typography>
  )
}
