import React from 'react';

export const ExploreTopBooks = () => {
    return (
        /** The className contains bootstrap library
         * p-5 - add padding arroung div and 5 is largest
         * mb-4: add marigin to bottom 
         * bg-dark- sets a dark background
         * header: custom CC class add styling to this header section
         */
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white d-flex justify-content-center align-item-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find your next adventure</h1>
                    <p className='col-md-8 fs-4'>Where do you like to go next?</p>
                    <a type='button' className='btn main-clor btn-lg text-white' href='#'>Explore top books</a>
                </div>
            </div>

        </div>

    );
}












