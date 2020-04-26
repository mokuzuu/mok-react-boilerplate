import React from "react";
import BaseLayout from "components/abstracts/layout/BaseLayout";
import { Route, Switch, Redirect } from "react-router-dom";
import Chatroom from "pages/chatroom";
import store from "store/index";
import { Provider } from "react-redux";
import { routes } from "routes/config";
export const rootPages = [routes.chatroom];
const App = () => {
  return (
    <Provider store={store}>
      <BaseLayout>
        <Switch>
          <Route path={routes.chatroom}>
            <Chatroom />
          </Route>
          <Redirect from="*" to={routes.chatroom} />
        </Switch>
      </BaseLayout>
    </Provider>
  );
};

export default App;
