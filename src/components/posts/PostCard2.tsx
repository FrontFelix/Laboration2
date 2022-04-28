import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { postInterface } from '../interface/interface';
import PostCard from './PostCard';

interface postCard {
  post : postInterface
}

export default function RecipeReviewCard() {

  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            F
          </Avatar>
        }
        action={
          <IconButton className='rotated' aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="FlxBkm"
        subheader="April 28, 2022"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is a test post written by this absolute mongoDB. 
          AdaHep fell off and Felix invested all his money into NFTs
        </Typography>
      </CardContent>
    </Card>
  );
}