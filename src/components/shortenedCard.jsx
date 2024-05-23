import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './components_css/card.css'

function handleDelete(setShortURL) {

}

const card = (
  < React.Fragment >
    <CardContent>
      <Typography sx={{ fontSize: 14, color: 'white' }} color="text.secondary" gutterBottom>
        Shortened URL
      </Typography>
      {shortURL}
      {/* shortened url goes here */}
    </CardContent>
    <CardActions>
      <Button onClick={handleDelete} sx={{ color: 'red' }} size="small">Delete</Button>
    </CardActions>
  </React.Fragment >
);

export default function OutlinedCard({ shortURL, setShortURL }) {

  return (
    <div className='card'>
      <Box sx={{ minWidth: 100 }}>
        <Card sx={{ background: 'black' }} variant="outlined" >{card}</Card>
      </Box>
    </div>
  );
}
