import { useState } from 'react'
import { CopyAll } from '@mui/icons-material'
import {
  Box,
  IconButton,
  Snackbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material'

const AddressBox = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [open, setOpen] = useState<null | string>(null)
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(
        '1 Chome-23-1 Toranomon, Minato City, Tokyo 105-6390'
      )
      handleClick('Copied to clipboard!')
    } catch (err) {
      handleClick('Failed to copy to clipboard')
    }
  }

  const handleClick = (msg: string) => {
    setOpen(msg)
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(null)
  }

  return (
    <ContainerBox>
      <AddressContainer>
        <Typography fontWeight={'bold'} color={'gray'}>
          Location
        </Typography>
        <FlexBox>
          <Typography variant={isMobile ? 'subtitle2' : 'h6'}>
            Toranomon Hill Forum Tower, Room B-2
          </Typography>
        </FlexBox>
        <FlexBox>
          <Typography
            textAlign={'center'}
            variant={isMobile ? 'caption' : 'body1'}
            color={'gray'}
          >
            1 Chome-23-1 Toranomon, Minato City, Tokyo 105-6390
          </Typography>
          <IconButton onClick={copyToClipboard} sx={{ p: 0, ml: 1 }}>
            <CopyAll color={'disabled'} fontSize="small" />
          </IconButton>
        </FlexBox>
      </AddressContainer>
      <Snackbar
        open={open !== null}
        autoHideDuration={2000}
        onClose={handleClose}
        message={open}
      />
    </ContainerBox>
  )
}

export default AddressBox

const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 3
})

const ContainerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 3,
  width: '100%'
})

const AddressContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  border: `1px solid ${theme.palette.primary.light}`,
  backgroundColor: 'rgba(0, 0, 0, 0.02)',
  width: '80%',
  maxWidth: 500,
  borderRadius: 12,
  marginTop: 20,
  padding: 10
}))
