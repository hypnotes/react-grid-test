import * as React from 'react'
import { Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const organizingCommittee = [
  {
    avatar: (
      <Avatar alt="Vaishnavi Ranganthan" src="/static/images/avatar/1.jpg" />
    ),
    name: 'Vaishnavi Ranganthan',
    occupation: 'Microsoft Research'
  },
  {
    avatar: (
      <Avatar alt="Zerina Kapetanovic" src="/static/images/avatar/2.jpg" />
    ),
    name: 'Zerina Kapetanovic',
    occupation: 'Stanford University'
  },
  {
    avatar: <Avatar alt="Kurtis Keimerl" src="/static/images/avatar/3.jpg" />,
    name: 'Kurtis Keimerl',
    occupation: 'University of Washington'
  }
]
const technicalProgramCommittee = [
  {
    avatar: <Avatar alt="Akshay Gadre" src="/static/images/avatar/4.jpg" />,
    name: 'Akshay Gadre',
    occupation: 'University of Washington'
  },
  {
    avatar: <Avatar alt="Deepak Vasisht" src="/static/images/avatar/5.jpg" />,
    name: 'Deepak Vasisht',
    occupation: 'University of Illinois - Urbana-Champaign'
  },
  {
    avatar: <Avatar alt="Vikram Iyer" src="/static/images/avatar/6.jpg" />,
    name: 'Vikram Iyer',
    occupation: 'University of Washington'
  },
  {
    avatar: (
      <Avatar alt="Colleen Josephson" src="/static/images/avatar/1.jpg" />
    ),
    name: 'Colleen Josephson',
    occupation: 'University of California - Santa Cruz'
  },
  {
    avatar: <Avatar alt="Josiah Hester" src="/static/images/avatar/2.jpg" />,
    name: 'Josiah Hester',
    occupation: 'Georgia Tech'
  },
  {
    avatar: <Avatar alt="Upinder Kaur" src="/static/images/avatar/3.jpg" />,
    name: 'Upinder Kaur',
    occupation: 'Purdue'
  }
]

export default function Committee() {
  return (
    <Container
      id="committee"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
        <Typography component="h2" variant="h4" color="text.primary">
          Committee
        </Typography>
      </Box>
      <Stack spacing={10}>
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <Typography variant="h5" color="text.primary">
            Organizing Committee
          </Typography>
          <Grid container spacing={2}>
            {organizingCommittee.map((committee, index) => (
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
        </Stack>
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
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
        </Stack>
      </Stack>
    </Container>
  )
}
