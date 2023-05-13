import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from "../Assets/logoMain.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#141B2F",
    color: theme.palette.common.white,
    padding: theme.spacing(6),
    borderTop: "1px solid white",
  },
  logo: {
    height: 50,
    marginBottom: theme.spacing(2),
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  contactIcon: {
    marginRight: theme.spacing(1),
  },
  exploreLinks: {
    marginBottom: theme.spacing(2),
  },
  connectLinks: {
    marginBottom: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img src={Logo} alt="Resort Logo" className={classes.logo} />
          <div className={classes.contactItem}>
            <LocationOnIcon className={classes.contactIcon} />
            <Typography variant="body1">123 Resort Street</Typography>
          </div>
          <div className={classes.contactItem}>
            <PhoneIcon className={classes.contactIcon} />
            <Typography variant="body1">(123) 456-7890</Typography>
          </div>
          <div className={classes.contactItem}>
            <EmailIcon className={classes.contactIcon} />
            <Typography variant="body1">info@resort.com</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className={classes.exploreLinks}>Explore</Typography>
          <Typography variant="body1">Rooms</Typography>
          <Typography variant="body1">Amenities</Typography>
          <Typography variant="body1">Activities</Typography>
          <Typography variant="body1">Gallery</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className={classes.connectLinks}>Connect</Typography>
          <div className={classes.contactItem}>
            <FacebookIcon className={classes.contactIcon} />
            <Typography variant="body1">Facebook</Typography>
          </div>
          <div className={classes.contactItem}>
            <TwitterIcon className={classes.contactIcon} />
            <Typography variant="body1">Twitter</Typography>
          </div>
          <div className={classes.contactItem}>
            <InstagramIcon className={classes.contactIcon} />
            <Typography variant="body1">Instagram</Typography>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
