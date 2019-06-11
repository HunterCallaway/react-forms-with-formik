import React from 'react';
import './App.css';
import {withFormik} from "formik";
import Yup from 'yup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
           <input
              type ="email"
              name="email"
              placeholder="Email"
           />
        </div>
      </header>
    </div>
  );
}

export const FormikApp = withFormik({

})(App);

