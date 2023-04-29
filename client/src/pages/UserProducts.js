import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Slider,
  Button,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { db, auth } from "../firebase.conflig";
import IndividualProduct from "../components/IndividualProduct";
import { useNavigate } from "react-router-dom";
import faLogo from "../images/fa_62673a.png";
import CloseIcon from "@mui/icons-material/Close";
// import IndividualFilterProduct from "../components/IndividualFilterProduct";
const initialFilters = [
  { id: 1, name: "Plus (FAssured)" },
  { id: 2, name: "River" },
  { id: 3, name: "Unknown" },
];
function UserProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  // const [isOpenTypes, setIsOpenTypes] = useState(false);
  // const [isOpenTheme, setIsOpenTheme] = useState(false);
  // const [isOpenDiscount, setIsOpenDiscount] = useState(false);
  // const [isOpenColor, setIsOpenColor] = useState(false);
  // const [isOpenOccasion, setIsOpenOccasion] = useState(false);
  // const [isOpenSize, setIsOpenSize] = useState(false);
  // const [isOpenRatings, setIsOpenRatings] = useState(false);
  // const [isOpenOffers, setIsOpenOffers] = useState(false);
  // const [isOpenAvailable, setIsOpenAvailable] = useState(false);
  const [filters, setFilters] = useState(initialFilters);

  const handleMaxValueChange = (event) => {
    setMaxValue(event.target.value);
    filterFunction();
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleBrand = () => {
    setIsOpenBrand(!isOpenBrand);
  };
  // const toggleTheme = () => {
  //   setIsOpenTheme(!isOpenTheme);
  // };
  // const toggleTypes = () => {
  //   setIsOpenTypes(!isOpenTypes);
  // };
  // const toggleDiscount = () => {
  //   setIsOpenDiscount(!isOpenDiscount);
  // };
  // const toggleColor = () => {
  //   setIsOpenColor(!isOpenColor);
  // };
  // const toggleOccasion = () => {
  //   setIsOpenOccasion(!isOpenOccasion);
  // };
  // const toggleSize = () => {
  //   setIsOpenSize(!isOpenSize);
  // };
  // const toggleRatings = () => {
  //   setIsOpenRatings(!isOpenRatings);
  // };
  // const toggleOffers = () => {
  //   setIsOpenOffers(!isOpenOffers);
  // };
  // const toggleAvailable = () => {
  //   setIsOpenAvailable(!isOpenAvailable);
  // };
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getProducts = async () => {
    const products = await db.collection("Products").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.Id = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  function Getuseruid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }
  const uid = Getuseruid();
  let Product;
  const addtoCart = (product) => {
    if (uid !== null) {
      Product = product;
      Product["qty"] = 1;
      Product["TotalProductPrice"] = product.qty * product.productPrice;
      db.collection("cart " + uid)
        .doc(product.Id)
        .set(Product)
        .then(() => {
          console.log("Successfully added to cart");
        });
    } else {
      navigate("/");
    }
  };
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(3500);
  const sliderRef = useRef(null);
  const handleMinValueChange = (event) => {
    setMinValue(event.target.value);
    sliderRef.current.value = event.target.value;
    filterFunction();
  };
  const handleClearAll = () => {
    const newFilters = filters.slice();
    newFilters.splice(0, 3);
    setFilters(newFilters);
  };

  const [spans] = useState([
    { id: "ElectronicsDevice", text: "Electronic Device" },
    { id: "Mobile", text: "Mobile" },
    { id: "Shoes", text: "Shoes" },
    { id: "Groceries", text: "Groceries" },
  ]);
  // active class
  const [active, setActive] = useState("");

  // productCategory

  const [productCategory, setProuctCategory] = useState("");
  console.log("ProductCategory", productCategory);
  // Filtered Products

  const [filteredProducts, setfilteredProducts] = useState([]);
  console.log("filterproducts", filteredProducts);
  const handleChangefilter = (IndividualSpan) => {
    setActive(IndividualSpan.Id);
    setProuctCategory(IndividualSpan.text);
    filterFunction(IndividualSpan.text);
    console.log("individualspan", IndividualSpan);
  };

  const filterFunction = () => {
    const filteredProducts = Products.filter((product) => {
      return (
        product.productPrice >= minValue && product.productPrice <= maxValue
      );
    });
    setfilteredProducts(filteredProducts);
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} lg={12} md={12} sx={{ display: "flex" }}>
        <Grid item xs={2} sm={2} md={2} lg={2} sx={{ justifyContent: "left" }}>
          <Card sx={{ padding: "4%" }}>
            <Box sx={{ marginBottom: "3%" }}>
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
                  onClick={handleClearAll}
                >
                  <b>Clear All</b>
                </Typography>
              </Box>

              <Box sx={{ marginTop: "3%" }}>
                {filters.map((filter) => (
                  <div
                    key={filter.id}
                    className="filter"
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
                    <CloseIcon />
                    <Typography>{filter.name}</Typography>
                  </div>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography className="moreScroll">
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
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "3%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    GENDER
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpen && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox /> <Typography className="Data">Men</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Women</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              <hr style={{ marginTop: "5%" }} />
              <Box sx={{ marginTop: "4%" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                  Price
                </Typography>
                <Box>
                  <Slider
                    ref={sliderRef}
                    value={[minValue, maxValue]}
                    min={500}
                    max={3500}
                    onChange={(event, newValue) => {
                      setMinValue(newValue[0]);
                      setMaxValue(newValue[1]);
                    }}
                    valueLabelDisplay="auto"
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <FormControl
                    sx={{ height: "3%", minWidth: 120 }}
                    size="small"
                  >
                    <InputLabel id="demo-controlled-open-select-label">
                      Min
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      value={minValue}
                      label="Min"
                      onChange={handleMinValueChange}
                    >
                      <MenuItem value={500}>₹500</MenuItem>
                      <MenuItem value={1000}>₹1000</MenuItem>
                      <MenuItem value={1500}>₹1500</MenuItem>
                      <MenuItem value={2000}>₹2000</MenuItem>
                      <MenuItem value={2500}>₹2500</MenuItem>
                      <MenuItem value={3000}>₹3000</MenuItem>
                      <MenuItem value={3500}>₹3500</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography sx={{ marginTop: "2%", fontWeight: "300" }}>
                    To
                  </Typography>
                  <FormControl
                    sx={{ height: "3%", minWidth: 120 }}
                    size="small"
                  >
                    <InputLabel id="demo-controlled-open-select-label">
                      Max
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      value={maxValue}
                      label="Max"
                      onChange={handleMaxValueChange}
                    >
                      <MenuItem value={500}>₹500</MenuItem>
                      <MenuItem value={1000}>₹1000</MenuItem>
                      <MenuItem value={1500}>₹1500</MenuItem>
                      <MenuItem value={2000}>₹2000</MenuItem>
                      <MenuItem value={2500}>₹2500</MenuItem>
                      <MenuItem value={3000}>₹3000</MenuItem>
                      <MenuItem value={3500}>₹3500</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              <hr style={{ marginTop: "7%" }} />
              <Box>
                <Box sx={{ display: "flex", marginTop: "4%" }}>
                  <Checkbox />
                  <Box sx={{ marginTop: "3%" }}>
                    <img src={faLogo} alt="" width="30%" />
                  </Box>
                </Box>
                <hr style={{ marginTop: "7%" }} />
                <Box
                  onClick={toggleBrand}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    BRAND
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenBrand && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">PUMA</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">wOODLAND</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">NIKE</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Sketchers</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">RED Cheief</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Levi's</Typography>
                    </Box>
                    <br />
                    <Typography className="moreScroll">
                      <b>3028 more</b>
                    </Typography>
                  </Box>
                )}
              </Box>
              <hr style={{ marginTop: "5%" }} />
              {/* Types */}
              <Box>
                <Box
                  // onClick={toggleTypes}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    {spans.map((IndividualSpan, index) => (
                      <span
                        style={{ display: "block", marginTop: "3%" }}
                        onClick={() => handleChangefilter(IndividualSpan)}
                        id={IndividualSpan.id}
                        key={index}
                        className={
                          IndividualSpan.Id === active ? active : "color:red"
                        }
                      >
                        {IndividualSpan.text}
                      </span>
                    ))}
                    Shoes
                  </Typography>
                  {/* <KeyboardArrowDownIcon /> */}
                </Box>
                {/* {isOpenTypes && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">PUMA</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">wOODLAND</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">NIKE</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Sketchers</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">RED Cheief</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Levi's</Typography>
                    </Box>
                    <br />
                    <Typography className="moreScroll">
                      <b>3028 more</b>
                    </Typography>
                  </Box>
                )} */}
              </Box>
              <hr style={{ marginTop: "5%" }} />
              {/* Themes */}
              {/* <Box>
                <Box
                  onClick={toggleTheme}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Theme
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenTheme && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Absract Prints</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">
                        Adjustable Sneakers
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Ankle Boots</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Boat Shoes</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Buckle Fastening</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Canvas</Typography>
                    </Box>
                    <br />
                    <Typography className="moreScroll">
                      <b>56 more</b>
                    </Typography>
                  </Box>
                )}
              </Box> */}

              <hr style={{ marginTop: "5%" }} />
              {/* Discount */}
              {/* <Box>
                <Box
                  onClick={toggleDiscount}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Discount
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenDiscount && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="moreScroll">
                        30% on More
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
                        40% on More
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
                        50% on More
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
                        60% on More
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box> */}
              <hr style={{ marginTop: "5%" }} />
              {/* color */}
              {/* <Box>
                <Box
                  onClick={toggleColor}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Colors
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenColor && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Beige</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Black</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Blue</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Bronze</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Brown</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">White</Typography>
                    </Box>
                    <br />
                    <Typography className="moreScroll">
                      <b>23 more</b>
                    </Typography>
                  </Box>
                )}
              </Box> */}
              <hr style={{ marginTop: "5%" }} />
              {/* Occasion */}
              {/* <Box>
                <Box
                  onClick={toggleOccasion}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Occasion
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenOccasion && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Casual</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Ethinic</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Formal</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Party</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Riding</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Sports</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Wedding</Typography>
                    </Box>
                  </Box>
                )}
              </Box> */}

              <hr style={{ marginTop: "5%" }} />
              {/* Size */}
              {/* <Box>
                <Box
                  onClick={toggleSize}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Size - uk/India
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenSize && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox /> <Typography className="Data">8</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox /> <Typography className="Data">7</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox /> <Typography className="Data">9</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox /> <Typography className="Data">10</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox /> <Typography className="Data">16</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox /> <Typography className="Data">2.5</Typography>
                    </Box>
                    <br />
                    <Typography className="moreScroll">
                      <b>20</b>
                    </Typography>
                  </Box>
                )}
              </Box> */}

              <hr style={{ marginTop: "5%" }} />
              {/* Ratings */}
              {/* <Box>
                <Box
                  onClick={toggleRatings}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Ratings
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenRatings && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">4* & above</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">3* & above</Typography>
                    </Box>
                  </Box>
                )}
              </Box> */}
              <hr style={{ marginTop: "5%" }} />
              {/* Offers */}
              {/* <Box>
                <Box
                  onClick={toggleOffers}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Offers
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenOffers && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">
                        Buy More ,Save More
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">No Cost EMI</Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">Special Price</Typography>
                    </Box>
                  </Box>
                )}
              </Box> */}
              <hr style={{ marginTop: "5%" }} />
              {/* Available */}
              {/* <Box>
                <Box
                  onClick={toggleAvailable}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6%",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>
                    Availability
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
                {isOpenAvailable && (
                  <Box sx={{ marginLeft: "5%", marginTop: "3%" }}>
                    <Box sx={{ display: "flex" }}>
                      <Checkbox />{" "}
                      <Typography className="Data">
                        Include Out of stock
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box> */}
            </Box>
          </Card>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ padding: "4%" }}
          breakpoints={{ xs: "auto" }}
        >
          {filteredProducts.length > 0 && (
            <>
              <Typography variant="h5">{productCategory}</Typography>
              {filteredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Card
                    sx={{
                      border: "2px solid black",
                      width: "100%",
                      padding: "3%",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={product.url}
                      alt={product.productBrand}
                      style={{ width: "90%", height: "50%" }}
                    />
                    <Typography variant="subtitle1">
                      {product.productBrand}
                    </Typography>
                    <Typography variant="body1">
                      {product.productDesc}
                    </Typography>
                    <Typography variant="body1">
                      {product.productPrice}
                    </Typography>
                    <Typography variant="body1">{product.qty}</Typography>
                    <Typography variant="body1">
                      {product.productColor}
                    </Typography>
                    <Typography variant="body1">
                      {product.productSize}
                    </Typography>
                    <Button
                      onClick={addtoCart}
                      sx={{ background: "red", color: "white", mt: "3%" }}
                    >
                      Added To Cart
                    </Button>
                  </Card>
                </Grid>
              ))}
            </>
          )}
          {filteredProducts.length < 1 && (
            <>
              {Products.length > 0 && (
                <>
                  {/* <Typography variant="h5">Products</Typography> */}
                  {Products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <IndividualProduct
                        individualproduct={product}
                        addtoCart={addtoCart}
                      />
                    </Grid>
                  ))}
                </>
              )}
              {Products.length < 1 && (
                <Grid item xs={12}>
                  <Typography variant="h5">Please wait...</Typography>
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UserProducts;
