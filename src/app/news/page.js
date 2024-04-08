import React from 'react';
import Link from 'next/link';

const NewsHome = () => {
    return (
        <div>
            <Link href='/news/article'>
          <button className="btn btn-sm btn-accent mr-3">Article</button>
        </Link>
        <Link href='/news/blogs'>
          <button className="btn btn-sm btn-accent">Blogs</button>
        </Link>
            <h1 className='text-4xl'>News Home page</h1>
        </div>
    );
};

export default NewsHome;