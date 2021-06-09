import React, { useState, useEffect } from "react";
import { GridList } from "@material-ui/core";
import { Paper, IconButton } from "@material-ui/core";
import axios from "axios";
import ItemImage from "./ItemImage";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

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
      <Link to="/">Back to Shopping</Link>
      <GridList style={{ justifyContent: "center" }}>
        {cartData && <DisplayItems data={cartData} />}
      </GridList>
    </div>
  );
}

function DisplayItems(props) {
  function removeItem(i) {
    axios.delete("http://localhost:8000/cart/remove", {
      data: {
        item: i.name,
      },
    });
  }

  return props.data.map((i) => {
    return (
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
        <ItemImage item={i} />
        <button onClick={() => removeItem(i)}>Remove from cart</button>
      </Paper>
    );
  });
}

export default DisplayCart;
