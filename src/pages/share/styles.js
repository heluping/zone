import {
	makeStyles
} from '@material-ui/core/styles';
import {
	red
} from '@material-ui/core/colors';


export const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 345,
		margin: '0 20px 20px 0'
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	},

	avatar: {
		backgroundColor: red[500],
	},

	share: {
		justifyContent: 'flex-end'
	},
	choose: {
		color: red[500]
	}
}));