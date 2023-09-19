import React from 'react'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div class="card mx-2" style={{ width: '20rem'}}>
      <img src={'https://www.bootdey.com/image/480x480/00FFFF/000000'} class="card-img-top img-thumbnail" style={{ width: '20rem', height: '12rem' }}
      alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to={`/post/${post.id}`} class="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  )
}

export default Post;