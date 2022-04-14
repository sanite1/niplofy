import React from "react";
import classes from "./Signup.module.css"

const Signup = (props) => {
    return (
        <div>
            <div className={classes.signupWrapper}>
                <div className={classes.carousel}>
                    {/* Create a carousel and put abeg */}
                </div>
                <div className={classes.loginForm}>
                    <h1>Create Your Account</h1>
                    <div className={classes.signinOpts}>
                        <button className={classes.signinOptsBtnGoogle} onClick={props.onLoginClick}>Sign up with Google</button>
                        <button className={classes.signinOptsBtnFacebook} onClick={props.onSignupClick}>Sign up with Facebook</button>
                    </div>
                    <p className={classes.text}>Or Sign up with email address below</p>
                    <input className={classes.inputBox} type="text" placeholder="Full Name" name="name"/>
                    <br/>
                    <input className={classes.inputBox} type="text" placeholder="Phone Number" name="pnumber"/>
                    <br/>
                    <input className={classes.inputBox} type="email" placeholder="Email Address" name="username"/>
                    <br/>
                    {/* <p class="hidden">Not a valid username</p> */}
                    
                    <input className={classes.inputBox} type="password" placeholder="Password" name="password"/>
                    <br/>
                    <input className={classes.inputBox} type="password" placeholder="Repeat Password" name="password"/>
                    <br/>
                    <p className={classes.passReset}>Fogot Password?</p>
                    <br/>
                    {/* <input className={classes.check} type="checkbox" name="check"/> */}
                    <button className={classes.loginBtn} onClick={props.onLoginClick}>Sign up</button>
                    <p className={classes.signupOpt}>Already have an account? <span className={classes.signupBtn}  onClick={props.onSignupClick}>Login</span></p>
                </div>
                    
            </div>
        </div>
        
    );
}

export default Signup