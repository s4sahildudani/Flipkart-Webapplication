import React from 'react'
import { Grid ,Card ,Box, Typography
 } from '@mui/material'
function Itemsdata() {
  return (
    <>
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Card>
            <Box sx={{display:"flex"}}>
            <Typography>
                Filters
              </Typography>
              
            </Box>
              <hr />
              <Box>
              <Typography>
               Categories
              </Typography>

              <Typography>
                Footwear
              </Typography>

              <Typography>
                Shoes Pattern
              </Typography>
              </Box>
          </Card>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10}>
           <Card>

           </Card>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default Itemsdata