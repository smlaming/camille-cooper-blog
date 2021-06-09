import React, { useState, useEffect } from "react";
import { GridList } from "@material-ui/core";
import { Paper, IconButton } from "@material-ui/core";
import axios from "axios";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

function DisplayStore() {
  const [productData, setProductData] = useState();

  const getItems = () => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((response) => {
        console.log("products fetched");
        console.log(response);
        setProductData(response);
      });
  };

  useEffect(() => {
    console.log("UseEffect called");
    getItems();
  }, []);

  return (
    <div>
      <h1>The Store</h1>
      <Link to="/myCart">View Cart</Link>
      <GridList style={{ justifyContent: "center" }}>
        {productData && <DisplayItems data={productData} />}
      </GridList>
    </div>
  );
}

function DisplayItems(props) {
  const [details, setDetails] = useState(false);
  const [description, setDescription] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

  async function handleClickOpen(i) {
    console.log("i equals", i);
    await setValue(i);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.data.map((i) => (
        <Paper
          style={{
            width: "37%",
            height: "17vw",
            display: "inline-block",
            margin: "3%",
            padding: "2%",
            backgroundColor: "#C4D5C4",
          }}
          elevation={3}
        >
          <h3 style={{ color: "#1f4060" }}>{i.name}</h3>
          <p style={{ color: "#004080" }}>Price: {i.price}</p>
          <button onClick={() => checkoutItem(i)}>Add to cart</button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClickOpen(i)}
          >
            Product Details
          </Button>
        </Paper>
      ))}
      {value && (
        <SimpleDialog value={value} open={open} onClose={handleClose} />
      )}
    </div>
  );
}

export default DisplayStore;

function checkoutItem(i) {
  axios.post("http://localhost:8000/cart/add", {
    name: i.name,
    price: i.price,
    image: i.image,
  });
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, value, open } = props;

  console.log("value:", value);
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">{value.name}</DialogTitle>
    </Dialog>
  );
}
