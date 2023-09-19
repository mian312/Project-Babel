import React, { useContext, useEffect, useState } from 'react'
import ImageOverlay from '../../components/cards/imageOverlay.comp';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import BlogText from '../../components/cards/BlogText.comp';
import { categories } from '../../constants/data';
import SelectCategory from '../../components/cards/SelectCategory.comp';

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

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post?.picture;

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async () => {
        // TODO Api Call
        navigate('/home');
    }

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                // TODO Api Call
                post.picture = '' // TODO
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    return (
        <div>
            <div className='banner'>
                <ImageOverlay />
            </div>
            <div className='text-center'>
                <label htmlFor="imageInput" className='btn btn-outline-primary btn-lg m-2'>
                    <i className="bi bi-file-earmark-arrow-up-fill"></i>
                </label>
                <input
                    type="file"
                    id="imageInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label className='btn btn-outline-success btn-lg m-2'>
                    <i className="bi bi-pen-fill"></i>
                </label>
            </div>
            <div className='container'>
                <SelectCategory categories={categories}/>
                <BlogText
                    handleOnchange={handleChange}
                    handlePostSubmit={savePost}
                />
            </div>
        </div>
    )
}

export default CreateBlog;