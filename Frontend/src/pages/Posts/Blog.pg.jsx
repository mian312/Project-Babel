import React, { useEffect, useState } from 'react'
import ImageOverlay from '../../components/cards/imageOverlay.comp';
import BlogText from '../../components/cards/BlogText.comp';
import { API } from '../../services/api';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      } else {
        toast.error("An error occurred, Please try again later")
      }
    }

    fetchData();
  }, [id]); // Add id as a dependency to re-run the effect when it changes

  // Use another useEffect to log the post when it changes
  useEffect(() => {
    console.log(post);
  }, [post]);


  return (
    <div>
      <div className='banner object-fit-none' style={{ height: 'max-content' }}>
        <ImageOverlay url={post.picture} />
      </div>
      <div className='container'>
        <BlogText
          Title={post.title}
          Description={post.description}
        />
      </div>
    </div>
  )
}

export default Blog;