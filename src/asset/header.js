import React from 'react'

const header = () => {
  return (
    <>
        <div className="py-4 top-wrap">
            <div className="container-xl">
                <div className="row d-flex align-items-start">
                    <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
                        <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-map"></span>
                        </div>
                        <div className="text pl-3 pl-md-3">
                            <p className="con"><span>Free Call</span> <span>+1 234 456 78910</span></p>
                            <p className="con">Call Us Now 24/7 Customer Support</p>
                        </div>
                    </div>
                    <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
                        <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3 pl-md-3">
                            <p className="hr"><span>Our Location</span></p>
                            <p className="con">Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
                        <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-connectdevelop"></span>
                        </div>
                        <div className="text pl-3 pl-md-3">
                            <p className="con"><span>Connect </span> <span>with us</span></p>
                            <p className="con"><a href="#">Facebook</a> <a href="#">Twitter</a> <a href="#">Dribbble</a></p>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
        <nav className="navbar navbar-expand-lg  ftco-navbar-light">
            <div className="container-xl">
                <a className="navbar-brand align-items-center" href="index-2.html">
                    <span className="">Oakberry <small>Real Estate Agency</small></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="index-2.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="properties.html">Properties</a></li>
                        <li className="nav-item"><a className="nav-link" href="agents.html">Agents</a></li>
                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                    <p className="mb-0"><a href="#" className="btn btn-primary rounded">Submit A Property</a></p>
                </div>
            </div>
        </nav>
    </>
  )
}

export default header