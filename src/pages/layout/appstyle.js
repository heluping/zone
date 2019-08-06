import React from 'react'
import {
	makeStyles
} from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'


export function HomeIcon(props) {
	return (
		<SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
	)
}

export const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		minWidth: '1396px',
		minHeight: '100vh'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1
	},
	title: {
		flexGrow: 1
	},
	exit: {
		marginLeft: '6px'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	icon: {
		marginRight: '6px',
		marginTop: '-4px'
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		overflow: 'hidden'
	},
	toolbar: theme.mixins.toolbar,
}))