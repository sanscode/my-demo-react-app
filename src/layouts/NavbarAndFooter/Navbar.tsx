

export const Navbar= () => {
    
    
    return (
        /**nav is the JSX , className contains the bootstrap classes for navigation */
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className="container-fluid">
            <span className="navbar-brand">Lead the Read</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#navbarNavDropDown' 
            aria-controls="navbarNavDropDown" aria-expanded='false' 
            aria-label="Toggle Navigation"></button>
    
            <span className="collapse navbar-collapse" id='navbarNavDropdown'>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href='#'>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='#'>Search books</a>
                </li>
    
                </ul>
                <ul className="navbar-nav ms-auto">
                <li className="nav-item m-1">
                    <a type="button" className="btn btn-outline-light" href="#">Sign in</a>
                </li>
                </ul>
            </span>
    
            </div>
        </nav>

    );


}