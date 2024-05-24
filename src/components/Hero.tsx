import { useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import BackgroundImage from '../assets/images/ai_mobile_systems_head_img.jpg'

export default function Hero() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      id="hero"
      sx={() => ({
        width: '100%',
        background: `url(${BackgroundImage})`,
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
            variant={isMobile ? 'h4' : 'h1'}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              color: 'common.white'
            }}
          >
            Mobile&nbsp;AI&nbsp;Systems
          </Typography>
          <Container
            sx={{ width: '30%', height: '10px', bgcolor: 'primary.main' }}
          ></Container>
        </Stack>
      </Container>
    </Box>
  )
}
