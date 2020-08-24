import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

//TODO: load articles from array dynamically
const Articles = () => {
  return (
    <Grid container spacing={3} style={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <Typography variant="h5">Check out our latest articles</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card style={{ borderRadius: 20 }}>
          <CardContent>
            <Typography variant="h6" color="inherit">
              Search Doctor
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" color="inherit">
              Online Pharmacy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" color="inherit">
              Consultation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Button variant="outlined" color="primary" size="large">
          Veiw All
        </Button>
      </Grid>
    </Grid>
  )
}
export default Articles
