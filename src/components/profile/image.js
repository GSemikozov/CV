import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import styles from './profileInfo.module.css';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const ProfileImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "me.jpg" }) {
        ...squareImage
      }
      image2: file(relativePath: { eq: "hire-me.jpg" }) {
        ...squareImage
      }
    }
  `)

  return (
    <>
      <Img
        fluid={data.image1.childImageSharp.fluid}
        className={styles.profilePhoto}
      />
      <Img
        fluid={data.image2.childImageSharp.fluid}
        className={styles.profileHirePhoto}
      />
    </>
  )
}
