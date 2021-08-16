import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import moviesApi from "../../apis/moviesApi";

function Paginations() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  var settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await moviesApi.getTrending();
        setMovie(data.results);
      } catch (error) {
        console.log("Lỗi Fetch", error);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
  }

  const handleClick = (id) => {
    history.push(`/${id}`);
  };

  return (
    <div>
      <h2 className="title_pagination">Trending Movie</h2>
      <div className="row">
        <div className="col-12" style={{ padding: 0 }}>
          <div className="row row--grid">
            <Slider {...settings}>
              {movie.map((x) => (
                <div
                  className="col-6 col-sm-4 col-lg-3 col-xl-2 card_padding"
                  key={x.id}
                  onClick={() => handleClick(x.id)}
                >
                  <div className="card card_box">
                    <img
                      className="card_img"
                      src={`${baseUrlImg}${x.poster_path}`}
                      alt={x.title}
                    />
                    <button className="card_add" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"></path>
                      </svg>
                    </button>
                    <span className="card_rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path>
                      </svg>
                      {x.vote_average}
                    </span>
                    <h3 className="card_title">{x.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="row">
        <h2 className="section_title">Select Your Plan</h2>
        <p className="section_text">
          No hidden fees, equipment rentals, or installation appointments.
        </p>

        <div className="col-12 col-md-6 col-xl-4 order-md-2 order-xl-1">
          <div className="plan">
            <h3 className="plan_title">Regular</h3>
            <ul className="plan_list">
              <li className="green">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                FlixTV Originals
              </li>
              <li className="green">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                Switch plans or cancel anytime
              </li>
              <li className="red">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 19"
                  width="19px"
                  height="14px"
                  // font-weight="bold"
                >
                  <path
                    fill="red"
                    d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
                  ></path>
                </svg>
                Stream 65+ top Live
              </li>
              <li className="red">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 19"
                  width="19px"
                  height="14px"
                  // font-weight="bold"
                >
                  <path
                    fill="red"
                    d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
                  ></path>
                </svg>
                TV channels
              </li>
            </ul>

            <span className="plan_price">
              $11.99
              <span>/month</span>
            </span>

            <button className="plan_btn">Select Plan</button>
          </div>
        </div>

        <div className="col-12 col-xl-4 order-md-1 order-xl-2">
          <div className="plan plan_best">
            <h3 className="plan_title">Premium</h3>
            <ul className="plan_list">
              <li className="green">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                FlixTV Originals
              </li>
              <li className="green">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                Switch plans or cancel anytime
              </li>
              <li className="red">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                Stream 65+ top Live
              </li>
              <li className="red">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 19"
                  width="19px"
                  height="14px"
                  // font-weight="bold"
                >
                  <path
                    fill="red"
                    d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
                  ></path>
                </svg>
                TV channels
              </li>
            </ul>

            <span className="plan_price">
              $34.99
              <span>/month</span>
            </span>

            <button className="plan_btn">Select Plan</button>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4 order-md-3 order-xl-3">
          <div className="plan">
            <h3 className="plan_title">Premium + TV channels</h3>
            <ul className="plan_list">
              <li className="green">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                FlixTV Originals
              </li>
              <li className="green">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                Switch plans or cancel anytime
              </li>
              <li className="red">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                Stream 65+ top Live
              </li>
              <li className="red">
                <svg
                  class="svg-icon"
                  viewBox="0 0 19 14"
                  width="19px"
                  height="14px"
                  font-weight="bold"
                >
                  <path
                    fill="lime"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                TV channels
              </li>
            </ul>

            <span className="plan_price">
              $49.99
              <span>/month</span>
            </span>

            <button className="plan_btn">Select Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paginations;
