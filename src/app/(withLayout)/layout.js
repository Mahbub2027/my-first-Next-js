import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='flex gap-10'>
            <div className='w-64'><h1 className='text-2xl'>Sidebar Section</h1></div>
            <div className=''>
                <h1 className='text-2xl'>Header Section</h1>
                {children}
                <h1 className='text-2xl'>Footer Section</h1>
            </div>
        </div>
    );
};

export default Layout;