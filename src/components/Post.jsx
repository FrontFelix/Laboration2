import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const PostCard = ({ post }) => {
  return <div>{post.postTitle}</div>;
};

// const post = (
//   <React.Fragment>
//     <CardContent>
//       <Typography variant="h5" component="div">
//         ASD
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//   </React.Fragment>
// );

// export default function OutlinedCard(props) {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{props.postTitle}</Card>
//     </Box>
//   );
// }
