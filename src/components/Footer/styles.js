import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
    textDecoration:"none",
    '&:hover': {
      textDecoration:"underline",
      color:"#1f2937"
   },
  },
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    backgroundColor:  "#1f2937",
    
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
 footer:{
   height:"10px"
 }
  }));