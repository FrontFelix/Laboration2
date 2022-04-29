import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useUser } from '../contexts/LoginContext';
import { postInterface } from '../interface/interface';
import LongMenu from './LongMenu';

interface postCard {
  post : postInterface
}

export default function PostCard(props: postCard) {
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