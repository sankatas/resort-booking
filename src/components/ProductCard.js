import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ResortDetail from '../components/ResortDetail'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProductCard({info}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, ["left"]: open });
  };

  const list = (anchor, info) => (
    <Box
      sx={{ width: 900, anchor: "left" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ResortDetail resort={info}/>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
  console.log(info, 'info')

  return (
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={info.image}
          title={info.resortName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {info.resortName}
            <Typography>{info.resortLocation.country}</Typography>
            <Typography>{info.resortLocation.city}</Typography>
          </Typography>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h6" component="h3">
            {info.price}
          </Typography>
          <Button onClick={toggleDrawer(true)} variant="contained">more</Button>
          </div>
          
          <Typography style={{marginTop: '10px'}} variant="body2" color="textSecondary" component="p">
            {info.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer(false)}
          >
            {list('left', info)}
          </Drawer>
    </Card>
  );
}

export default ProductCard;
