import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface ImageProps {
  filename: string
  alt: string
}

const Image: React.FC<ImageProps> = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(width: 600, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find((n: any) => {
    return (
      n.node.relativePath === filename ||
      n.node.name === filename.replace(/\.[^/.]+$/, "")
    )
  })

  if (!image) {
    console.warn(`Image not found: ${filename}`)
    return (
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Image not found</span>
      </div>
    )
  }

  const gatsbyImage = getImage(image.node.childImageSharp)
  if (!gatsbyImage) {
    console.warn(`Gatsby image not generated for: ${filename}`)
    return (
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Image error</span>
      </div>
    )
  }

  return <GatsbyImage image={gatsbyImage} alt={alt || ""} />
}

export default Image
