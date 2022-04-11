import React, { useState } from 'react';
import { AppBar, MenuItem, Grid, Box, Typography, Button, Toolbar,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen]= useState(false)
    const [user, setUser]= useState(false)
    const handleClick=()=> {
        setIsOpen(!isOpen)
        console.log('ki')
    }
  return (
    <AppBar className={classes.appBar} position="absolute" >
     <Toolbar className={classes.toolbar}>
         h1
     </Toolbar> 
     
        <div className={classes.appBrand} >
            <div className={classes.leftDiv}>
<div className={classes.div1}>
<Box flexShrink={0}>
<img src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="workflow" className={classes.image}/>
</Box>
<Box  display={{xs:"none", md:"block"}}>
<Box className={classes.linksBox}>
<Typography className={classes.linkText} component={Link} to="#">
Dashboard
</Typography>
<Typography className={classes.linkText} component={Link} to="#">
Profile
</Typography>
<Typography className={classes.linkText } component={Link} to="#">
Transactions
</Typography>
</Box> 

</Box>

</div>
<Box className={classes.div2}  display={{xs:"flex", md:"none"}}>
<Button className={classes.button} onClick={() => setIsOpen((isOpen) => !isOpen)} type="button" aria-expanded="false" aria-controls='mobile-menu'>
    {
        !isOpen ? (
<MenuIcon className={classes.menuIcon}  aria-hidden="true"/>
        ):
        (
            <CloseIcon className={classes.menuIcon} aria-hidden="true"/>
        )
    }

</Button>
</Box>
<Box  display={{xs:"none", md:"flex"}}>
    {
     user ? (
<Button color="secondary" variant='contained'>
    Logout
</Button>
     ): (
<Button color='primary' >
Sign in
</Button>
     )
    }

</Box>
</div>
        </div>
        
        <Transition
       show={isOpen}
       enter="transition ease-out duration-100 transform"
       enterFrom="opacity-0 scale-95"
       enterTo="opacity-100 scale-100"
       leave="transition ease-in duration-75 transform"
       leaveFrom="opacity-100 scale-100"
       leaveTo="opacity-0 scale-95"
        >
            {/* {(ref)=> { */}
<Box display={{md: "none"}} id ="mobile-menu">
    <div  className={classes.refDiv} >
    <Typography className={classes.linkText2} component={Link} to="#">
Dashboard
</Typography>
    <Typography className={classes.linkText2} component={Link} to="#">
Profile
</Typography>
    <Typography className={classes.linkText2} component={Link} to="#">
Transactions
</Typography>
{user &&(


    <Typography  className={classes.linkText2} component={Button} to="#">
Logout
</Typography>
)
}

    </div>

</Box>
            {/* }} */}
            
            </Transition>
          
    </AppBar>
  )
}

export default Navbar