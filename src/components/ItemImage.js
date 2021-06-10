import React from "react";
import firebase from "../firebase/firebase";
import axios from "axios";
import { useEffect, useState } from "react";

function ItemImage(props) {
  const storage = firebase.storage();
  const [imageAsURL, setImageAsURL] = useState();

  const getImage = () => {
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

  return (
    <div>
      {imageAsURL && (
        <img style={{ width: "30%", height: "auto" }} src={imageAsURL.imgUrl} />
      )}
    </div>
  );
}

export default ItemImage;
