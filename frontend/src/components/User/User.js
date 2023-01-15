  import React, { Component } from 'react';
  import './User.css';
  import './bootstrap.min.css';

  class User extends Component {
    constructor() {
      super();
      this.state = {
        userName: '',
        city: '',
        email: '',
        phone: ''
      };
      // alternative binding method if you don't use arrow functions
      // this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = e => {
      const { target: { value, name } } = e;
      this.setState({
        [name]: value
      });
    }

    // here we use the preventDefault() method to cancel the default submit event
    handleOnSubmit = e => {
      e.preventDefault();
      const { userName, city, email, phone } = this.state;
      const data = {
        userName,
        city,
        email,
        phone
      };

      // just checking to see if we collected the data as required
      console.log('User Data:', data);
    }

    render() {
      return (
        <div className="User">
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <p>username:</p>
              <p><input name="userName" type="text" value={this.state.userName} onChange={this.handleOnChange} /></p>
            </div>

            <div>
              <p>city:</p>
              <p><input name="city" type="text" value={this.state.city} onChange={this.handleOnChange}/></p>
            </div>

            <div>
              <p>email:</p>
              <p><input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} /></p>
            </div>

            <div>
              <p>cell:</p>
              <p><input name="phone" type="tel" value={this.state.phone} onChange={this.handleOnChange} /></p>
            </div>

            <p><button>Create</button></p>
          </form>
        </div>
      );
    }
  }

  export default User;
