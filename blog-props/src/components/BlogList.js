import React from 'react'
import BlogPost from './BlogPost'
import blogData from './blogData'

function BlogList(){
    const data = blogData.map(post => <BlogPost 
        key={post.id} 
        title={post.title} 
        subTitle={post.subTitle}
        author={post.author}
        date={post.date}/>)
    return (
        <div className='blogList'>
            {data}
            <button className='oldButton'>Older Posts <i className='arrow'></i></button>
        </div>
    )

}

export default BlogList