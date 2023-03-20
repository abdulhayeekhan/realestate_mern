import React from 'react'

const home = () => {
  return (
    <>
      <section className="slider-hero">
        <div className="overlay"></div>
        <div className="hero-slider">
          <div className="item">
            <div className="work">
              <div className="img d-flex align-items-center js-fullheight" style={{ backgroundImage: `url(images/bg_1.jpg)`}}>
                <div className="container-xl">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-xl-6">
                      <div className="text text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Your Property Is Our Priority</h2>
                        <p className="mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p><a href="#" className="btn btn-primary px-5 py-3">Learn More <span className="ion ion-ios-arrow-round-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div className="img d-flex align-items-center justify-content-center js-fullheight" style={{backgroundimage: `url(images/bg_2.jpg)`}}>
                <div className="container-xl">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-xl-6">
                      <div className="text text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Let Your Home Be Unique &amp; Stylist</h2>
                        <p className="mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p><a href="#" className="btn btn-primary px-5 py-3">Learn More <span className="ion ion-ios-arrow-round-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="work">
              <div className="img d-flex align-items-center justify-content-center js-fullheight" style={{backgroundimage: `url(images/bg_3.jpg)`}}>
                <div className="container-xl">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-xl-6">
                      <div className="text text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Modern House Make Better Life</h2>
                        <p className="mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p><a href="#" className="btn btn-primary px-5 py-3">Learn More <span className="ion ion-ios-arrow-round-forward"></span></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
	    </section>
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div class="row">
            <div class="col-md-12">
              <div class="ftco-search d-flex justify-content-center">
                <div class="row">
                  <div class="col-md-12 nav-link-wrap d-flex justify-content-center">
                    <div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a class="nav-link active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Buy Properties</a>
                      <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Rent Properties</a>
                    </div>
                  </div>
                  <div class="col-md-12 tab-wrap">
                    <div class="tab-content" id="v-pills-tabContent">
                      <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                        <form action="#" class="search-property-1">
                          <div class="row g-0">
                            <div className="col-md d-flex">
                              <div className="form-group p-4 border-0">
                                <label for="#">Enter Keyword</label>
                                <div className="form-field">
                                  <div className="icon"><span className="fa fa-search"></span></div>
                                  <input type="text" className="form-control" placeholder="Enter Keyword" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label for="#">Property Type</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                    <select name="" id="" className="form-control">
                                      <option value="">Residential</option>
                                      <option value="">Commercial</option>
                                      <option value="">Land</option>
                                      <option value="">Industrial</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label for="#">Location</label>
                                <div className="form-field">
                                  <div className="icon"><span className="ion-ios-pin"></span></div>
                                  <input type="text" className="form-control" placeholder="Search Location" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label for="#">Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                    <select name="" id="" className="form-control">
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                        <form action="#" className="search-property-1">
                          <div className="row g-0">
                            <div className="col-md d-flex">
                              <div className="form-group p-4 border-0">
                                <label for="#">Enter Keyword</label>
                                <div className="form-field">
                                  <div className="icon"><span className="fa fa-search"></span></div>
                                  <input type="text" className="form-control" placeholder="Enter Keyword" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label for="#">Property Type</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                    <select name="" id="" className="form-control">
                                      <option value="">Residential</option>
                                      <option value="">Commercial</option>
                                      <option value="">Land</option>
                                      <option value="">Industrial</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label for="#">Location</label>
                                <div className="form-field">
                                  <div className="icon"><span className="ion-ios-pin"></span></div>
                                  <input type="text" className="form-control" placeholder="Search Location" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label for="#">Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                    <select name="" id="" className="form-control">
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
	    </section>
      <section className="ftco-section">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
              <span className="subheading">Oakberry Categories</span>
              <h2 className="mb-4">Explore Our Categories &amp; Places</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row g-1 mb-1">
                <div className="col-md-3 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <a href="#" className="services">
                    <div className="icon"><span className="flaticon-architect"></span></div>
                    <div className="text">
                      <h2>Land</h2>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <a href="#" className="services">
                    <div className="icon"><span className="flaticon-house"></span></div>
                    <div className="text">
                      <h2>Residential</h2>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                  <a href="#" className="services">
                    <div className="icon"><span className="flaticon-apartment"></span></div>
                    <div className="text">
                      <h2>Commercial</h2>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <a href="#" className="services">
                    <div className="icon"><span className="flaticon-factory"></span></div>
                    <div className="text">
                      <h2>Industrial</h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                  <ul className="places-list">
                    <li>
                      <a href="#">
                        New York
                        <span>200 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        London
                        <span>100 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Chicago
                        <span>120 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Illinois
                        <span>300 Properties</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <ul className="places-list">
                    <li>
                      <a href="#">
                        California
                        <span>100 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tennessee
                        <span>200 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Texas
                        <span>200 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        North Carolina
                        <span>200 Properties</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                  <ul className="places-list">
                    <li>
                      <a href="#">
                        Florida
                        <span>422 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Charlotte
                        <span>200 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Orlando
                        <span>200 Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Atlanta
                        <span>200 Properties</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-light">
		<div className="container-xl">
			<div className="row justify-content-center">
				<div className="col-md-8 heading-section text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
					<span className="subheading">Our Properties</span>
					<h2 className="mb-4">Featured Properties</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
					<div className="property-wrap">
						<a href="#" className="img img-property" style={{backgroundimage: `url(images/work-1.jpg)`}}>
							<p className="price"><span className="orig-price">$300,000</span></p>
						</a>
						<div className="text">
							<div className="list-team d-flex align-items-center mb-4">
								<div className="d-flex align-items-center">
									<div className="img" style={{backgroundimage: `url(images/person_1.jpg)`}}></div>
									<h3 className="ml-2">John Dorf</h3>
								</div>
								<span className="text-right">2 weeks ago</span>
							</div>
							<h3><a href="#">Sunny Loft Property</a></h3>
							<span className="location"><i className="ion-ios-pin"></i> New York <span className="sale">Sale</span></span>
							<ul className="property_list mt-3 mb-0">
								<li><span className="flaticon-bed"></span>3</li>
								<li><span className="flaticon-bathtub"></span>2</li>
								<li><span className="flaticon-blueprint"></span>1,878 sqft</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
					<div className="property-wrap">
						<a href="#" className="img img-property" style={{backgroundimage: `url(images/work-2.jpg)`}}>
							<p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small> / mo</small></span></p>
						</a>
						<div className="text">
							<div className="list-team d-flex align-items-center mb-4">
								<div className="d-flex align-items-center">
									<div className="img" style={{backgroundimage: `url(images/person_1.jpg)`}}></div>
									<h3 className="ml-2">John Dorf</h3>
								</div>
								<span className="text-right">2 weeks ago</span>
							</div>
							<h3><a href="#">Sunny Loft Property</a></h3>
							<span className="location"><i className="ion-ios-pin"></i> New York <span className="rent">Rent</span></span>
							<ul className="property_list mt-3 mb-0">
								<li><span className="flaticon-bed"></span>3</li>
								<li><span className="flaticon-bathtub"></span>2</li>
								<li><span className="flaticon-blueprint"></span>1,878 sqft</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
					<div className="property-wrap">
						<a href="#" className="img img-property" style={{backgroundimage: `url(images/work-3.jpg)`}}>
							<p className="price"><span className="orig-price">$300</span></p>
						</a>
						<div className="text">
							<div className="list-team d-flex align-items-center mb-4">
								<div className="d-flex align-items-center">
									<div className="img" style={{backgroundimage: `url(images/person_1.jpg)`}}></div>
									<h3 className="ml-2">John Dorf</h3>
								</div>
								<span className="text-right">2 weeks ago</span>
							</div>
							<h3><a href="#">Sunny Loft Property</a></h3>
							<span className="location"><i className="ion-ios-pin"></i> New York <span className="sale">Sale</span></span>
							<ul className="property_list mt-3 mb-0">
								<li><span className="flaticon-bed"></span>3</li>
								<li><span className="flaticon-bathtub"></span>2</li>
								<li><span className="flaticon-blueprint"></span>1,878 sqft</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
					<div className="property-wrap">
						<a href="#" className="img img-property" style={{backgroundimage: `url(images/work-4.jpg)`}}>
							<p className="price"><span className="orig-price">$300<small> / mo</small></span></p>
						</a>
						<div className="text">
							<div className="list-team d-flex align-items-center mb-4">
								<div className="d-flex align-items-center">
									<div className="img" style={{backgroundimage: `url(images/person_1.jpg)`}}></div>
									<h3 className="ml-2">John Dorf</h3>
								</div>
								<span className="text-right">2 weeks ago</span>
							</div>
							<h3><a href="#">Sunny Loft Property</a></h3>
							<span className="location"><i className="ion-ios-pin"></i> New York <span className="rent">Rent</span></span>
							<ul className="property_list mt-3 mb-0">
								<li><span className="flaticon-bed"></span>3</li>
								<li><span className="flaticon-bathtub"></span>2</li>
								<li><span className="flaticon-blueprint"></span>1,878 sqft</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="img vid-section" style={{backgroundimage: `url(images/bg_4.jpg)`}}>
		<div className="overlay"></div>
		<div className="container-xl">
			<div className="row justify-content-center">
				<div className="col-md-6 vid-height d-flex align-items-center justify-content-center text-center">
					<div className="video-wrap" data-aos="fade-up">
						<h3>Modern House Video</h3>
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						<a href="https://vimeo.com/115041822" className="video-icon glightbox d-flex align-items-center justify-content-center">
							<span className="ion-ios-play"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="ftco-section ftco-about-section">
		<div className="container-xl">
			<div className="row g-xl-5">
				<div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
					<div className="img w-100" style={{backgroundimage: `url(images/about.jpg)`}}></div>
				</div>
				<div className="col-md-8 heading-section" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
					<span className="subheading">About Us</span>
					<h2 className="mb-4">Oakberry A Real Estate Company</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					<div className="row py-5">
						<div className="col-md-6 col-lg-3">
							<div className="counter-wrap" data-aos="fade-up" data-aos-duration="1000">
								<div className="text">
									<span className="d-block number gradient-text"><span id="count1" className="counter" data-count="50">0</span></span>
									<p>Years of Experienced</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="counter-wrap" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
								<div className="text">
									<span className="d-block number gradient-text"><span id="count2" className="counter" data-count="210">0</span>K+</span>
									<p>Total Properties</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="counter-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
								<div className="text">
									<span className="d-block number gradient-text"><span id="count2" className="counter" data-count="450">0</span></span>
									<p>Qualified Realtors</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="counter-wrap" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
								<div className="text">
									<span className="d-block number gradient-text"><span id="count2" className="counter" data-count="100">0</span></span>
									<p>Total Branches</p>
								</div>
							</div>
						</div>
					</div>
					<div className="img img-2" style={{backgroundimage: `url(images/about-1.jpg)`}} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="ftco-intro ftco-no-pt ftco-no-pb img" style={{backgroundimage: `url(images/bg_4.jpg)`}}>
		<div className="overlay"></div>
		<div className="container-xl py-5">
			<div className="row justify-content-center">
				<div className="col-lg-10 col-xl-8">
					<div className="row">
						<div className="col-md-8 d-flex align-items-center">
							<div>
								<h1 className="mb-0">Find Best Place For Leaving</h1>
								<p>Find Best Place For Leaving</p>
							</div>
						</div>
						<div className="col-md-4 d-flex align-items-center">
							<p className="mb-0"><a href="#" className="btn btn-black py-3 px-4">Get in touch</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default home
