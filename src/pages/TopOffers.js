import { Grid, Card, Typography } from "@mui/material";
import React from "react";
import NavData from "../components/NavData";
import NewOffers1 from "../images/newoffers1.jpg";
import NewOffers2 from "../images/newoffers2.jpg";
import NewOffers3 from "../images/newOffers3.jpg";
import NewOffers4 from "../images/newOffers4.jpg";
import NewOffers5 from "../images/newOffers5.jpg";
import NewOffers6 from "../images/newOffers6.jpg";
import NewOffers7 from "../images/newOffers7.jpg";
import NewOffers8 from "../images/newOffers8.jpg";
function TopOffers() {
  return (
    <div>
      <Grid container>
        <Grid items xs={12} sm={12} lg={12} md={12}>
          <NavData />
          <Grid sx={{ display: "flex", justifyContent: "space-between",marginLeft:"7%" }}>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers1} alt="" width="100%" height="80%" />
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Sunglass
                </Typography>
                <Typography sx={{ color: "#388e3c" }}>From 399</Typography>
                <Typography>Lowest Price Ever</Typography>
              </Card>
            </Grid>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers2} alt="" width="100%" height="80%" />
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>Plain cases and covers</Typography>
                <Typography sx={{ color: "#388e3c" }}>From 399</Typography>
                <Typography>Lowest Price Ever</Typography>
              </Card>
            </Grid>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers3} alt="" width="100%" height="80%" />
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>Wallets and more</Typography>
                <Typography sx={{ color: "#388e3c" }}>From 399</Typography>
                <Typography>Bset Discount Ever</Typography>
              </Card>
            </Grid>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers4} alt="" width="100%" height="80%" />
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>Remote Controlled Indore games</Typography>
                <Typography sx={{ color: "#388e3c" }}>
                  Upto 80% off 10% off
                </Typography>
                <Typography>Hots wheel barbie and more</Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid sx={{ display: "flex" ,marginLeft:"7%" }}>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers5} alt="" width="100%" height="80%" />
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>Home decor Range</Typography>
                <Typography sx={{ color: "#388e3c" }}>From 69</Typography>
                <Typography>Lowest Price Ever</Typography>
              </Card>
            </Grid>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers6} alt="" width="100%" height="80%" />
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>Best off Styling</Typography>
                <Typography sx={{ color: "#388e3c" }}>From 399</Typography>
                <Typography>By Nova</Typography>
              </Card>
            </Grid>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers7} alt="" width="100%" height="80%" />
                <Typography 
                sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>Best Deals on Stationary</Typography>
                <Typography sx={{ color: "#388e3c" }}>Upto 80% off</Typography>
                <Typography>Notebook sets pens and more</Typography>
              </Card>
            </Grid>
            <Grid items xs={3} sm={3} md={3} lg={3} sx={{ padding: "1%" }}>
              <Card
                sx={{
                  padding: "2%",
                  width: "60%",
                  height: "90%",
                  background: "white",
                  textAlign: "center",
                }}
              >
                <img src={NewOffers8} alt="" width="100%" height="80%" />
                <Typography 
                sx={{
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "15px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>Home Furnishing Range</Typography>
                <Typography sx={{ color: "#388e3c" }}>Upto 80% off</Typography>
                <Typography>Bedsheets,curtains & more</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopOffers;
