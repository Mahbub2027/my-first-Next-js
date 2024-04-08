import React from 'react';
import Image from 'next/image';
import nextImg from '@/assets/nextimg.png';


const AlbumPage = () => {
    return (
        <div>
            <h1>Image components</h1>
            <Image
                src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png"
                width={500}
                height={500}
                alt='next photo'
            />
            <h1>Image tag</h1>
            <img
                src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png"
                width="500"
                height="500"
                alt='next photo'
            />
            <h1>Assets Image</h1>
            <Image
                src={nextImg}
                width={500}
                height={400}
                alt='next photo'
            />

        </div>
    );
};

export default AlbumPage;