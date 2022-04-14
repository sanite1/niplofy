import React, { Component } from "react";
import classes from "./ProductDescription.module.css";
import ProductDescriptionData from "./ProductDescriptionData";

class ProductDescription extends Component {

    state = {
        currentPreviewImg: 0,
        currentOption: 0,
        rating: ProductDescriptionData.rating
    }

    onImgOptionClick = (pos) => {
        console.log(pos);
        this.setState({currentPreviewImg: pos});
    }

    onOptionClick = (pos) => {
        console.log(pos);
        this.setState({currentOption: pos});
    }

    iconStyle = {
        fontSize: "30px",
        marginRight: "10px",
        color: "grey"
    }

    options = ["Overview", "Description", "Policy", "Feedback"];

    defaultImg = <i class="fas fa-user-circle"></i>
    render () {
        const currentOpt = this.options[this.state.currentOption];
        let star;
        if (this.state.rating === 5) {
            star = "⭐⭐⭐⭐⭐";
        } if (this.state.rating === 4) {
            star = "⭐⭐⭐⭐";
        } if (this.state.rating === 3) {
            star = "⭐⭐⭐";
        } if (this.state.rating === 2) {
            star = "⭐⭐";
        } if (this.state.rating === 1) {
            star = "⭐";
        }
        let display;
        if (currentOpt === "Overview") {
            display = ProductDescriptionData.Overview;
        } else if (currentOpt === "Description") {
            display = ProductDescriptionData.Description;
        } else if (currentOpt === "Policy") {
            display = ProductDescriptionData.Policy;
        } else if (currentOpt === "Feedback") {
            display = ProductDescriptionData.Feedback;
        }
        console.log(ProductDescriptionData.currentOpt)
        const otherImgs = ProductDescriptionData.otherImgs.map((item, pos) => {
            const classArr = [classes.otherImgs];
            if (pos === this.state.currentPreviewImg) {
                classArr.push(classes.selectedImg);
            }
            return(
                <img key={pos} className={classArr.join(" ")} onClick={() => {this.onImgOptionClick(pos)}} src={item.img} alt="Img" />
            );
        });
        const options1 = this.options.map((item, pos) => {
            const classArr = [classes.optionItem];
            if (pos === this.state.currentOption) {
                classArr.push(classes.selectedOpt);
            }
            return (
                <span key={pos} className={classArr.join(" ")} onClick={() => {this.onOptionClick(pos)}}>{item}</span>
            );
        });
        
        return (
            <div>
                <div className={classes.wrapper000}>
                    <div className={classes.wrapper00}>
                        <div className={classes.wrapper1}>
                            <img className={classes.mainImg} src={ProductDescriptionData.otherImgs[this.state.currentPreviewImg].img} alt="Product Img" />
                            <hr/>
                            <div className={classes.imgOptions}>
                                {otherImgs}
                            </div>
                        </div>

                        <div className={classes.wrapper2}>
                            <h2>{ProductDescriptionData.productName}</h2>
                            <h3>{ProductDescriptionData.productPrice}</h3>
                            <p>Rating: {star}</p>
                            <hr/>
                            
                            <button className={classes.btn}><i class="fa fa-phone-square"></i> Show Contact</button>
                            <button className={classes.btn}>Request Call</button>
                            <p>Share with a friend</p>
                            <i class="fa fa-facebook-square" style={this.iconStyle}></i>
                            <i class="fa fa-instagram" style={this.iconStyle}></i>
                            <i class="fa fa-twitter" style={this.iconStyle}></i>
                            <i class="fa fa-whatsapp" style={this.iconStyle}></i>
                            <hr/>
                            <p>Seller Info</p>
                            <img className={classes.profileImg} src={ProductDescriptionData.profileImg} alt={this.defaultImg} />
                            <h3 className={classes.sellerName}>{ProductDescriptionData.sellerName}</h3>
                            <br/>
                            <span className={classes.exStore}>Explore Store</span>

                        </div>
                    </div>
                    <div className={classes.wrapper11}>
                        <div className={classes.wrapper110}>
                            <div className={classes.tips}>
                                <h3>Safety Tips</h3>
                                <ul>
                                    <li>Do not pay in advance even for delivery</li>
                                    <li>Try to meet in safe public location</li>
                                    <li>Do not disclose personal information like your address</li>
                                    <li>Check item before you buy it</li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                        <div className={classes.wrapper111}>
                            <button className={classes.btn2}><i class="fa fa-star"></i> Leave A Rating</button>
                            <button className={classes.btn2}><i class="fa fa-comment"></i> Send Feedback</button>
                        </div>
                    </div>
                </div>

                <div className={classes.descWrapper}>
                    <div className={classes.descWrapper2}>
                        <div className={classes.options}>
                            {options1}
                        </div>
                        <div className={classes.optDesc}>
                            <p>
                                {display === "" ? 
                                "No " + currentOpt + " available for this item."  
                                :
                                display}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Add Top selling component below */}

                
            </div>
            
        );
    }
}

export default ProductDescription;