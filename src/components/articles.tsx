import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ArticleCard from "./article-card"
import Bar from "./bar"

const Articles = () => {
  const articles = [
    {
      title: "Disease detection, check up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
      url: "",
      image: "blog1.png",
    },
    {
      title: "Herbal medicines that are safe for consumption",
      description:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
      url: "",
      image: "blog2.png",
    },
    {
      title: "Natural care for healthy facial skin",
      description:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
      url: "",
      image: "blog3.png",
    },
  ]

  return (
    <Grid container spacing={3} style={{ textAlign: "center" }}>
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h5">Check out our latest articles</Typography>
        <Bar />
      </Grid>
      {articles.map(article => (
        <Grid item xs={12} sm={4} key={article.title}>
          <ArticleCard article={article} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Button variant="outlined" color="primary" size="large">
          Veiw All
        </Button>
      </Grid>
    </Grid>
  )
}
export default Articles
