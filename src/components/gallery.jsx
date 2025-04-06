import React from "react";

const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            alt={title}
            className="img-responsive gallery-img"
          />
        </a>
      </div>
    </div>
  );
};

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <style>{`
        #portfolio {
          padding: 100px 0;
        }

        .portfolio-items {
          display: flex;
          flex-wrap: wrap;
        }

        .portfolio-item {
          width: 100%;
          height: 100%;
          margin-bottom: 30px;
        }

        .gallery-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 6px;
          display: block;
        }

        .hover-bg {
          position: relative;
          overflow: hidden;
        }

        .hover-text {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          text-align: center;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: all 0.5s ease-in-out;
          padding-top: 30%;
        }

        .hover-text h4 {
          font-size: 18px;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.3s ease-in-out;
        }

        .hover-bg:hover .hover-text {
          opacity: 1;
        }

        .hover-bg:hover .hover-text h4 {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
