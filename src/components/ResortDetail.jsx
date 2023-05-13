import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: 400,
    objectFit: "cover",
  },
  description: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  datepicker: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  bookButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const ResortDetail = ({ resort }) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookClick = () => {
    console.log(`Booked for ${selectedDate} at ${resort.resortName}`);
  };

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <img src={resort.image} alt={resort.resortName} className={classes.image} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" style={{color: "#ffffff"}}>{resort.resortName}</Typography>
        <Typography variant="subtitle1" style={{color: "#ffffff"}}>{`${resort.resortLocation.city}, ${resort.resortLocation.state}, ${resort.resortLocation.country}`}</Typography>
      </Grid>
      <Grid item xs={12} style={{color: "#ffffff"}}>
        <Typography variant="body1" className={classes.description}>
          {resort.description}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBookClick}
          className={classes.bookButton}
          disabled={false}
        >
          Book Now for {resort.price} per night
        </Button>
      </Grid>
    </Grid>
  );
};

export default ResortDetail;
