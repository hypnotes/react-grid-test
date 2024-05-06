import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Introduction() {
  return (
    <Container id="introduction" sx={{ py: { xs: 8, sm: 8 } }}>
      <div>
        <Typography
          variant="h4"
          color="text.primary"
          textAlign="center"
          sx={{ mb: 1 }}
          fontWeight={900}
        >
          AI Mobile Systems
        </Typography>
        <Typography
          variant="h4"
          color="text.primary"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          June 3rd, 2024, Tokyo
        </Typography>
        <Typography
          variant="h5"
          color="text.primary"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          in conjunction with MobiSys 2024
        </Typography>
        <Typography variant="body1" color="text.primary" textAlign="center">
          소개글
        </Typography>
      </div>
    </Container>
  )
}
