import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Note: You can change "images" to whatever you'd like.

const Image = (props: { filename: any; alt: string | undefined }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
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
    `}
    render={data => {
      const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const gatsbyImage = getImage(image.node.childImageSharp)
      if (!gatsbyImage) {
        return null
      }
      return <GatsbyImage image={gatsbyImage} alt={props.alt || ""} />
    }}
  />
)

export default Image
