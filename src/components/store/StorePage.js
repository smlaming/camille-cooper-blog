import React, { useState, useEffect } from "react";
import { GridList } from "@material-ui/core";
import { Paper, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
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
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import ItemImage from "./ItemImage";
import { borders } from "@material-ui/system";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
      <hr></hr>
      <h1 style={{ fontFamily: "Playfair Display", fontSize: 34 }}>Store</h1>
      <hr></hr>
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
            height: "300px",
            display: "inline-block",
            margin: "3%",
            padding: "2%",
            backgroundColor: "#C4D5C4",
          }}
          elevation={3}
        >
          <div>
            <h3
              style={{ color: "#1f4060" }}
              onClick={() => {
                handleClickOpen(i);
              }}
            >
              {i.name}
            </h3>
            <p style={{ bottom: 7, right: 3 }}>Price: {i.price}</p>
            <ItemImage
              item={i}
              onClick={() => {
                handleClickOpen(i);
              }}
            />
            <Button
              variant="outlined"
              style={{ color: "#2F2C7A" }}
              onClick={() => checkoutItem(i)}
            >
              Add to cart
            </Button>
          </div>
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
      <DialogContent>{value.details}</DialogContent>
    </Dialog>
  );
}
