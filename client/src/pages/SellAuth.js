import React from "react";
import { Grid, Box, Typography, Tab,  Button } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LoadTruck from "../images/Onboarding_logo_Truck.svg";
import TwentyFour from "../images/24x7 sell.svg";
import AccountManage from "../images/account_management.svg";
import SimplePrice from "../images/SimplePrice.svg";
import Buisness from "../images/BuisnessOn.svg";
import LowReturns from "../images/lowReturns.svg";
import Higher from "../images/higher.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
function SellAuth() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const defaultValue = {
    mobileNumber: "",
    Email: "",
    gstNo: "",
    books: "",
    categories: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object().shape({
    mobileNumber: yup.string().required("Please Enter Your Mobile Number"),
    Email: yup.string().required("Please Enter Your Email"),
    categories: yup.string().required("Please Enter Your Categories"),
    gstNo: yup.string().required("Please Enter Your gstNo"),
    books: yup.string().required("Please Enter Your Books"),
    password: yup.string().required("Please Enter Your Password"),
    confirmPassword: yup
      .string()
      .required("Please Enter Your Confirm Password"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ textAlign: "center" }}>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      textAlign: "center",
                    }}
                  >
                    <TabList
                      sx={{ marginLeft: "30%" }}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Email Id $ Gst" value="1" />
                      <Tab label="Password Creation" value="2" />
                      <Tab label="Onboarding Dashboard" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <Box>
                      <Field
                        name="mobileNumber"
                        placeholder="Enter Your Mobile Number"
                        style={{ width: "35%" }}
                      />
                      <br />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="mobileNumber" />
                      </p>

                      <br />
                      <Field
                        name="Email"
                        placeholder="Enter Your Email ID"
                        style={{ width: "35%", marginTop: "1%" }}
                      />
                      <br />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="Email" />
                      </p>
                      <Typography sx={{ marginRight: "19%", marginTop: "2%" }}>
                        What are you looking to sell on Flipkart?
                      </Typography>
                      <Field
                        name="categories"
                        sx={{ marginRight: "0%", marginTop: "2%" }}
                        placeholder="All Categories"
                      />
                      <br />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="categories" />
                      </p>

                      <Field
                        name="books"
                        sx={{
                          marginRight: "9%",
                          marginTop: "2%",
                          marginLeft: "2%",
                        }}
                        placeholder="Only Books"
                      />
                      <br />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="books" />
                      </p>
                      <br />
                      <Field
                        name="gstNo"
                        sx={{ marginTop: "2%", width: "35%" }}
                        placeholder="Enter Your Gst Number"
                      />
                      <br />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="gstNo" />
                      </p>
                      <Typography sx={{ marginTop: "2%" }}>
                        GSTIN is required to sell products on Flipkart. You can
                        also share it in the final step.
                      </Typography>

                      <Typography sx={{ marginTop: "2%" }}>
                        By continuing, I agree to Flipkart’s Terms of Use &
                        Privacy Policy
                      </Typography>

                      <Button
                        type="submit"
                        sx={{
                          background: "blue",
                          color: "white",
                          marginTop: "2%",
                        }}
                      >
                        Register $ Continue
                      </Button>
                      <Box
                        sx={{
                          background: " rgb(235, 243, 251)",
                          width: "98%",
                          padding: "1%",
                        }}
                      >
                        <Typography sx={{ fontSize: "50px" }}>
                          Why sell on Flipkart?
                        </Typography>
                        <Box sx={{ display: "flex", marginTop: "4%" }}>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={LoadTruck} alt="" />
                            <Typography>
                              <b>Sell Across India</b>
                            </Typography>
                            <Typography>
                              Reach over 50 crore+ customers across 27000+
                              pincodes
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={TwentyFour} alt="" />
                            <Typography>
                              <b>Higher Profits</b>
                            </Typography>
                            <Typography>
                              With 0% commission* , you take 100% profits with
                              you
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={AccountManage} alt="" />
                            <Typography>
                              <b>Account Management</b>
                            </Typography>
                            <Typography>
                              Our Dedicated managers will help your business on
                              Flipkart
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={SimplePrice} alt="" />
                            <Typography>
                              <b>Lower Return Charges</b>
                            </Typography>
                            <Typography>
                              With our flat and low return charges, ship your
                              products stress-free
                            </Typography>
                          </Grid>
                        </Box>
                        <Box sx={{ display: "flex", marginTop: "4%" }}>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={Buisness} alt="" />
                            <Typography>
                              <b>Simple Pricing Calculator</b>
                            </Typography>
                            <Typography>
                              Use our simple pricing calculator to decide the
                              best and competitive selling price for your
                              product
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={LowReturns} alt="" />
                            <Typography>
                              <b>24x7 Seller Support</b>
                            </Typography>
                            <Typography>
                              All your queries and issues are answered by our
                              dedicated Seller Support Team
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={LowReturns} alt="" />
                            <Typography>
                              <b>Fast & Regular Payments</b>
                            </Typography>
                            <Typography>
                              Get payments as fast as 7-10 days from the date of
                              dispatch
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} md={3} lg={3}>
                            <img src={Higher} alt="" />
                            <Typography>
                              <b>Business on the go</b>
                            </Typography>
                            <Typography>
                              Download our Flipkart Seller App to manage your
                              business anywhere, anytime
                            </Typography>
                          </Grid>
                        </Box>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value="2">
                    <Box>
                      <Typography sx={{ fontSize: "45px" }}>
                        Create Password
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          marginRight: "24%",
                          marginTop: "2%",
                        }}
                      >
                        Enter Your Password
                      </Typography>
                      <Field
                        sx={{
                          marginRight: "0%",
                          marginTop: "2%",
                          width: "35%",
                        }}
                        label="Password"
                        name="password"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="password" />
                      </p>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          marginRight: "23%",
                          marginTop: "2%",
                        }}
                      >
                        Confirm Your Password
                      </Typography>
                      <Field
                        sx={{
                          marginRight: "0%",
                          marginTop: "2%",
                          width: "35%",
                        }}
                        label="Confirm Password"
                        name="confirmPassword"
                      />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="confirmPassword" />
                      </p>
                      <br />
                      <Button
                        sx={{
                          background: "blue",
                          color: "white",
                          width: "15%",
                          marginTop: "3%",
                        }}
                      >
                        Submit
                      </Button> 
                    </Box>
                  </TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </>
  );
}
export default SellAuth;