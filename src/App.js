import React, { Component, Fragment } from "react";
import "./App.css";
//import Components from single index js file
import { NavBar, Users, Search, Alert, About, User } from "./Components/index";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    // This object is for indiual user
    user: {},
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
    // console.log(items);
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

  // This functionis for iniduial user details
  UserFunc = async (userName) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}&?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`
    );
    this.setState({ user: res.data });
    this.setState({ loading: false });
    console.log(res.data);
  };

  render() {
    const { users, loading, user } = this.state;
    return (
      <Router>
        <div>
          <NavBar title={"Github Users"} />
          <div className='container'>
            <Alert
              alert={this.state.alert}
              removeTrash={this.removeTrashFunc}
            />
            <Switch>
              {/* Route of Home Root page */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsersFunc}
                      clearUsers={this.clearUsersFunc}
                      ShowClearBtn={users.length > 0 ? true : false}
                      setAlert={this.setAlertFunc}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              {/* Route of about page */}
              <Route exact path='/about' component={About} />
              {/* This route for indiviual user */}
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.UserFunc}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
