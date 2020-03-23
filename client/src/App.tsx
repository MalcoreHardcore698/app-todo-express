import React, { useState, useEffect } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

/*
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
*/

import './App.css'

/*
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">News</Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
*/

const App = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetсhing = async () => {
      fetch('http://localhost:4200/api/list')
        .then(res => res.json())
        .then(data => setList(data))
    }
    fetсhing()
  }, [])

  return (
    <div class="App">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Название задачи</TableCell>
              <TableCell align="right">Автор задачи</TableCell>
              <TableCell align="right">Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">{item.title}</TableCell>
                <TableCell align="right">{item.userId}</TableCell>
                <TableCell align="right">{item.completed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
