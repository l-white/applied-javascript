import React from "react";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.name} as your name and ${this.state.email} as your email`);
    this.setState({ name: "" });
    this.setState({email: ""});
  }
  render() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;