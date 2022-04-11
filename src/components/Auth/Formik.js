 import * as yup from "yup"
 
 export const validationSchema = yup.object({
     firstName: yup.string('Enter your first name').max(10, "First name shouldn't be more than 10 characters").required("First name is required"),
     lastName: yup.string('Enter your last name').max(10, "Last name shouldn't be more than 10 characters").required("Last name is required"),
     address: yup.string('Enter your address').required("Address is required"),
     city: yup.string('Enter your city').required("City is required"),
     state: yup.string('Enter your State').required("State is required"),
     gender: yup.string('Choose your Gender').required("Gender is required"),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
      confirmPassword: yup.string().oneOf(
        [yup.ref("password"), null],
        "Passwords must match"
      ),
      activationCode: yup.string('Enter your Activation code').required("Activation code is required"),
      policy: yup.boolean().oneOf([true], 'This field must be checked')
  });