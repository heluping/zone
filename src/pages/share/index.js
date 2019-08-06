import React, {
  useState
} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './index.css'
import {
  useStyles
} from './styles'

export default function RecipeReviewCard() {
  const classes = useStyles()
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [current, setCurrent] = useState(1)

  return (
    <div className = 'shares'> 
      {arr.map(item=>{
        return    <Card className={classes.card} key={item}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://bpic.588ku.com/illus_water_img/19/05/17/31d7ddee7dd10901bdca5efbd5cfa5d3.jpg!/fw/1920/quality/99/unsharp/true/compress/true"
        title="分享"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          hello world
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.share}>
        <IconButton aria-label="add to favorites" className={ current===item?classes.choose:null } onClick={ ()=>setCurrent(item) }>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" >
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>
      })
    }
    </div>
  );
}