import React from "react";
import classes from "./Aboutus.module.css";
import OurTeam from "./OurTeam";
import OurTeamData from "./OurTeamData";

const Aboutus = () => {
    const team = OurTeamData.map((item, pos) => {
        return (
            <div className={classes.item} key={pos}>
                <OurTeam position={item.id-1} /> 
            </div>
                     
        );   
      });
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.subHeading}>ABOUT US</h1>
            <div className={classes.introWrapper}>
                <div className={classes.logoSide}>
                    <p className={classes.logoSideSubtitle}>E-commerce Store</p>
                </div>
                <div className={classes.txtArea}>
                    <p className={classes.introText}>
                        We are a team passionately focused on driving business success.
                    </p>
                    <p className={classes.introText}>
                        We believe that technology is the way to reach our development goals and empowering users
                    </p>
                    <p className={classes.introText}>
                        We provide a solution to sell and buy almost anything and our service is
                        aimed at achieving high level of convenience and customer satisfaction.
                    </p>
                    <p className={classes.introText}>
                        Our support is amazing, and we never stop learning!
                    </p>
                </div>
            </div>
            <h1 className={classes.subHeading}>OUR TEAM</h1>
            <hr/>
            <div className={classes.OurTeamWrapper}>
                {team}
            </div>
            <h1 className={classes.subHeading}>MISSION / VISION</h1>
            <hr/>
            <div className={classes.categories}>
                <div className={`${classes.smallContainer} ${classes.statement}`}>
                    <div className={classes.row3}>
                        <div className={classes.col22}>
                            <h2 className={classes.header2}>Our Mission:</h2>
                            <p>"Our mission is to bring satisfaction to every single one of our clients."</p>
                        </div>
                        <div className={classes.col22}>
                            <h2 className={classes.header2}>Our Vision:</h2>
                            <p>"Our vision is to create a world class avenue to buy and sell almost anything."</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;