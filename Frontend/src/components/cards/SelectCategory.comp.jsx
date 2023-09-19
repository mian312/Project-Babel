import React from 'react'
import { useNavigate } from 'react-router-dom';

const SelectCategory = ({ categories }) => {
    const navigate = useNavigate();

    return (
        <div className='form-floating w-100'>
            <select className="form-select form-select-md mb-3 w-50" id="floatingSelect"
                onChange={(e) => navigate(`?category=${e.target.value}`)}
            >
                {categories.map(category => (
                    <option key={category.type} selected={category.type === 'All'}>{category.type}</option>
                ))}
            </select>
            <label for="floatingSelect">Select Category</label>
        </div>
    )
}

export default SelectCategory;
