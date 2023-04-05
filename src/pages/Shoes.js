import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Shoes() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Grid container sx={{ background: "silver" }}>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: "flex" }}>
        <Grid
          item
          xs={2.5}
          sm={2.5}
          md={2.5}
          lg={2.5}
          sx={{ border: "3px solid blue", justifyContent: "left" }}
        >
          <Card sx={{ padding: "4%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#212121",
                  fontSize: "18px",
                  textTransform: "capitalize",
                  width: "67%",
                  fontWeight: "500",
                  marginLeft: "1%",
                }}
              >
                <b>Filters</b>
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "#2874f0",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  fontWeight: "500",
                  fontFamily: "Roboto,Arial,sans-serif",
                }}
              >
                <b>Clear All</b>
              </Typography>
            </Box>
            <Box sx={{ marginTop: "3%" }}>
              <div
                style={{
                  cursor: "pointer",
                  fontSize: "12px",
                  backgroundColor: "#e0e0e0",
                  boxShadow: "0 2px 4px 0 hsla(0,0%,100%,.5)",
                  borderRadius: "3px",
                  margin: " 2px 4px",
                  overflow: "hidden",
                  transition: "background-color .1s",
                  maxWidth: "150px",
                  padding: "8px",
                  display: "flex",
                }}
              >
                <CloseIcon /> <Typography>Plus (FAssured)</Typography>
              </div>
            </Box>
            <Box sx={{ display: "flex", marginTop: "3%" }}>
              <div
                style={{
                  cursor: "pointer",
                  fontSize: "12px",
                  backgroundColor: "#e0e0e0",
                  boxShadow: "0 2px 4px 0 hsla(0,0%,100%,.5)",
                  borderRadius: "3px",
                  margin: " 2px 4px",
                  overflow: "hidden",
                  transition: "background-color .1s",
                  maxWidth: "170px",
                  padding: "8px",
                  display: "flex",
                }}
              >
                <CloseIcon /> <Typography>Reebook Classic</Typography>
              </div>
              <div
                style={{
                  cursor: "pointer",
                  fontSize: "12px",
                  backgroundColor: "#e0e0e0",
                  boxShadow: "0 2px 4px 0 hsla(0,0%,100%,.5)",
                  borderRadius: "3px",
                  margin: " 2px 4px",
                  overflow: "hidden",
                  transition: "background-color .1s",
                  maxWidth: "150px",
                  padding: "8px",
                  display: "flex",
                }}
              >
                <CloseIcon /> <Typography>KILLER</Typography>
              </div>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#2874f0",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  marginLeft: "1%",
                  marginTop: "3%",
                }}
              >
                <b>Show More</b>
              </Typography>
            </Box>
            <hr />
            <Box sx={{ marginTop: "0.1%" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "550",
                    textTransform: "uppercase",
                    color: "#212121",
                    marginBottom: "5px",
                    marginLeft: "1%",
                    marginTop: "6%",
                  }}
                >
                  Cateogories
                </Typography>
                <Box>
                  <KeyboardArrowLeftIcon
                    sx={{
                      color: "#212121",
                      whiteSpace: "nowrap",
                    }}
                  />
                  <Typography
                    sx={{
                      width: "150px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: " nowrap",
                      display: "inline-block",
                      verticalAlign: "top",
                    }}
                  >
                    FootWear
                  </Typography>
                </Box>
                <Box>
                  <KeyboardArrowLeftIcon />
                  <Typography
                    sx={{
                      width: "150px",
                      overflow: " hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      verticalAlign: "top",
                      fontWeight: "600",
                    }}
                  >
                    Men's FootWear
                  </Typography>
                </Box>
                <hr />
                <Box
                  onClick={toggle}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    GENDER
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpen && (
                  <Box sx={{ marginLeft: "5%" ,marginTop:"3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography
                        sx={{
                          marginTop: "4.5%",
                          verticaAalign: "middle",
                          fontSize: "14px",
                          paddingLeft: "var(--checkbox-label-margin-left)",
                          color: "var(--color-grey-grade5)",
                          display: "inline-block",
                          width:
                            "calc(100% - var(--checkbox-side) - var(--checkbox-label-margin-left))",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "1",
                          cursor: "pointer",
                        }}
                      >
                        Men
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography
                        sx={{
                          marginTop: "3.5%",
                          verticaAalign: "middle",
                          fontSize: "14px",
                          paddingLeft: "var(--checkbox-label-margin-left)",
                          color: "var(--color-grey-grade5)",
                          display: "inline-block",
                          width:
                            "calc(100% - var(--checkbox-side) - var(--checkbox-label-margin-left))",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "1",
                          cursor: "pointer",
                        }}
                      >
                        Women
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={9.5}
          sm={9.5}
          md={9.5}
          lg={9.5}
          sx={{ border: "3px solid Red" }}
        >
          <Card></Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Shoes;
