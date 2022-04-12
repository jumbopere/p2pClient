import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import * as yup from 'yup'

const validationSchema = yup.object({
     activationCode: yup.string('Enter your Activation code').required("Activation code is required"),
 });

const ActivateUser = () => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            activationCode:""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          const {activationCode} = values
        },
      });
  return (
    <>
    <Helmet>
      <title>Activate </title>
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
                 Activate
                </Typography>
              </Box>
              
              <Box
                sx={{
                  pb: 1,
                  pt: 3
                }}
              >
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  Enter your Activation Code
                </Typography>
              </Box>
              <TextField
              required
                error={Boolean(touched.activationCode && errors.activationCode)}
                fullWidth
                helperText={touched.activationCode && errors.activationCode}
                label="Activation Code"
                margin="normal"
                name="activationCode"
                id='activate'
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.activationCode}
                variant="outlined"
              />
            
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                 Activate
                </Button>
              </Box>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                Don&apos;t have an account?
                {' '}
                <Link
                  component={RouterLink}
                  to="/register"
                  variant="h6"
                >
                 Register
                </Link>
              </Typography>
            </form>    
      </Container>
    </Box>
  </>
  )
}

export default ActivateUser