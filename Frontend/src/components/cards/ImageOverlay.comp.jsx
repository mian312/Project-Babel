import React from 'react'
import PropTypes from 'prop-types';

const ImageOverlay = ({ title, url }) => {
    return (
        <div className="card text-bg-dark">
            <img src={url} crossOrigin='anonymous'
                className="card-img img-fluid" alt={title} />
            <div className="card-img-overlay d-flex align-items-center">
                <h1 className="card-title w-100 text-center">{title}</h1>
            </div>
        </div>
    )
}

export default ImageOverlay;

ImageOverlay.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
};
