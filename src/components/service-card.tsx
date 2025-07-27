import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Image from "./image"

interface IProps {
  service: Service
}

interface Service {
  title: string
  image: string
  description: string
}

const ServiceCard = ({ service, ...props }: IProps) => {
  return (
    <Card>
      <CardContent style={{ textAlign: "start", minHeight: 200 }}>
        <div style={{ width: 80, padding: 10 }}>
          <Image alt={service.title} filename={service.image} />
        </div>
        <Typography variant="h6" color="inherit">
          {service.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default ServiceCard
