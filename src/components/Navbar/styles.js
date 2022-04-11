import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
  appBar: {
  backgroundColor:  "#1f2937",

  },
  toolbar:{
height:"0px",
display:"none"
  },

  appBrand:{
padding:" 0px 16px",
    [theme.breakpoints.only('lg')]: {
        padding: "0px 32px"
      },
    [theme.breakpoints.down('sm')]: {
        padding: "0px 24px"
      },
      maxWidth: "1280px"
  },
  leftDiv: {
    display:"flex",
   height:"64px",
    alignItems:"center",
    justifyContent:"space-between"
  },
  div1: {
display:"flex",
alignItems:"center"
  },

  image: {
height: "32px",
width:"32px"
  },
  linksBox: {
    display:"flex",
    alignItems:"baseline",
    marginLeft:"40px"
  },
  linkText: {
borderRadius: "6px",
color: "white",
lineHeight: "20px",
fontSize:"14px",
fontWeight:"500",
textDecoration: 'none',
marginLeft:"16px",
'&:hover': {
    background: "#374151",
 },
 padding:"8px 12px"
  },
  div2: {
      marginRight:"-8px",
  },
  
  button: {
      display: "inline-flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#111827",
      padding: "8px",
      borderRadius:"6px",
      color:"#9ca3af",
      '&:hover': {
        color: "white",
        background:"#1f2937"
     },
     '&: focus': {
        outline: "2px solid transparent",
        outlineOffset: "2px"
     }
    
  },
  menuIcon: {
      width:"20px",
      height:"20px",
      display:"block"
  },
  refDiv: {
  padding:"8px 8px 12px",
  marginTop:"4px",
  [theme.breakpoints.up('md')]: {
   padding:"0 12px"
  },
  },
  linkText2: {
      display:"block",
    borderRadius: "6px",
    color: "white",
    lineHeight: "24px",
    fontSize:"16px",
    fontWeight:"500",
    textDecoration: 'none',
    marginLeft:"16px",
    '&:hover': {
        background: "#374151",
     },
     padding:"8px 12px",
     
      },
      

}));