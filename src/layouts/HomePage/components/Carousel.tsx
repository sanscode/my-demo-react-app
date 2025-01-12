
export const Carousel = () =>{
    return (
        /**This bootstrap code shows a div element that creates a carousel (slideshow) component: 
         * carousel: bootstraps base class for slideshow components
         * d-none - Initially hides the element
         * d-lg-block - Shows the element as a block element only on large screens (lg)
         * data-bs-interval='false' - Disables automatic sliding/cycling of the carousel items
        */
        <div className="container mt-5" style={{height: 550}}>
            <div className='homepage-carousel-title'>
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            {/* Desktop */}
            <div id='carouselExampleControls' className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval='false'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        {/*should get the books from the servies, the below is static examples*/}
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
                                <div className='text-center'>
                                    <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')} 
                                    width='151'
                                    height='233'
                                    alt="book"/>
                                    <h6 className="mt-2">Book</h6>
                                    <p>L2Code</p>
                                    <a className="btn main-color text-white" href='#'>Reserve</a>

                                </div>
                                <button className=''></button>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}