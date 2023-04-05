import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
function sellShoes() {
  return (
    <>
    <Grid container>
        <Grid item xs={12} sm={12} lg={12} md={12}>
              <Box>
                 <Typography sx={{textAlign:"center"}}>
                    Enter Your Brand Data 
                 </Typography>
                 <Typography>
                    Enter Your Image Here
                 </Typography>

              </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default sellShoes