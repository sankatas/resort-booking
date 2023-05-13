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
        <Typography variant="h4">{resort.resortName}</Typography>
        <Typography variant="subtitle1">{`${resort.resortLocation.city}, ${resort.resortLocation.state}, ${resort.resortLocation.country}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" className={classes.description}>
          {resort.description}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <DatePicker
          label="Select a date"
          value={selectedDate}
          onChange={handleDateChange}
          className={classes.datepicker}
          disablePast
          renderInput={(params) => <TextField {...params} />}
        /> */}
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
