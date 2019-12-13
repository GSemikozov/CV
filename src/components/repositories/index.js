import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Repositories = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 4
              orderBy: { field: UPDATED_AT, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      {edges.map(({ node }) => (
        <div
          key={node.id}
          as="a"
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{node.name}</h3>
          <p>{node.description}</p>
        </div>
      ))}
    </div>
  )
}
