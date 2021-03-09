import React, { Component } from "react";
import "./App.css";
//import Components from single index js file
import { NavBar, Users, Search, Alert } from "./Components/index";
import axios from "axios";

export class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const { data } = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
  //   );
  //   this.setState({ users: data });
  //   this.setState({ loading: false });
  // }

  // we are getting data via props up in text we get the user name
  searchUsersFunc = async (text) => {
    this.setState({ loading: true });
    const {
      data: { items },
    } = await axios.get(
      `https://api.github.com/search/users?q=${text}&?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
    );
    this.setState({ users: items });
    this.setState({ loading: false });
    console.log(items);
  };

  //This function is called from search user for clear users
  clearUsersFunc = () => {
    this.setState({ users: [], loading: false });
  };

  //we are making function hild to aprent from search comp and passing data in alert object and
  // alert comp getting data as a props
  setAlertFunc = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 8000);
  };
  //The is Dusbin function we did child to parent from alert comp
  removeTrashFunc = () => {
    this.setState({ alert: null });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <NavBar title={"Github Users"} />

        <div className='container'>
          <Alert alert={this.state.alert} removeTrash={this.removeTrashFunc} />

          <Search
            searchUsers={this.searchUsersFunc}
            clearUsers={this.clearUsersFunc}
            ShowClearBtn={users.length > 0 ? true : false}
            setAlert={this.setAlertFunc}
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
