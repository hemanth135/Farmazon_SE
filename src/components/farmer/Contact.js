import React, { Component } from "react";
import "../App.module.css";
import ContactCSS from "./Contact.module.css";

class Contact extends Component {
  render() {
    return (
      <div className={ContactCSS.page}>
        <div className={ContactCSS.heretohelp}>
          <div className={ContactCSS.hereto}>Here to</div>
          <div className={ContactCSS.help}>help.</div>
        </div>
        <div className={ContactCSS.mainarea}>
          <div className={ContactCSS.talk}>Talk&nbsp;to&nbsp;us:</div>
          <div className={ContactCSS.share}>Share your feedback here</div>
          <textarea className={ContactCSS.feedback}></textarea>
          <button className={ContactCSS.send} type="submit">
            Send
          </button>
        </div>
      </div>
    );
  }
}
export default Contact;
