import * as React from 'react'

const DetailPage = ({pageContext: {title, body, postsId, imageUrl}}) => {
  return <>
    <h1>{ title }</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
    <img src={imageUrl} alt="detail"/>
  </>
}

export default DetailPage