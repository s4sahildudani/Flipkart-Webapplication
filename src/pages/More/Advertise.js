import React from "react";
import { Grid, Card, Box, Typography, Button, TextField } from "@mui/material";
import LoginAdvetise from "../../images/LoginAdvetise.svg";
import FlipkartAds from "../../images/FlipkartAds.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
function Advertise() {
  const defaultValue = {
    Email: "",

    password: "",
  };

  const validationSchema = yup.object().shape({
    Email: yup.string().required("Please Enter Your Email"),

    password: yup.string().required("Please Enter Your Password"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6} sm={6} md={6} lg={6} textAlign="center">
          <Box sx={{ marginTop: "25%" }}>
            <img src={LoginAdvetise} alt="" height="70%" width="60%" />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Box sx={{ marginTop: "15%" }}>
                <img src={FlipkartAds} alt="" height="13%" width="13%" />
                <Typography sx={{ fontSize: "30px", marginTop: "3%" }}>
                  Login to your account
                </Typography>
                <Typography sx={{ fontSize: "20px", marginTop: "2%" }}>
                  Please enter in your credentials to login
                </Typography>
                <Typography sx={{ marginTop: "2%" }}>Email Adress</Typography>
                <Field
                  id="outlined-password-input"
                  label="Enter Email"
                  type="text"
                  name="Email"
                  autoComplete="current-password"
                  sx={{ width: "50%", marginTop: "1%" }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="Email" />
                </p>
                <Typography sx={{ marginTop: "2%" }}>Password</Typography>
                <Field
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  sx={{ width: "50%", marginTop: "1%" }}
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="password" />
                </p>
                <Typography
                  sx={{
                    marginTop: "2%",
                    marginLeft: "35%",
                    color: "rgb(40, 116, 240)",
                  }}
                >
                  Forgot Password?
                </Typography>
                <Button
                  sx={{
                    width: "50%",
                    backgroundColor: "rgb(40, 116, 240)",
                    color: "rgb(255, 255, 255)",
                    marginTop: "3%",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Box>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}

export default Advertise;
