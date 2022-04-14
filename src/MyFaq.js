import React, { Component } from "react";
import classes from "./MyFaq.module.css";

class MyFaq extends Component {

    state = {
        faq: [],
        myQuestion: "",
        myAnswer: ""
    }

    defaultFaqPreview = <div className={classes.defaultFaqPreviewWrapper}>
        <h1>Let people know more details about your store!</h1>
        <div style={{textAlign: "left"}}>
            <h3>Answer Questions like:</h3>
            <p><span style={{fontWeight: "bold"}}>Question:</span> Do you offer delivery services?</p>
            <p><span style={{fontWeight: "bold"}}>Answer:</span> Yes, we do... Get your order delivered to your door step without any charges!</p>
        </div>
        <button className={classes.addQuestionBtn} onClick={this.onQuestionClick}>Get Started</button>
        
    </div>

    editForm1 = <div className={classes.faqForm} >
        <form >
            <label>Enter Question:</label><br/>
            <input type="text" name="myQuestion" onChange={evt => this.setState({myQuestion: evt.target.value})} /><br/><br/>
            <label>Enter Answer:</label><br/>
            <input type="textArea" name="myAnswer" onChange={evt => this.setState({myAnswer: evt.target.value})} /><br/><br/>
            <button type="button" onClick={() => this.onSubmitClick(this.state.myQuestion, this.state.myAnswer)}>Submit</button>
        </form>
    </div>

    editForm2 = <div className={classes.faqForm} >
        <form >
            <label>Enter Question:</label><br/>
            <input type="text" name="myQuestion" onChange={evt => this.setState({myQuestion: evt.target.value})} /><br/><br/>
            <label>Enter Answer:</label><br/>
            <input type="textArea" name="myAnswer" onChange={evt => this.setState({myAnswer: evt.target.value})} /><br/><br/>
            <button type="button" onClick={() => this.onSaveClick(this.state.myQuestion, this.state.myAnswer)}>Save Changes</button>
        </form>
    </div>


    onSubmitClick = (que, ans) => {
        const newObj = {
            question: que,
            answer: ans
        }
        this.setState((prevState, prevProps) => {
            return ({faq: [...prevState.faq, newObj]});
        })
        // console.log(this.state.faq)
    }

    onEditClick = (pos) => {
        let faqItems = [...this.state.faq];
        let faqItem = faqItems[pos];
        this.onSaveClick = (que, ans) => {
            faqItem.question = que;
            faqItem.answer = ans;
            faqItems[pos] =faqItem;
            
            this.setState({faq: faqItems})
            // console.log(this.state.faq)
        }
        this.onDeleteClick = (que, ans) => {
            
        }
    }

    render() {
        const faqPreview = this.state.faq.map((item, pos) => {
            return (
                <div className={classes.questionItem} key={pos}>
                    <h3 className={classes.qHeader}>{item.question}</h3>
                    <ul>
                        <li className={classes.qBody}>{item.answer}</li>
                    </ul>
                    <p className={classes.editBtn} onClick={() => {this.onEditClick(pos)}}>Edit</p>
                </div>
            );
        })
        console.log(this.state.faq)
        return (
            
            <div className={classes.wrapper}>
                {this.editForm1}
                {this.editForm2}
                {this.state.faq.length < 1 ? this.defaultFaqPreview : faqPreview}
            </div>
        );
    }
    
}

export default MyFaq;