import React, { useState, useEffect } from "react";
import { GridList } from "@material-ui/core";
import { Paper, IconButton } from "@material-ui/core";
import axios from "axios";
import ItemImage from "./ItemImage";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

function DisplayCart() {
  const [cartData, setCartData] = useState();

  const getItems = () => {
    fetch("http://localhost:8000/cart/items")
      .then((response) => response.json())
      .then((response) => {
        console.log("cart products fetched");
        console.log(response);
        setCartData(response);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      <Link to="/">
        <Button>Back To Shopping</Button>
      </Link>
      <GridList style={{ justifyContent: "center" }}>
        {cartData && <DisplayItems data={cartData} />}
      </GridList>
    </div>
  );
}

function DisplayItems(props) {
  const [details, setDetails] = useState(false);
  const [description, setDescription] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

  function removeItem(i) {
    axios.delete("http://localhost:8000/cart/remove", {
      data: {
        item: i.name,
      },
    });
  }

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
            height: "auto",
            display: "inline-block",
            margin: "3%",
            padding: "2%",
            backgroundColor: "#C4D5C4",
          }}
          className="ItemCover"
          onClick={() => {
            handleClickOpen(i);
          }}
          elevation={3}
        >
          <div>
            <h3 style={{ color: "#1f4060" }}>{i.name}</h3>
            <p style={{ bottom: 7, right: 3 }}>Price: {i.price}</p>
            <ItemImage item={i} />
            <Button
              variant="outlined"
              style={{ color: "#2F2C7A" }}
              onClick={() => removeItem(i)}
            >
              Remove From Cart
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

export default DisplayCart;

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
