import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/DataProvider';
import ImageOverlay from '../../components/cards/imageOverlay.comp';
import './Home.pg.css'
import Categories from '../../components/categories/categories.comp';
import { categories } from '../../constants/data.js';
import Post from '../../components/cards/Post.comp';
import { Link, useNavigate } from 'react-router-dom';
import SelectCategory from '../../components/cards/SelectCategory.comp';

const imageOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const Home = () => {
    const { account, setAccount } = useContext(DataContext);
    const navigate = useNavigate();





    return (
        <div>
            <div className='banner'>
                <ImageOverlay
                    title='Welcome to Project-Babel'
                    url={'https://assets-global.website-files.com/6372cf43b12f4050f98e2731/642b45cc801425610391faa9_5f30d006dcebe9b8f9e789de_QOuaNRUnSaGJ6TMcFtCC_bigstock--186287221.jpeg'}
                />
            </div>
            <div className='d-flex my-3 mx-2'>
                <SelectCategory categories={categories}/>
                <Link class="btn btn-primary" to={'/createPost'} role="button" style={{ height: 'max-content' }}>Create Blog</Link>
            </div>
            <div className='container mx-auto d-flex justify-content-evenly'>
                <div className="row text-center">
                    {categories.map((category) => (
                        <div key={category.id} className='col my-2'>
                            <Post post={category} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home