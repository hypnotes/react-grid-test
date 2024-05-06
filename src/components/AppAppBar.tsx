import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Sitemark from '@components/SitemarkIcon'
import ToggleColorMode from '@components/ToggleColorMode'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuIcon from '@mui/icons-material/Menu'
import { PaletteMode, styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'

interface AppAppBarProps {
  mode: PaletteMode
  toggleColorMode: () => void
}

const appNavLinks = [
  { title: 'Home', path: '/' },
  { title: 'Committee', path: 'committee' },
  { title: 'Keynote', path: 'keynote' },
  { title: 'Program', path: 'program' }
]

export default function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const navigate = useNavigate()

  const clickFromDrawer = (path: string) => {
    toggleDrawer(false)()
    navigate(path)
  }

  return (
    <CustomAppBar sx={{ boxShadow: 0 }}>
      <CustomToolbar variant="regular">
        <CustomBox>
          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <Sitemark />
          </Box>
        </CustomBox>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {appNavLinks.map((link) => (
            <Button
              variant="text"
              color="info"
              size="small"
              onClick={() => navigate(link.path)}
            >
              {link.title}
            </Button>
          ))}
          <ColorBox display={{ xs: 'none', md: 'flex' }}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </ColorBox>
        </Box>
        <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
          <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
            <DrawerBox>
              <DrawerDrawerBox>
                <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                  <Sitemark />
                </Box>
                <Box>
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
              </DrawerDrawerBox>
              <Divider sx={{ my: 1 }} />
              {appNavLinks.map((link) => (
                <MenuItem onClick={() => clickFromDrawer(link.path)}>
                  {link.title}
                </MenuItem>
              ))}
            </DrawerBox>
          </Drawer>
        </Box>
      </CustomToolbar>
    </CustomAppBar>
  )
}

const DrawerDrawerBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 12
})

const DrawerBox = styled(Box)({
  padding: 2,
  backgroundColor: 'background.default'
})

const ColorBox = styled(Box)(({ theme }) => ({
  gap: 0.5,
  alignItems: 'center'
}))

const CustomBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  padding: 0
})

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  bgcolor:
    theme.palette.mode === 'light'
      ? 'hsla(220, 60%, 99%, 0.6)'
      : 'hsla(220, 0%, 0%, 0.7)',
  backdropFilter: 'blur(24px)',
  maxHeight: 40,
  border: '1px solid',
  borderColor: 'divider',
  boxShadow:
    theme.palette.mode === 'light'
      ? '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)'
      : '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)'
}))

const CustomAppBar = styled(AppBar)({
  position: 'fixed',
  backgroundColor: 'transparent',
  backgroundImage: 'none'
})
