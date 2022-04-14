import React from "react";
import OurTeamData from "./OurTeamData";
import classes from "./OurTeam.module.css";

const OurTeam = (props) => {
    return (
        <div className={classes.wrapper}>
            <img src={OurTeamData[props.position].img} alt="Profile Pic"/>
            <div class="infouser">
                <h2>{OurTeamData[props.position].name}</h2>
                <p class="title2">{OurTeamData[props.position].role}</p>
            </div>
        </div>
    );
}

export default OurTeam;