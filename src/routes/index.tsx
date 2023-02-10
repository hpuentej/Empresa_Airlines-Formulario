// import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Form, Confirmation } from "../views";
import { NotFoundPage } from "../views";

const Routes = () => {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route path="/" element={<Form />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<NotFoundPage />} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Routes;
