import React from 'react';
import './App.css';
import {withFormik, Form, Field} from "formik";
import * as Yup from 'yup';

function App({
					 //Destructure the props.
					 //These props are provided by Formik. See the docs for other options:
					 //https://jaredpalmer.com/formik/docs/api/formik#initialvalues-values
					 values,
					 errors,
					 touched,
					 isSubmitting
				 }) {
	return (
		<div className="App">
			<header className="App-header">
				<Form>
					<div>
						{ touched.email && errors.email && <p>{errors.email}</p> }
						<Field
							type="email"
							name="email"
							placeholder="Email"
						/>
					</div>
					<div>
						{ touched.password && errors.password && <p>{errors.password}</p> }
						<Field
							type="password"
							name="password"
							placeholder="Password"
						/>
					</div>
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
					<button disabled={isSubmitting}>Submit</button>
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
	//This Formik component uses Yup for validation.
	validationSchema: Yup.object().shape({
		email: Yup
			.string()
			.email('The email address you entered is not valid.')
			.required('Your email address is required.'),
		password: Yup
			.string()
			.min(8, 'The password must be eight characters long.')
			.required('A password is required.')
	}),
	//This function executes after the user clicks the 'Submit' button.
	//Note: resetForm, setErrors, and setSubmitting are part of the "Formikbag".
	//See more here: https://jaredpalmer.com/formik/docs/api/formik#onsubmit-values-values-formikbag-formikbag-void
	handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
		//Asynchronous request
		setTimeout(() => {
			if(values.email === 'hunter@test.io') {
				setErrors({email: 'That email is already taken.'})
			} else {
				resetForm();
			}
			//Prevent the user from clicking the submit button again
			//until the timeout has finished.
			setSubmitting(false)
		}, 2000);
	}
})(App);

