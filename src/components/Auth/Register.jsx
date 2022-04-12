import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {  Button, Container, Typography, Box, TextField, Link, FormControl,Checkbox, InputAdornment, IconButton, MenuItem, Select, FormHelperText,   InputLabel } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import { Helmet } from 'react-helmet';
import * as yup from "yup"

import stateData from '../../stateData';
import { register } from '../../actions/user';


 const validationSchema = yup.object({
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
   // activationCode: yup.string('Enter your Activation code').required("Activation code is required"),
   policy: yup.boolean().oneOf([true], 'This field must be checked')
});

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      email: '',
      password: '',
      phoneNumber:'',
      state:'',
      city: '',
      address:'',
      confirmPassword:'',
      gender:"",
      policy: false

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const {firstName, lastName, email, password, state, city, address, gender,phoneNumber} = values
dispatch(register({firstName,lastName, email, password, state, city, address, gender, phoneNumber}, navigate))
console.log('values', values)
    },
  });

  return (
    <>
      <Helmet>
        <title>Register </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">

    
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                required
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="First name"
                  margin="normal"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                  autoComplete='firstname'
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                  required
                  autoComplete='lastname'
                 
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                  required
                  autoComplete='email'
                />
                    <TextField
              variant="outlined"
              type="tel"
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phoneNumber && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              margin="normal"
            />
              <TextField
              variant="outlined"
              type="text"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && Boolean(errors.address
                )}
              helperText={touched.address && errors.address}
              margin="normal"
             
            />

          <FormControl fullWidth required  variant='outlined'  error={touched.state && Boolean(errors.state)} margin='normal'>
          <InputLabel id="state">State</InputLabel>
               <Select
          id="state"
          labelId='state'
          label="State"
          name="state"
          onBlur={handleBlur}
          value={values.state}
          onChange={handleChange}
        
        >
            {stateData.map((state) => (
            <MenuItem 
              value={state.state}
              key={state.alias}
            >
              {state.state}
            </MenuItem>
          ))}
          </Select>
</FormControl>
         <FormControl fullWidth required  variant='outlined'  error={touched.city && Boolean(errors.city)} margin="normal">
          <InputLabel id="city">City</InputLabel>
               <Select
          id="city"
          labelId='city'
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={!values.state}
     
        >
       {values.state
            ? stateData
                .find(({ state }) => state === values.state)
                .lgas.map((lga) => (
                  <MenuItem value={lga} key={lga}>
                    {lga}
                  </MenuItem>
                ))
            : []}
           
            

          </Select>
</FormControl>
<FormControl fullWidth required  variant='outlined'error={touched.gender && Boolean(errors.gender)} margin="normal">
           <InputLabel id="gender">Gender</InputLabel>
           <Select
         
          value={values.gender}
          label="Gender"
          labelId='gender'
          onChange={handleChange}
          onBlur={handleBlur}
          name='gender'
          id='gender'
          
        >
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
        </FormControl>

                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  required
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type={
                    showPassword ? "text" : "password"
                }
                  autoComplete='current-password'
                  value={values.password}
                  variant="outlined"
                  InputProps={{ 
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          onClick={handleShowPassword}
                                        >
                                          {showPassword ? <Visibility /> : <VisibilityOff />}
                                          </IconButton>
                              </InputAdornment>
                                    )
                                }}
                />
              <TextField
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
             margin="normal"
            />
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    
                  >
                    Register
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/"
                    variant="h6"
                  >
                    Login
                  </Link>
                </Typography>
              </form>
    
        </Container>
      </Box>
    </>
  );
};

export default Register;
