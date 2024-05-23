import * as React from 'react'
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { PaletteMode } from '@mui/material'
import IconButton from '@mui/material/IconButton'

interface ToggleColorModeProps {
  mode: PaletteMode
  toggleColorMode: () => void
}

export default function ToggleColorMode({
  mode,
  toggleColorMode
}: ToggleColorModeProps) {
  return (
    <IconButton
      onClick={toggleColorMode}
      color="primary"
      aria-label="Theme toggle button"
      size="small"
    >
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  )
}
