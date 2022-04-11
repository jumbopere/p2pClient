import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

import useStyles from "./styles"

const Footer = () => {
  const classes = useStyles();
 
  return (
    <footer className={classes.footer} >
    <Container maxWidth="xl">
      <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
        <Typography component={Link} to="/" color="inherit" underline="none">
         
        </Typography>
        <Box component="nav" className={classes.footerNav}>
          <Typography variant="body1" color="#6b7280" className={classes.footerLink} component={Link} to="/">About </Typography>
          <Typography variant="body1" color="#6b7280" className={classes.footerLink} component={Link} to="/">Contact</Typography>
          <Typography  variant="body1" color="#6b7280" className={classes.footerLink} component={Link} to="/">Privacy Policy</Typography>
          <Typography variant="body1" color="#6b7280" className={classes.footerLink} component={Link} to="/">Transcations</Typography>
        </Box>
        <Typography color="#6b7280" component="p" variant="caption" gutterBottom={false}> © 2020 P2P All rights reserved.</Typography>
      </Box>
    </Container>
  </footer>
)
}

export default Footer