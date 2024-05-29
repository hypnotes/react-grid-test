import { Link } from 'react-router-dom'
import AddressBox from '@components/AddressBox'
import { Box, Divider, useMediaQuery, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Introduction() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container id="introduction" sx={{ py: { xs: 8, sm: 8 } }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h3'}
          color="text.primary"
          textAlign={'center'}
          fontWeight={isMobile ? 'bold' : 'normal'}
        >
          Mobile AI Systems
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'h6'}
          color="text.primary"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          June 3rd, 2024, Tokyo
        </Typography>
        <Typography
          variant={isMobile ? 'caption' : 'h6'}
          color="text.secondary"
          textAlign="center"
        >
          <i>
            in conjunction with&nbsp;
            <Link
              to={'https://www.sigmobile.org/mobisys/2024/'}
              style={{ color: 'gray' }}
              target="_blank"
            >
              2024 MobiSys
            </Link>
          </i>
        </Typography>

        <Box mt={4} width={'100%'}>
          <AddressBox />
        </Box>
        <Box sx={{ maxWidth: { xs: '90%', sm: '80%' } }}>
          <Divider sx={{ my: { xs: 2, sm: 6 } }} />
          <Typography
            variant={isMobile ? 'body2' : 'h6'}
            color="text.primary"
            textAlign={{ xs: 'left', sm: 'justify' }}
          >
            Mobile AI systems have become an integral part of our daily lives,
            profoundly influencing how we interact, work, and navigate the world
            around us. From the AI-powered functionalities on our smartphones to
            the transformative impact on mobile robotics and IoT, the
            integration of AI into mobile devices is reshaping our experiences
            on both personal and global scales.
            <br />
            <br />
            As we embark on this inaugural MAIS workshop, we stand at the
            forefront of a new era in mobile AI innovation. Many fascinating AI
            techniques are currently confined to datacenters, limiting their
            direct applicability in our daily lives. Our mission is to bridge
            this gap by bringing AI innovation closer to everyday experiences
            through integration into mobile devices.
            <br />
            <br />
            The future of mobile AI systems begins with your contributions and
            participation at MAIS 2024. We invite you to engage with us,
            exploring how your creative innovations can shape the trajectory of
            mobile AI development.
            <br />
            <br />
            Join us to unleash your inventiveness and play a pivotal role in
            shaping the next era of mobile AI systems together.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
