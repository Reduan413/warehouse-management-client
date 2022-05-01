import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import userPic from "../../../image/user-one.png";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Review.css";

const Review = () => {
  const reviews = [
    {
      id:"r1",
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
    },
    {
      id:"r2",
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
    },
    {
      id:"r3",
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
    },
    {
      id:"r4",
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="review" className="reviews pt-70 pb-70">
      <div className="container mt-5">
        <div className="text-center ">
          <h3 className="sectionTitle">What Our Clients are Saying?</h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-reviews"
              className="owl-carousel owl-theme"
              {...options}
            >
              {reviews.length === 0 ? (
                <div class="item">
                  <div class="shadow-effect">
                    <img class="img-circle" src={userPic} />

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                  <div class="testimonial-name">
                    <h5>Rajon Rony</h5>
                    <small>ITALY</small>
                  </div>
                </div>
              ) : (
                reviews.map((review) => {
                  return <ReviewItem review={review} key={review.id} />;
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
