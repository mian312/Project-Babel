import React from 'react'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const shortenDescription = post?.description?.length > 28 ? post?.description?.substring(0, 28) + '...' : post?.description;

  return (
    <div className="card mx-2" style={{ width: '20rem'}}>
      <img src={post?.picture} crossOrigin='anonymous' className="card-img-top img-thumbnail" style={{ width: '20rem', height: '12rem' }}
        alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post?.title}</h5>
        <p className="card-text">{shortenDescription}</p>
        <p class="card-text">
        <small class="text-body-secondary">{post?.createdDate}</small>
        </p>
        <Link to={`/post/${post?._id}`} className="btn btn-primary">View details</Link>
      </div>
    </div>
  )
}

export default Post;
