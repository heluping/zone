import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));



const rows = [{
  name: 'me',
  calories: 1,
  fat: 2,
  carbs: 3,
  protein: 4
}, {
  name: 'u',
  calories: 1,
  fat: 2,
  carbs: 3,
  protein: 4
}, {
  name: 'she',
  calories: 1,
  fat: 2,
  carbs: 3,
  protein: 4
}]


export default function SimpleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [total] = React.useState(100);
  const [limit, setLimit] = React.useState(5);

  const changePage = (e, val) => {
    setPage(val)
  }

  const changeLimit = (e) => {
    setPage(1)
    setLimit(+e.target.value)
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          page={page}
          count={total}
          rowsPerPage={limit}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={ changePage }
          onChangeRowsPerPage={ changeLimit }
        />
    </Paper>
  );
}