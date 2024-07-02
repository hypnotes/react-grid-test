import { Column, ReactGrid, Row } from '@silevis/reactgrid'
import '@silevis/reactgrid/styles.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'

interface Person {
  name: string
  surname: string
}

const getPeople = (): Person[] => [
  { name: 'Thomas', surname: 'Goldman' },
  { name: 'Susie', surname: 'Quattro' },
  { name: '', surname: '' }
]

const getColumns = (): Column[] => [
  { columnId: 'name', width: 150 },
  { columnId: 'surname', width: 150 }
]

const headerRow: Row = {
  rowId: 'header',
  cells: [
    { type: 'header', text: 'Name' },
    { type: 'header', text: 'Surname' }
  ]
}

const getRows = (people: Person[]): Row[] => [
  headerRow,
  ...people.map<Row>((person, idx) => ({
    rowId: idx,
    cells: [
      { type: 'text', text: person.name },
      { type: 'text', text: person.surname }
    ]
  }))
]

export default function HomePage() {
  const [people] = useState<Person[]>(getPeople())

  const rows = getRows(people)
  const columns = getColumns()

  return (
    <Wrapper>
      <Typography variant="h4" fontWeight={'bold'}>
        REACT GRID for Android
      </Typography>
      <Link
        to="https://reactgrid.com/"
        target="_blank"
        style={{ color: 'inherit' }}
      >
        <Typography variant="h6">https://reactgrid.com/</Typography>
      </Link>
      <Box bgcolor={'white'} borderRadius={2} marginTop={2} p={2}>
        <ReactGrid rows={rows} columns={columns} />
      </Box>
    </Wrapper>
  )
}

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  marginTop: theme.spacing(5),
  padding: theme.spacing(2)
}))
