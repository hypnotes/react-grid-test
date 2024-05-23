import { Divider, Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Han from '/han.jpg'
import Joo from '/joo.png'

const organizingCommittee = [
  {
    avatar: Han,
    name: 'Junghyun Han',
    occupation: 'Korea University',
    email: 'jhan@korea.ac.kr',
    role: 'Workshop Chair'
  },
  {
    avatar: Joo,
    name: 'Changhee Joo',
    occupation: 'Korea University',
    email: 'changhee@korea.ac.kr',
    role: 'Program Chair'
  }
]

export default function Committee() {
  return (
    <Box
      id="committee"
      sx={{
        pt: 12,
        pb: { xs: 8, sm: 16 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 }
      }}
    >
      <Stack spacing={10}>
        <Stack spacing={1} sx={{ alignItems: 'center' }} gap={4}>
          <Grid container justifyContent={'center'} gap={2}>
            {organizingCommittee.map((committee, index) => (
              <Grid item xs={11} md={11} key={index} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    p: { xs: 1, sm: 2 },
                    px: { xs: 2, sm: 4 },
                    transition: 'transform 0.3s',
                    width: '100%',
                    ':hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <Box display={'flex'} gap={2} alignItems={'center'}>
                    {/* <Avatar
                      sx={{ width: { xs: 32, md: 100 }, height: 'auto' }}
                      alt={committee.name}
                      src={committee.avatar}
                    />
                    <Divider orientation="vertical" flexItem /> */}
                    <Box>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        fontSize={{ xs: 15, md: 18 }}
                        mb={{ xs: 1, md: 2 }}
                      >
                        {committee.role}
                      </Typography>
                      <Typography
                        color="text.primary"
                        fontWeight={'bold'}
                        fontSize={{ xs: 15, md: 18 }}
                      >
                        {committee.name}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        noWrap
                        fontSize={{ xs: 12, md: 15 }}
                      >
                        {committee.occupation} / {committee.email}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
        {/* <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <Typography variant="h5" color="text.primary">
            Technical Program Committee
          </Typography>
          <Grid container spacing={2}>
            {technicalProgramCommittee.map((committee, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: 'flex' }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    p: 1
                  }}
                >
                  <CardHeader
                    avatar={committee.avatar}
                    title={committee.name}
                    subheader={committee.occupation}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack> */}
      </Stack>
    </Box>
  )
}
