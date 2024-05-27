import React from 'react'
import { Link } from 'react-router-dom'
import { speakers } from '@/data/speakers'
import { Link as LinkIcon } from '@mui/icons-material'
import {
  Box,
  Button,
  CardContent,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { Avatar } from './Avatar'

interface Professor {
  id: number | null
  open: boolean
  onClose: () => void
}

const ProfessorModal: React.FC<Professor> = ({ id, onClose, open }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const speaker = speakers.find((speaker) => speaker.id === id)

  if (!speaker) return null

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title"></DialogTitle>
      <CardContent sx={{ p: 4 }}>
        <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight={'bold'}>
          {speaker.title}
        </Typography>
        <Link
          to={`/keynote/${speaker.name}`}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            marginTop: 1
          }}
        >
          <LinkIcon color={'disabled'} fontSize="small" sx={{ mr: 1 }} />
          <Typography
            variant={isMobile ? 'caption' : 'body1'}
            color={theme.palette.text.secondary}
          >
            Professor {speaker.name}
          </Typography>
        </Link>
        <Divider sx={{ marginY: 2 }} />
        <Box>
          <Typography variant={isMobile ? 'subtitle1' : 'h6'}>
            Abstract:
          </Typography>
          <Typography variant={isMobile ? 'body2' : 'body1'}>
            {speaker.description}
          </Typography>
        </Box>
      </CardContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ProfessorModal
