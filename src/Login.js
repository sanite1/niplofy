import React from "react";
import classes from "./Login.module.css"

const Login = (props) => {
    return (
        <div>
            <div className={classes.loginWrapper}>
                <div className={classes.carousel}>
                    {/* Create a carousel and put abeg */}
                </div>
                <div className={classes.loginForm}>
                    <h1>Enter Your Account</h1>
                    <div className={classes.signinOpts}>
                        <button className={classes.signinOptsBtnGoogle} onClick={props.onLoginClick}>Sign in with Google</button>
                        <button className={classes.signinOptsBtnFacebook} onClick={props.onSignupClick}>Sign in with Facebook</button>
                    </div>
                    <p className={classes.text}>Or Sign in with email address below</p>
                    <input className={classes.inputBox} type="text" placeholder="Email Address" name="username"/>
                    <br/>
                    {/* <p class="hidden">Not a valid username</p> */}
                    <br/>
                    <input className={classes.inputBox} type="password" placeholder="Password" name="password"/>
                    
                    <br/>
                    <p className={classes.passReset}>Fogot Password?</p>
                    <br/>
                    {/* <input className={classes.check} type="checkbox" name="check"/> */}
                    <button className={classes.loginBtn} onClick={props.onLoginClick}>Login</button>
                    <p className={classes.signupOpt}>Dont have an account? <span className={classes.signupBtn}  onClick={props.onSignupClick}>Sign Up</span></p>
                </div>
                
            </div>
        </div>
    );
}

export default Login