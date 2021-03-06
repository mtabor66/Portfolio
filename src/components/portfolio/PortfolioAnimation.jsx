import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { FiPlus } from "react-icons/fi";
import Masonry from "react-masonry-css";
import Fade from "react-reveal/Fade";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex flex-wrap justify-content-start">
            <Tab>All</Tab>
            <Tab>Branding</Tab>
            <Tab>Photography</Tab>
            <Tab>Fashion</Tab>
            <Tab>Product</Tab>
          </TabList>
          {/* End tablist */}

          <SRLWrapper>
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Motion Graphy</h5>
                        <span>Android App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-1.jpg"
                        className="gallery-link"
                      >
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-1.jpg"
                            alt="Motion Graphy"
                          />
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>E-Learning App</h5>
                        <span>Nuna ios App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-2.jpg"
                        className="gallery-link"
                      >
                        {" "}
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-2.jpg"
                            alt="E-Learning App"
                          />
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Visual Design</h5>
                        <span>Themeforest Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-3.jpg"
                        className="gallery-link"
                      >
                        {" "}
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-3.jpg"
                            alt="Visual Design"
                          />
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-4.jpg"
                        className="gallery-link"
                      >
                        {" "}
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-4.jpg"
                            alt="Business Card"
                          />{" "}
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-5.jpg"
                        className="gallery-link"
                      >
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-5.jpg"
                            alt="Chatting Application"
                          />
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-6.jpg"
                        className="gallery-link"
                      >
                        {" "}
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-6.jpg"
                            alt="Web Application"
                          />{" "}
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-7.jpg"
                        className="gallery-link"
                      >
                        {" "}
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-7.jpg"
                            alt="Business Card"
                          />{" "}
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-8.jpg"
                        className="gallery-link"
                      >
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-8.jpg"
                            alt="Chatting Application"
                          />
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-9.jpg"
                        className="gallery-link"
                      >
                        <Fade>
                          <img
                            src="img/portfolio/m-portfolio-9.jpg"
                            alt="Web Application"
                          />{" "}
                        </Fade>
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Motion Graphy</h5>
                        <span>Android App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-6.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-6.jpg"
                          alt="Motion Graphy"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Visual Design</h5>
                        <span>Themeforest Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-3.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-3.jpg"
                          alt="Visual Design"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-8.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-8.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-4.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-4.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                </Masonry>
                {/* grid item  */}
              </div>

              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>E-Learning App</h5>
                        <span>Nuna ios App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-2.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-2.jpg"
                          alt=""
                          alt="E-Learning App"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-5.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-5.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-6.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-6.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>E-Learning App</h5>
                        <span>Nuna ios App</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-1.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-1.jpg"
                          alt=""
                          alt="E-Learning App"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-7.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-7.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-9.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-9.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>
                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-2.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-2.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Web Application</h5>
                        <span>Behance Shot</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-3.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-3.jpg"
                          alt="Web Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Business Card</h5>
                        <span>Graphicriver Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-5.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-5.jpg"
                          alt="Business Card"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}

                  <div className="portfolio-box-01">
                    <div className="portfolio-img">
                      <div className="portfolio-info">
                        <h5>Chatting Application</h5>
                        <span>Codecanyon Market</span>
                      </div>
                      {/* End .portfolio-info */}
                      <a
                        href="img/portfolio/m-portfolio-6.jpg"
                        className="gallery-link"
                      >
                        <img
                          src="img/portfolio/m-portfolio-6.jpg"
                          alt="Chatting Application"
                        />
                      </a>
                      {/* End gallery link */}

                      <div className="portfolio-icon">
                        <FiPlus />
                      </div>
                      {/* End .portfolio-icon */}
                    </div>
                  </div>

                  {/* grid item  */}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </SRLWrapper>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
