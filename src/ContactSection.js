import classes from "./ContactSection.module.css";
import "./ContactSection.css";

const ContactSection = (props) => {
    return (
        <div>
            <div className={classes.contactSecWrapper}>
            <div className={classes.address}>
              <h2 className={classes.brandName}>Niplofy</h2>
              <p><i className="fa fa-map adIcon"></i>Babcock University, Ilishan Remo, Ogun State.</p>
              <p><i className="fa fa-phone adIcon"></i>(+234) 000-000-0000</p>
              <p><i className="fa fa-envelope adIcon"></i>niplofy@gmail.com</p>

            </div>
            <div className={classes.links}>
              <h2 className={classes.brandName}>Links</h2>
              <div className={classes.linksWrapper}>
                <a className={classes.linkItem} href="/">Home</a>
                <a className={classes.linkItem} href="/">About us</a>
                <a className={classes.linkItem} href="/">Contact</a>
                <a className={classes.linkItem} href="/">Explore</a>
                <a className={classes.linkItem} href="/">Sell Here</a>
              </div>
            </div>

            <div className={classes.newsletter}>
              <h2 className={classes.brandName}>Newsletter</h2>
              <p>Let us know how we can help you</p>
              <input className={classes.emailInput} type="email" placeholder="Email Address" />
              <button type="submit" href="mailto:niplofy@gmail.com" className={classes.submitEmail}>OK</button><br/>
              <a href="/"><i className="fa fa-facebook fa-2x socials"></i></a>
              <a href="/"><i className="fa fa-instagram fa-2x socials"></i></a>
              <a href="/"><i className="fa fa-twitter fa-2x socials"></i></a>
            </div>
          </div>
          <hr className={classes.ruler}/>
          <a className={classes.footerItem} href="/">TERM & CONDITIONS</a>
          <a className={classes.footerItem} href="/">PRIVACY POLICY</a>
          <p></p>
          
        </div>
    );
}
export default ContactSection;