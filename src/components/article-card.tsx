import React from "react"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import Image from "./image"
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"

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
        <Button size="small" color="primary">
          Read More <ArrowRightAltIcon style={{ marginLeft: 5 }} />
        </Button>
      </CardActions>
    </Card>
  )
}

export default ArticleCard
