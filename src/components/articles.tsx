import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ArticleCard from "./article-card"
import Bar from "./bar"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const Articles = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleViewAllClick = () => {
    console.log("View All button clicked")
    alert("View all articles feature coming soon!")
  }

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
    <div id="blog">
      <Grid
        container
        spacing={isMobile ? 2 : 3}
        style={{
          textAlign: "center",
          padding: isMobile ? "20px 10px" : "40px 20px",
        }}
      >
        <Grid
          item
          xs={12}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h5"
            style={{
              fontSize: isMobile ? "1.5rem" : "1.75rem",
              marginBottom: 10,
            }}
          >
            Check out our latest articles
          </Typography>
          <Bar />
        </Grid>
        {articles.map(article => (
          <Grid item xs={12} sm={6} md={4} key={article.title}>
            <ArticleCard article={article} />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            size={isMobile ? "medium" : "large"}
            onClick={handleViewAllClick}
          >
            View All
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Articles
