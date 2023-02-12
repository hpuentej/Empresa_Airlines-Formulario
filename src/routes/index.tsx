// import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Form, Confirmation, Home, Count } from "../views";
import { NotFoundPage } from "../views";

const Routes = () => {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/form" element={<Form />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/count" element={<Count />} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Routes;
