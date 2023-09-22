import React from 'react'
import PropTypes from 'prop-types';

const BlogText = ({
    Title,
    Description,
    handlePostSubmit,
    handleOnchange
}) => {
    return (
        <div>
            <form className='container m-2' onSubmit={handlePostSubmit}>
                {Title ? <h2 className='text-center'>{Title}</h2>
                    : <div className="form-floating border m-2">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingInputValue1" style={{ height: '10vh', resize: 'none' }}
                            onChange={handleOnchange} name='title'></textarea>
                        <label form="floatingTextarea2">Enter Title</label>
                    </div>
                }
                {Description ? <p>{Description}</p>
                    : <div className="form-floating border m-2">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingInputValue2" style={{ height: '40vh', resize: 'none' }} value={Description} onChange={handleOnchange} name='description'></textarea>
                        {Description || <label form="floatingTextarea2">Enter Description</label>}
                    </div>
                }
                {handlePostSubmit && <button type='submit' className='btn btn-primary btn-lg float-end m-2'>Publish</button>}
            </form>
        </div>
    )
}

export default BlogText;

BlogText.propTypes = {
    Title: PropTypes.string,
    Description: PropTypes.string,
    handleOnchange: PropTypes.func,
    handlePostSubmit: PropTypes.func
};
