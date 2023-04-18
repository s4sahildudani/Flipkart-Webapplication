import React, { useState } from "react";
import { Grid,  Card, Typography,Button ,Box} from "@mui/material";
import { dataref } from "../components/firebase";
import { useNavigate } from "react-router-dom";
function Contactus() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate =useNavigate();
  function handleAdd(event) {
    console.log("Name", name);
    console.log("Age", age);
    dataref.ref("user").set({
      name: name,
      age: age,
    });
    setName("");
    setAge("");
    navigate("/login")
  }
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} alignItems="left">
          <Card sx={{bgcolor:"grey" ,width:"50%" ,ml:"25%" ,textAlign:"center" ,color:"white" ,p:"5%" ,mt:"5%"}}>
           <Box>
           <Typography>Enter Name</Typography>
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
           </Box>
            <Box sx={{mt:"5%"}}>
            <Typography>Enter Age</Typography>
            <input
              value={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
            </Box>
            <Button sx={{mt:"5%" ,bgcolor:"black" ,color:"white"}} onClick={handleAdd}>Contactus</Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Contactus;
