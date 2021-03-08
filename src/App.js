import React, { Component } from "react";
import "./App.css";
//import Components from single index js file
import { NavBar, Users, Search } from "./Components/index";
import axios from "axios";

export class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const { data } = await axios.get(
      `https://api.github.com/users?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
    );
    this.setState({ users: data });
    this.setState({ loading: false });
  }

  // we are getting data via props up
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

  render() {
    return (
      <div>
        <NavBar title={"Github Users"} />
        <div className='container'>
          <Search
            searchUsers={this.searchUsersFunc}
            clearUsers={this.clearUsersFunc}
            ShowClearBtn={this.state.users.length > 0 ? true : false}
          />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
