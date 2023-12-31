import React, { useContext, useEffect, useState } from 'react'
import ImageOverlay from '../../components/cards/imageOverlay.comp';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../services/api';
import BlogText from '../../components/cards/BlogText.comp';
import { categories } from '../../constants/data';
import SelectCategory from '../../components/cards/SelectCategory.comp';
import { toast } from 'react-toastify';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreateBlog = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [loading, isLoading] = useState(false);
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState(null);
    const { account } = useContext(DataContext);

    const url = post?.picture;

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async (e) => {
        // Prevent default reload on form submit
        e.preventDefault();
        try {
            if (!post?.picture) {
                toast.warn("Please provide an image for your post");
            } else if (!post?.title) { // Change .length() to ! to check if title is falsy
                toast.warn("Please provide a suitable title for the post");
            } else if (!post?.description) { // Change .length() to ! to check if description is falsy
                toast.warn("Please provide a suitable description for the post");
            } else {
                // All required fields are available, call the API
                try {
                    // Get response from the API
                    const response = await API.createPost(post);
                    // Handle response
                    if (response.isSuccess) {
                        toast.success("Successfully Created Post");
                        navigate('/home?category=All');
                    } else {
                        toast.error("Couldn't Create the Post! \nPlease try again later");
                    }
                } catch (error) {
                    toast.error(error);
                }
            }
        } catch (error) {
            toast.error("Something went wrong! Please try again later");
            navigate('/home?category=All');
        }
    };


    // Handle change in select file
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };

    useEffect(() => {
        const uploadImage = async () => {
            try {
                if (!file) return; // Exit early if no file is selected

                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file, file.name);

                const response = await API.uploadFile(data);

                // Assuming the response contains the URL or relevant data
                const imageUrl = response?.data?.image || url;

                return imageUrl;
            } catch (error) {
                console.error("Error uploading file:", error);
                return null;
            }
        };

        const updatePost = async (imageUrl) => {
            try {
                // Update the 'post' object with the image URL
                const updatedPost = {
                    ...post,
                    picture: imageUrl,
                    categories: location.search?.split('=')[1] || 'All',
                    username: account.username,
                };

                setPost(updatedPost);
            } catch (error) {
                console.error("Error updating post:", error);
            }
        };

        const handleImageUpload = async () => {
            const imageUrl = await uploadImage();
            if (imageUrl) {
                updatePost(imageUrl);
            }
        };

        handleImageUpload();
        console.log("image \n", url);
        console.log("post \n", post);
    }, [file, location.search]);

    useEffect(() => {
        !sessionStorage.getItem('accessToken') && navigate('/auth') && toast.warn('Pease Login to Continue')
    }, [account, []])



    return (
        <div>
            <Helmet>
                <title>Create Blog - Project-Babel</title>
            </Helmet>
            <div className='banner object-fit-none'>
                <ImageOverlay url={url} />
            </div>
            <div className='text-center '>
                <label htmlFor="imageInput" className='btn btn-outline-primary btn-lg m-2'>
                    <i className="bi bi-file-earmark-arrow-up-fill"></i>
                </label>
                <input
                    type="file"
                    name='file'
                    id="imageInput"
                    accept="image/jpeg, image/png, image/jpg"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </div>
            <div className='container'>
                <SelectCategory categories={categories} />
                <BlogText
                    handleOnchange={handleChange}
                    handlePostSubmit={savePost}
                />
            </div>
        </div>
    )
}

export default CreateBlog;