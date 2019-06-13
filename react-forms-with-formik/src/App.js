import React from 'react';
import './App.css';
import {withFormik, Form} from "formik";
import Yup from 'yup';

function App({
	//Destructure the props.
	//These props are provided by Formik. See the docs for other options:
	//https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
	values,
	handleChange,
	handleSubmit
				 }) {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
           <input
              type ="email"
              name="email"
              placeholder="Email"
				  value={values.email}
				  onChange={handleChange}
           />
			  <input
				  type ="password"
				  name="password"
				  placeholder="Password"
				  value={values.password}
				  onChange={handleChange}
			  />
			  <button>Submit</button>
        </Form>
      </header>
    </div>
  );
}

//Connect the functional component App to Formik.
export const FormikApp = withFormik({
	//Set-up the initial values for the fields.
	mapPropsToValues({email, password}) {
		return {
			email: email || '',
			password: password || ''
		}
	},
	//This function executes after the user clicks the 'Submit' button.
	handleSubmit(values) {
		console.log(values)
	}
})(App);

