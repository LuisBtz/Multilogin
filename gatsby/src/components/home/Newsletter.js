import React from 'react'
import addToMailchimp from "gatsby-plugin-mailchimp"


class Newsletter extends React.Component {

    constructor() {
      super()
      this.state = {
        message: "To claim, simply fill in your email below and follow the instructions that appear.",
        name: "",
        email: "",
        result: null,
      }
    }
  
    handleSubmit = e => {
      e.preventDefault()
      addToMailchimp(this.state.email, {
        FNAME: this.state.name,
      }) // listFields are optional if you are only capturing the email address.
        .then(data => {
  
          this.setState({ message: data.msg })
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
        })
      this.setState({ email: "", name: "" })
    }
  
    handleEmailChange = event => {
      this.setState({ email: event.target.value })
    }
  
    handleNameChange = event => {
      this.setState({ name: event.target.value })
    }
  
    render() {
  
      return (
        <div className='newsletter'>
            <h1 className='meta'>Claim the offer</h1>
  
          <p>{this.state.message}</p>
  
  
          <div className='links'>
              <form className="subscribe" onSubmit={this.handleSubmit}>
                  <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                      name="EMAIL"
                      id="mce-EMAIL"
                      className="subscribe-email"
                      placeholder="Write your email here"
                      required
                  />
              <button className="btn_sent" type="submit">Claim</button>
              </form>
          </div>
  
        </div>
  
      )
    }
  }


  export default Newsletter