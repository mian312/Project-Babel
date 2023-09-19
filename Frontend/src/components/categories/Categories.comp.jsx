import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Categories = ({ category }) => {
    return (
        <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected={category === 'All'}>{category}</option>
        </select>
    );
};

export default Categories;

Categories.prototype = {
    category: PropTypes.string.isRequired
}
