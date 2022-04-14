import React, { Component } from "react";
import classes from "./Profile.module.css";
import ProfileReview from "./ProfilePreview";
import ProfileData from "./ProfileData";

class Profile extends Component {

    state = {
        currentOptionPos: 0,
        full: undefined
    }
    onOptClick = (pos) => {
        console.log(`${pos} was clicked`)
        this.setState({currentOptionPos: pos});
    }
    
    // getReq = async () => {
    //     const requestOptions = {
    //         method: "GET",
    //         headers: {"Content-Type": "application/json"},
    //         // body: JSON.stringify(data)
    //     };
    //     const response = await fetch("http://localhost:8000/posts", requestOptions);
    //     const jsonData = await response.json();
    //     // this.setState({full: jsonData.fname})
    //     // console.log(jsonData);
    //     return jsonData;
    // }
    postReq = async (data) => {
        // const prevData = this.getReq();
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        };
        const response = await fetch("http://localhost:8000/posts", requestOptions);
        const jsonData = await response.json();

        console.log(jsonData)
    }
    render() {
        // let fullData;
        // this.getReq()
        // .then((val) => { 
        //     console.log(val.fname);
            
        // })
        const pract = {
            name: "Sanni Collins",
            age: 19,
            education: "Babcock University",
            id: 2
        }
        this.postReq(pract)
        
        const subHeaders = ProfileData.options.map((item, pos) => {
            const classArr = [classes.subHeadingTxt];
            if (pos === this.state.currentOptionPos) {
                classArr.push(classes.selectedSub);
            }
            return (
                <div key={item.id} onClick={() => {this.onOptClick(pos)}} className={classArr.join(" ")} >
                    <p>{item.name}</p>
                </div>
            );
        })
        return (
            <div className={classes.wrapper}>
                <div className={classes.wrapper000}>
                    <div className={classes.wrapper00}>
                        <div className={classes.imgShow}>
                            <img src={ProfileData.profilePic} alt="Profile Pic"/>
                            <p>{ProfileData.fname + " " + ProfileData.lname}</p>
                        </div>
                        <hr className={classes.ruler2} />
                        {subHeaders}
                    </div>
                    <div className={classes.wrapper11}>
                        <ProfileReview currentOptionPos={this.state.currentOptionPos} />
                    </div>
                </div>

                <div className={classes.descWrapper}>
                    <div className={classes.descWrapper2}>
                        {
                            console.log("full " + this.state.full)
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default Profile;