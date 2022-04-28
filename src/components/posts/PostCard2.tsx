import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { postInterface } from '../interface/interface';
import PostCard from './PostCard';
import { useUser } from '../contexts/LoginContext';
import LongMenu from './LongMenu';

interface postCard {
  post : postInterface
}

export default function PostCardNew(props: postCard) {
  const { loggedInUser } = useUser();

  return (
    <div className='post'>

    <Card sx={{ width: '30rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.post.author.charAt(0)}
          </Avatar>
        }
        title={props.post.author}
        subheader={props.post.postTitle}
        />
      <CardContent>
            {props.post.author === loggedInUser.username ?
            <div className='rotated'>
            <LongMenu id={props.post._id} /> 
            </div> : null
            }
        <Typography variant="body2" color="text.secondary">
          {props.post.content}
        </Typography>
      </CardContent>
    </Card>
        </div>
  );
}