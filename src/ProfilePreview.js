import React, { Component } from "react";
import classes from "./ProfilePreview.module.css";
import ProfileData from "./ProfileData";
import AdvertPreview from "./AdvertPreview";
import MyFaq from "./MyFaq";

class ProfileReview extends Component {
    state = {
        edit: false,
        currentAdPos: 0,
    }
 
    onEditClick = () => {
        this.setState((prevState, prevProps) => {
            return ({edit: !prevState.edit});
        });
    }

    onAdClick = (pos) => {
        this.setState({currentAdPos: pos});
    }

    adList = ["Active", "Reviewing", "Rejected", "All"];

    render() {

        const adOptions = this.adList.map((item, pos) => {
            const classArr = [classes.advertBtn];
            if (pos === this.state.currentAdPos) {
                classArr.push(classes.selectedAd);
            }
            return (
                <button key={pos} className={classArr.join(" ")} onClick={() => {this.onAdClick(pos)}}>{item}</button>
            );
        })

        let header, body;
        if (this.props.currentOptionPos === 0) {
            header = <div className={classes.heading1}>
                <p>My Account Overview</p>
                <button className={classes.editBtn} onClick={this.onEditClick}>{this.state.edit ? "Save Changes" : "Enable Edit"}</button>
            </div>
            body = <div className={classes.prevBody1}>
                <div className={classes.profilePic}>
                    <img src={ProfileData.profilePic} alt="Profile pic" />
                </div>
                
                <div className={classes.inputs}>
                    <input type="text" value={ProfileData.fname} disabled={!this.state.edit} placeholder="First Name" /><br/>
                    <input type="text" value={ProfileData.lname} disabled={!this.state.edit} placeholder="Last Name" /><br/>
                    <input type="email" value={ProfileData.email} disabled={!this.state.edit} placeholder="Email Address" /><br/>
                    <input type="password" disabled={!this.state.edit} placeholder="Current Password" /><br/>
                    <input type="password" disabled={!this.state.edit} placeholder="New Password" /><br/>
                    <input type="password" disabled={!this.state.edit} placeholder="Repeat Password" /><br/>
                </div>
                
            </div>
        }else if (this.props.currentOptionPos === 1) {
            header = <div className={classes.heading2}>
                <div className={classes.adHeading}>
                    <p>My Adverts</p>
                </div>
                <div className={classes.adBtns}>
                   {adOptions}
                </div>
            </div>
            body = <div className={classes.prevBody2}>
                <AdvertPreview currentAdPos={this.state.currentAdPos} />
            </div>
        }else if (this.props.currentOptionPos === 2) {
            header = <div className={classes.heading3}>
                <p>Frequently Asked Questions</p>
                <button className={classes.addQuestionBtn} onClick={this.onQuestionClick}>Add Question</button>
            </div>
            body = <div className={classes.prevBody3}>
                <MyFaq />
            </div>
        }
        return (
            
            <div className={classes.wrapper}>
                <div className={classes.preview}>
                    {header}
                    <hr className={classes.ruler2}/>
                    <div className={classes.mainBody}>
                        {body}
                    </div>
                    
                </div>
            </div>
        );
    }
    
}

export default ProfileReview;