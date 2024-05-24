import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ICTLogo from '../assets/images/ict_logo.png'

function Copyright() {
  return (
    <>
      <img src={ICTLogo} alt="Mobile AI Systems" height={40} />
      <Typography variant="body2" color="text.secondary" mt={1}>
        {'Copyright © '}
        <Link href="https://mpij.korea.ac.kr/mpij/index.do">
          ICT Creative Consilience Foundation &nbsp;
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </>
  )
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <div>
          <Copyright />
        </div>
      </Box>
    </Container>
  )
}
