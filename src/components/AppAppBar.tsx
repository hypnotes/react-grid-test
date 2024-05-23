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
  { title: 'Keynote & Speakers', path: 'keynote' },
  { title: 'Program', path: 'program' }
]

export default function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false)
  const [isTopmostHome, setIsTopHome] = React.useState(true)
  const [isHomePage, setIsHomePage] = React.useState(
    window.location.pathname === '/'
  )

  React.useEffect(() => {
    setIsHomePage(window.location.pathname === '/')
  }, [window.location.pathname])

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopHome(true)
      } else {
        setIsTopHome(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <CustomToolbar
        variant="regular"
        isTopmostHome={isTopmostHome}
        isHome={isHomePage}
      >
        <CustomBox>
          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <Sitemark isRevert={isTopmostHome} />
          </Box>
        </CustomBox>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {appNavLinks.map((link) => (
            <Button
              variant="text"
              color="info"
              size="small"
              onClick={() => navigate(link.path)}
              key={link.title + link.path}
              style={{
                color: isTopmostHome && isHomePage ? 'white' : ' '
              }}
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
            <MenuIcon sx={{ color: 'primary.main' }} />
          </IconButton>
          <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
            <DrawerBox>
              <DrawerDrawerBox>
                <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                  <Sitemark isRevert={false} />
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
                <MenuItem
                  onClick={() => clickFromDrawer(link.path)}
                  key={link.path}
                >
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

interface CustomToolbarProps {
  isTopmostHome: boolean
  isHome: boolean
}

const CustomToolbar = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== 'isTopmostHome' && prop !== 'isHome'
})<CustomToolbarProps>(({ theme, isTopmostHome, isHome }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  backgroundColor: isTopmostHome
    ? 'transparent'
    : theme.palette.background.paper,
  maxHeight: 40
}))

const CustomAppBar = styled(AppBar)({
  position: 'fixed',
  backgroundColor: 'transparent',
  backgroundImage: 'none'
})
