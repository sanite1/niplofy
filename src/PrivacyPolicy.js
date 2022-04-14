import React, {  Component } from "react";
import classes from "./PrivacyPolicy.module.css";
import PrivacyPolicyData from "./PrivacyPolicyData";

class PrivacyPolicy extends Component {
    state = {
        currentOptionPos: 0
    }
    onOptClick = (pos) => {
        console.log(`${pos} was clicked`)
        this.setState({currentOptionPos: pos});
    }
    render() {
        const subHeaders = PrivacyPolicyData.map((item, pos) => {
            const classArr = [classes.subHeadingTxt];
            if (pos === this.state.currentOptionPos) {
                classArr.push(classes.selectedSub);
            }
            return (
                <div key={item.id}>
                    <p className={classArr.join(" ")} onClick={() => {this.onOptClick(item.id-1)}}>{item.topic}</p>
                    <hr className={classes.ruler2} />
                </div>
            );
        })
        return (
            <div className={classes.wrapper}>

                <h1 className={classes.mainHeading}>Privacy Policy</h1>
                <hr className={classes.ruler1} />
                <div className={classes.subWrapper}>
                    <div className={classes.toc}>
                        {subHeaders}
                    </div>
                    <div className={classes.preview}>
                        <h3>{PrivacyPolicyData[this.state.currentOptionPos].topic}</h3>
                        <hr className={classes.ruler2}/>
                        {PrivacyPolicyData[this.state.currentOptionPos].body}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default PrivacyPolicy;