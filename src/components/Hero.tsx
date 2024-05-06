import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={() => ({
        width: '100%',
        backgroundImage:
          'url(/src/assets/images/ai_mobile_systems_head_img.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 }
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          useFlexGap
          sx={{ width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              color: 'common.white'
            }}
          >
            AI&nbsp;Mobile&nbsp;Systems
          </Typography>
          <Container
            sx={{ width: '30%', height: '10px', bgcolor: 'primary.main' }}
          ></Container>
        </Stack>
      </Container>
    </Box>
  )
}
