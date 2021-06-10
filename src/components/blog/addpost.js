import Add from "@material-ui/icons/Add"
import { makeStyles } from '@material-ui/core/styles';
import React, {  useState} from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import {FormControl, Select, MenuItem,InputLabel, Button} from "@material-ui/core";
import axios from "axios"
const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: "#c4d5c4",
      color: "#2f2c7a",
      height: 50,
      width:190,
      fontWeight: "bold",
      marginTop: 30
  },
  button2: {
    color: "#2f2c7a",
    height: 50,
    width:190,
    fontWeight: "bold",
    marginTop: 30
},
paper :{
    minWidth: "1000px"
}
  }));

export default function AddBlogPost({setBlog}){
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newtitle, setTitle] = useState("");
  const [newdescription, setDescription] = useState("");
  const [newquote, setQuote] = useState("");
  const [newphoto, setPhoto] = useState("");
  const [newtext, setText] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const updateData = () =>{
    fetch("http://localhost:8000/blog/get")
    .then((res)=> res.json())
    .then((res)=> {
      setBlog(res);
      console.log(res)
    }
    )
  }

  const handleChangeMenu = (e) => {
    setPhoto(e.target.value);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };


  const addPost = () =>{
    const curDate = new Date();
    const newPost = {
        title: newtitle,
        description:  newdescription,
        quote: newquote,
        photo: newphoto,
        date: curDate.toDateString().substring(3,10) + "," + curDate.toDateString().substring(10,15),
        fulltext: newtext
      }
      axios.post("http://localhost:8000/blog/addpost", newPost)
      .then(response => {
          console.log(response);
      })
      .catch(error => {
          console.log(error)
      })
      updateData();
      updateData();
      handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (e) =>{
    if ('title' === prop){
      setTitle(e.target.value)
    }
      if ('description' === prop){
        setDescription(e.target.value)
      }
      if ('quote' === prop){
        setQuote(e.target.value)
      }
      if ('photo' === prop){
        setPhoto(e.target.value)
      }
      if ('text' === prop){
        setText(e.target.value)
      }
}
    return(
        <div>
        <Button onClick={handleClickOpen} className={classes.button}><Add></Add>Add New Post</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  classes={{paper: classes.paper}} 
  >
        <DialogTitle style={{ display:"flex"}} id="form-dialog-title"><span style={{fontSize:30, fontWeight:"bold",marginLeft:370, fontFamily: "Playfair Display", color: "#2f2c7a"}}>Create New Post </span></DialogTitle>
        <DialogContent>
          <div style={{ marginLeft:30,marginRight:40}}> <h2 style={{fontWeight: "normal", fontSize:21, fontFamily: "Inter",color: "#2f2c7a"}}>Title</h2> <TextField variant="outlined" style={{width:885}}  onChange={handleChange('title')}/></div>
          <div style={{ marginLeft:30,marginRight:30}}><h2 style={{fontWeight: "normal", fontSize:21, marginTop:30, fontFamily: "Inter",color: "#2f2c7a", marginLeft:10}}> <span>Image</span>
          <span style={{marginLeft:280, fontFamily: "Inter"}}>Description</span></h2>  
          {/* <TextField multiline rows={7} variant="outlined" style={{ width:435}}  onChange={handleChange('photo')}/>  */}



          <FormControl className="form" style={{width:250, marginRight:10, marginLeft:10}}>
        <InputLabel  >Choose Photo</InputLabel> 
        <Select
          open={openMenu}
          onClose={handleCloseMenu}
          value={newphoto}
          onOpen={handleOpenMenu}
          onChange={handleChangeMenu}
        >
          <MenuItem value={"https://i.pinimg.com/564x/de/33/bf/de33bfdd2109e0b8d040934cb5acf127.jpg"}><img style={{width:150}} src="https://i.pinimg.com/564x/de/33/bf/de33bfdd2109e0b8d040934cb5acf127.jpg"></img></MenuItem>
          <MenuItem value={"https://i.pinimg.com/564x/cb/ac/37/cbac37faa797954fe633de391b8c6954.jpg"}><img style={{width:150}} src="https://i.pinimg.com/564x/cb/ac/37/cbac37faa797954fe633de391b8c6954.jpg"></img></MenuItem>
          <MenuItem value={"https://i.pinimg.com/474x/de/3f/88/de3f88f34e89d1f10e8644207a37a803.jpg"}><img style={{width:150}} src="https://i.pinimg.com/474x/de/3f/88/de3f88f34e89d1f10e8644207a37a803.jpg"></img></MenuItem>
          <MenuItem value={"https://i.pinimg.com/474x/b0/60/69/b060693bb9422da9ad032ec20ace2354.jpg"}><img style={{width:150}} src="https://i.pinimg.com/474x/b0/60/69/b060693bb9422da9ad032ec20ace2354.jpg"></img></MenuItem>
         

        </Select>
      </FormControl>






          <TextField multiline rows={8} variant="outlined" style={{ width:535, marginLeft: 80}}  onChange={handleChange('description')}/>
          </div>
          
          <div style={{ marginLeft:30,marginRight:40}}> <h2 style={{fontWeight: "normal", fontSize:21, fontFamily: "Inter",color: "#2f2c7a"}}>Quote</h2> <TextField variant="outlined" style={{width:885, marginTop:5}}  onChange={handleChange('quote')}/></div>
          <div style={{ marginLeft:30,marginRight:30}}><h2 style={{fontWeight: "normal", fontSize:21, marginTop:30, fontFamily: "Inter", color: "#2f2c7a",}}>Text</h2>  
           <TextField multiline rows={8} variant="outlined" style={{width: 885}} onChange={handleChange('text')}/></div>
        </DialogContent>
        <DialogActions>
        <Button className={classes.button2}  style={{marginLeft:20, marginRight:698,width:100, marginTop:18,marginBottom:10}} onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button className={classes.button} style={{marginRight:49, width:100, marginTop:18,marginBottom:10}} onClick={addPost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}