// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'

// Step 2: Define your component
const Posts = ({data}) => {
  const list = data.allMicrocmsPosts.edges;

  return <ul>
    {list.map(edge => {
        const article = edge.node;
        const url = "/articles/" + article.postsId;

        return (
        <React.Fragment key={article.postsId}>
          <li className="mt-2 text-primary">
            <a href={ url } target="_blank" rel="noreferrer"><div>{ article.title }</div></a>
          </li>
        </React.Fragment>
        )
    })}
  </ul>
}

// additional step - query data from CMS
export const query = graphql`
  {
    allMicrocmsPosts(sort: {publishedAt: DESC}) {
      edges {
        node {
          title
          postsId
        }
      }
    }
  }
`

// Step 3: Export your component
export default Posts
