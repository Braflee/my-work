import React from 'react'

function BlogPost(props){
    return (
        <div className='blogPost'>
            <p className='blogTitle'>{props.title}</p>
            <p className='blogSub'>{props.subTitle}</p>
            <p className='postedBy'>Posted by <a className='author'>{props.author}</a> on {props.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost