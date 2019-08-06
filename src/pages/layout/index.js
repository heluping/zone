import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import {
  NavLink
} from 'react-router-dom'
import {
  useStyles,
  HomeIcon
} from './appstyle'
import Routes from '../../routes'
import {
  routes
} from '../../routes/config'
import './index.css'



export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
		  <Avatar src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564644547186&di=86a665446478f86ac5782de5544d5f63&imgtype=0&src=http%3A%2F%2Fstatic.zuidaima.com%2Fuploads%2F140473%2F201610%2F20161027101349145.jpg'></Avatar>
		  <Button color="inherit" className={classes.exit}>退出</Button>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />
        <List>
          { routes.map(item => (
          	<NavLink to={item.path} key={item.name} className='navs' activeClassName="current" exact>
            <ListItem button  >
              	<HomeIcon color="primary" className={classes.icon}></HomeIcon>
              	<ListItemText primary={item.title} />
            </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
		<div className={classes.toolbar} />
		<div className='mains'>
			<Routes></Routes>
		</div>
      </main>
    </div>
  );
}