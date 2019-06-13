import React from 'react';
import './App.css';
import {withFormik, Form, Field} from "formik";
import Yup from 'yup';

function App({
	//Destructure the props.
	//These props are provided by Formik. See the docs for other options:
	//https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
	values
				 }) {
  return (
    <div className="App">
      <header className="App-header">
        <Form>
           <Field
              type ="email"
              name="email"
              placeholder="Email"
           />
			  <Field
				  type ="password"
				  name="password"
				  placeholder="Password"
			  />
			  <label>
				  <Field
				  type="checkbox"
				  name="newsletter"
				  checked={values.newsletter}
				  />
				  Click the box to subscribe to our newsletter!
			  </label>
			  <Field component="select" name="plan">
					<option value="free">Free</option>
					<option value="premium">Premium</option>
			  </Field>
			  <button>Submit</button>
        </Form>
      </header>
    </div>
  );
}

//Connect the functional component App to Formik.
export const FormikApp = withFormik({
	//Set-up the initial values for the fields.
	mapPropsToValues({email, password, newsletter, plan}) {
		return {
			email: email || '',
			password: password || '',
			newsletter: newsletter || false,
			plan: plan || 'premium'
		}
	},
	//This function executes after the user clicks the 'Submit' button.
	handleSubmit(values) {
		console.log(values)
	}
})(App);

