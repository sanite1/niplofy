import React from "react";
import classes from "./AdvertPreview.module.css";
import ProfileData from "./ProfileData";
const AdvertPreview = (props) => {
    const defaultPreview = <div className={classes.opsWrapper}>
        <img className={classes.opsImg} src={ProfileData.opsImg} alt="Product Pic" />
        <p className={classes.opsMsg}>Oops...Nothing to see here!!!</p>
    </div>
    let adItems;
    let allItems = ProfileData.adverts.all.map((item, pos) => {
        return ({
                stat: item.stat,
                productImg: item.productImg,
                productName: item.productName,
                productPrice: item.productPrice
            } 
        );
    });
    if (props.currentAdPos === 0) {
        adItems = allItems.filter(item => {
            return item.stat === "active";
            
        })
    } else if (props.currentAdPos === 1) {
        adItems = allItems.filter(item => {
            return item.stat === "reviewing";
            
        })
    } else if (props.currentAdPos === 2) {
        adItems = allItems.filter(item => {
            return item.stat === "rejected";
            
        })
    } else if (props.currentAdPos === 3) {
        adItems = allItems;
    }

    let finalAd;
    if (props.currentAdPos === 0) {
        finalAd = adItems.map((item, pos) => {
            let htmlCard;
            if (item.stat === "active") {
                htmlCard = <div className={classes.card}>
                    <img className={classes.proImg} src={item.productImg} alt="Product Pic" />
                    <p>Product name: {item.productName}</p>
                    <p>Product Price: {item.productPrice}</p>
                </div>
            }
            return (
                <div key={pos} className={classes.adItem} >
                    {htmlCard}
                </div>
            )
        })
    } else if (props.currentAdPos === 1) {
        finalAd = adItems.map((item, pos) => {
            let htmlCard;
            if (item.stat === "reviewing") {
                htmlCard = <div className={classes.card}>
                    <img className={classes.proImg} src={item.productImg} alt="Product Pic" />
                    <p>Product name: {item.productName}</p>
                    <p>Product Price: {item.productPrice}</p>
                </div>
            }
            return (
                <div key={pos} className={classes.adItem} >
                    {htmlCard}
                </div>
            )
        })
    } else if (props.currentAdPos === 2) {
        finalAd = adItems.map((item, pos) => {
            let htmlCard;
            if (item.stat === "rejected") {
                htmlCard = <div className={classes.card}>
                    <img className={classes.proImg} src={item.productImg} alt="Product Pic" />
                    <p>Product name: {item.productName}</p>
                    <p>Product Price: {item.productPrice}</p>
                </div>
            }
            return (
                <div key={pos} className={classes.adItem} >
                    {htmlCard}
                </div>
            )
        })
    } else if (props.currentAdPos === 3) {
        finalAd = adItems.map((item, pos) => {
            let style = [classes.card];
            if (item.stat === "active") {
                style.push(classes.active);
            } else if (item.stat === "reviewing") {
                style.push(classes.reviewing);
            } else if (item.stat === "rejected") {
                style.push(classes.rejected);
            }
            return (
                <div key={pos} className={classes.wow} >
                    <div className={style.join(" ")}>
                        <img className={classes.proImg} src={item.productImg} alt="Product Pic" />
                        <p>Product name: {item.productName}</p>
                        <p>Product Price: {item.productPrice}</p>
                        <p className={classes.status}>{item.stat}</p>
                    </div>
                </div>
            )
        })
    }

    
    const adLen = adItems.length;
    // console.log(adLen + " " + adItems + "\n" + finalAd)
    return (
        <div className={classes.adPreviewWrapper}>
            {adLen < 1 ? defaultPreview : finalAd}
        </div>
    );
}


export default AdvertPreview;