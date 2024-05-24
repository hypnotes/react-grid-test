import { speakers } from '@/data/speakers'
import { ArrowRight } from '@mui/icons-material'
import { Stack, styled, useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import DefaultAvatar from '../assets/logos/DefaultAvatar.png'
import { Avatar } from './Avatar'

export default function Speakers() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 }
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' }
        }}
      >
        <Typography variant={isMobile ? 'h6' : 'h3'} color="text.primary">
          Speakers
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {speakers.map((speaker) => (
          <Grid item key={speaker.name} xs={12} md={12}>
            <CardBox sx={{ paddingX: { xs: 0, md: 2 } }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      gap: 2
                    }}
                    p={{ xs: 0, md: 2 }}
                  >
                    <Avatar
                      src={speaker.avatar ?? DefaultAvatar}
                      alt={speaker.name}
                      sx={{ bgcolor: 'whitesmoke' }}
                    />
                    <Typography variant={isMobile ? 'subtitle1' : 'h5'}>
                      {speaker.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={8} p={2}>
                    <Stack spacing={1}>
                      <div>
                        {!isMobile && (
                          <Typography variant={'h5'}>Title:</Typography>
                        )}
                        <Typography
                          variant={isMobile ? 'body1' : 'h6'}
                          fontWeight={isMobile ? 'bold' : 'normal'}
                        >
                          {speaker.title}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant={isMobile ? 'subtitle1' : 'h5'}>
                          Abstract:
                        </Typography>
                        <Typography variant={isMobile ? 'body2' : 'body1'}>
                          {speaker.description}
                        </Typography>
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
                <Box display={'flex'} alignItems={'baseline'}></Box>
                <Divider sx={{ marginY: 2 }} />

                {speaker.experience.map((exp, i) => (
                  <Box key={`exp-${i}`} display="flex" mb="0.5rem">
                    {isMobile ? (
                      <>• </>
                    ) : (
                      <ArrowRight
                        fontSize="small"
                        style={{
                          color: 'lightgray',
                          marginRight: '0.5rem',
                          marginTop: '0.1rem'
                        }}
                      />
                    )}
                    <Typography key={exp} variant="body1" sx={{ opacity: 0.8 }}>
                      {exp}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </CardBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const CardBox = styled(Card)(({ theme }) => ({
  padding: 24,
  transition:
    'transform 0.3s ease-in-out, background-color 0.7s ease-in-out, box-shadow 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minHeight: 300,
  ':hover': {
    transform: 'scale(1.01)'
  }
  // ':active': {
  //   boxShadow:
  //     theme.palette.mode === 'light'
  //       ? `0 8px 12px hsla(210, 98%, 42%, 0.2)`
  //       : `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
  //   backgroundColor: theme.palette.primary.dark,
  //   color: theme.palette.primary.contrastText,
  //   border: 'none'
  // }
}))
