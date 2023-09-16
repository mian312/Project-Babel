import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>Landing.pg</div>
            <button className="btn btn-primary" onClick={() => navigate('/home')}>Click Me!</button>
        </div>
    )
}

export default Landing