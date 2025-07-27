import React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Image from "./image"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

interface IProps {
  article: Article
}

interface Article {
  title: string
  image: string
  description: string
  url: string
}

const ArticleCard = ({ article, ...props }: IProps) => {
  const handleReadMoreClick = () => {
    console.log(`Read More clicked for: ${article.title}`)
    // Add your read more logic here
    alert(`Reading article: ${article.title}`)
  }

  return (
    <Card>
      <CardMedia image={article.image}>
        <Image alt={article.title} filename={article.image} />
      </CardMedia>
      <CardContent style={{ textAlign: "start" }}>
        <Typography variant="h6" color="inherit">
          {article.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions style={{ paddingLeft: 20 }}>
        <Button size="small" color="primary" onClick={handleReadMoreClick}>
          Read More <ArrowRightAltIcon style={{ marginLeft: 5 }} />
        </Button>
      </CardActions>
    </Card>
  )
}

export default ArticleCard
