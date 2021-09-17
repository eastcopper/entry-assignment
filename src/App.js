import PostDetail from "./components/postDetail/Detail";
import PostList from "./components/postList/List";
import PostWrite from "./components/postWrite/Write";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://3.36.82.24:8080`
})

export default class App extends Component {

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PostList/>
            </Route>
            <Route path="/detail">
              <PostDetail />
            </Route>
            <Route path="/write">
              <PostWrite />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
