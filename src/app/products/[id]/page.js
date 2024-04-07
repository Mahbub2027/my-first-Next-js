import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This is single page : {params.id}</h1>
            <h1>Search by category: {searchParams.category}</h1>
        </div>
    );
};

export default DynamicPage;