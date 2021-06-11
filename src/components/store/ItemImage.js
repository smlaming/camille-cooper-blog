import React from "react";
import firebase from "../../firebase/firebase";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";

function ItemImage(props) {
  const storage = firebase.storage();
  const [imageAsURL, setImageAsURL] = useState();

  console.log(props.item.image);

  /**const getImage = () => {
    storage
      .ref("images")
      .child(props.item.image)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImageAsURL((prevObject) => ({ ...prevObject, imgUrl: fireBaseUrl }));
      });
  };

  useEffect(() => {
    getImage();
  }, []);

  {imageAsURL.imgUrl}
  */

  return (
    <div>
      {
        <img
          style={{ width: "30%", height: "auto" }}
          className="photo"
          src={props.item.image}
        />
      }
    </div>
  );
}

export default ItemImage;
