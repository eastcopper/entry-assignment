import PostDetail from "./components/postDetail";
import PostList from "./components/postList";
import PostWrite from "./components/postWrite";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PostList />
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

export default App;
