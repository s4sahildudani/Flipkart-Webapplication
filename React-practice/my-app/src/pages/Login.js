import React from 'react'
import {Card ,Box ,Grid } from '@mui/material';
function Login() {
  

  
  return (
    <>
         <Grid container > 
              <Grid xs={12} sm={12} md={12} lg={12}>
                  <Card textAlign="center" sx={{width:"30%" ,bgcolor:"red",color:"white",textAlign:"center"}}>
                    <Box>
                    <h1>Hello</h1>
                    </Box>
                  </Card>
              </Grid>
         </Grid>
    </>
  )
}

export default Login