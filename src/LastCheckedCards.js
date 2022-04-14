import React from "react";
import LastCheckedData from "./LastCheckedData";


import classes from "./LastCheckedCards.module.css";

const LastCheckedCard = (props) => {
    
    return (
        <div className={classes.card}>
            <img className={classes.proImg} src={LastCheckedData[props.position].productImg} alt="Product Pic" />
            <p>Product name: {LastCheckedData[props.position].productName}</p>
            <p>Product Price: {LastCheckedData[props.position].productPrice}</p>
        </div>
    );
}


export default LastCheckedCard;