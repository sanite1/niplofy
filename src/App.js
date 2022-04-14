// import classes from "./App.module.css";
// import LastCheckedCard from "./LastCheckedCards";
import { Component } from "react";
import LastCheckedData from "./LastCheckedData";
// import PrivacyPolicy from "./PrivacyPolicy";
// import ContactSection from "./ContactSection";
// import Login from "./Login"
// import Signup from "./Signup";
// import Aboutus from "./Aboutus";
// import TermsAndConditions from "./TermsAndConditions";
// import Faq from "./Faq";
// import ProductDescription from "./ProductDescription";
import Profile from "./Profile";

class App extends Component {
  state = {
    cards: [],
    LastCheckedData: LastCheckedData,
    loginValue: true
  }
  // onFeatClick = (pos) => {
  //   console.log(`Product ${pos} was clicked`);
    
  //   this.setState((prevState) => ({
  //       cards: [<LastCheckedCard position={pos} key={pos} />, ...prevState.cards]
  //   }));
  //   console.log(`${this.state.cards} is the current id`);
  // }

  onLoginClick = () => {
    this.setState({loginValue: true});
  }

  onSignupClick = () => {
    this.setState({loginValue: false});   
  }
  


  render() {
    console.log("Render Called")
    return (
      <div className="App">
        {/* Test Products (This section is not necessary... )*/}
        {/* The onClick property should be taken from each item and placed in indivitual products */}
        {/* The arguement passed to the onFeat click is an index from lastCheckedData */}
        {/* <div className={classes.feat} onClick={() => {this.onFeatClick(0)}}>
            <img src="something" alt="Product Pic1" />
            <p>Product name1</p>
            <p>Product Price1</p>
        </div>
        <div className={classes.feat} onClick={() => {this.onFeatClick(1)}}>
            <img src="something" alt="Product Pic2" />
            <p>Product name2</p>
            <p>Product Price2</p>
        </div>
        <div className={classes.feat} onClick={() => {this.onFeatClick(2)}}>
            <img src="something" alt="Product Pic1" />
            <p>Product name1</p>
            <p>Product Price1</p>
        </div>
        <div className={classes.feat} onClick={() => {this.onFeatClick(3)}}>
            <img src="something" alt="Product Pic2" />
            <p>Product name2</p>
            <p>Product Price2</p>
        </div> */}

        {/* Main Work */}
        
        {/* <h3 className={classes.subHeading}>Last Checked</h3>
        
        <div className={classes.cardWrapper} >
          
          {this.state.cards}
        </div> */}

        {/* Contact Section */}
        {/* <div className={classes.contactSec}>
          <ContactSection/>
        </div> */}


        {/* Login and Sign up pages */}

        {/* <div className={classes.wrapper}>
          {
            this.state.loginValue ? <Login onLoginClick={this.onLoginClick} onSignupClick={this.onSignupClick}/> : <Signup onLoginClick={this.onLoginClick} onSignupClick={this.onLoginClick} />
          }
        </div> */}
        
        {/* About us Page */}

        {/* <Aboutus/> */}
        
        {/* Terms And Conditions */}

        {/* <TermsAndConditions/> */}

        {/* Privacy Policy */}

        {/* <PrivacyPolicy /> */}

        {/* FAQs */}

        {/* <Faq/> */}

        {/* Product Description */}
        
        {/* <ProductDescription /> */}

        {/* Profile Page */}

        <Profile />

      </div>
    );
  }
  
}

export default App;
