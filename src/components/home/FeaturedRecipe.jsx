import React from "react";
import "./featuredRecipe.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FeaturedRecipe() {
  return (
    <>
      <div className="container featured-section">
        <span className="our-recomend position-relative">
          our recomendation
        </span>
        <div className="row mb-3">
          <div className="col-4">
            <h3 className="featured-title">Featured Recipe</h3>
          </div>
          <div className="col-4">
            <Button className="btn-featured mx-2 active-btn">Rice</Button>
            <Button className="btn-featured mx-2">Rice</Button>
            <Button className="btn-featured mx-2">Rice</Button>
            <Button className="btn-featured mx-2">Rice</Button>
          </div>
          <div className="col-4"></div>
        </div>
        <Swiper
          spaceBetween={40}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
              />
              <Card.Body style={{ padding: "0.5rem 0 0 0" }}>
                <Card.Title>Nasi Goreng</Card.Title>
                <Card.Text>
                  Pada salah satu tahap pemrosesan hasil panen padi, gabah
                  ditumbuk dengan lesung atau digiling sehingga bagian luarnya
                  terlepas dari isinya.
                </Card.Text>
                <Button size="sm" className="btn-featured-recipe">
                  check recipe
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
              />
              <Card.Body style={{ padding: "0.5rem 0 0 0" }}>
                <Card.Title>Nasi Gorengaaa</Card.Title>
                <Card.Text>
                  Pada salah satu tahap pemrosesan hasil panen padi, gabah
                  ditumbuk dengan lesung atau digiling sehingga bagian luarnya
                  terlepas dari isinya.
                </Card.Text>
                <Button size="sm" className="btn-featured-recipe">
                  check recipe
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
              />
              <Card.Body style={{ padding: "0.5rem 0 0 0" }}>
                <Card.Title>Nasi Gorengdsadsa</Card.Title>
                <Card.Text>
                  Pada salah satu tahap pemrosesan hasil panen padi, gabah
                  ditumbuk dengan lesung atau digiling sehingga bagian luarnya
                  terlepas dari isinya.
                </Card.Text>
                <Button size="sm" className="btn-featured-recipe">
                  check recipe
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
              />
              <Card.Body style={{ padding: "0.5rem 0 0 0" }}>
                <Card.Title>Nasi sadaGoreng</Card.Title>
                <Card.Text>
                  Pada salah satu tahap pemrosesan hasil panen padi, gabah
                  ditumbuk dengan lesung atau digiling sehingga bagian luarnya
                  terlepas dari isinya.
                </Card.Text>
                <Button size="sm" className="btn-featured-recipe">
                  check recipe
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
              />
              <Card.Body style={{ padding: "0.5rem 0 0 0" }}>
                <Card.Title>Nasi Goreng</Card.Title>
                <Card.Text>
                  Pada salah satu tahap pemrosesan hasil panen padi, gabah
                  ditumbuk dengan lesung atau digiling sehingga bagian luarnya
                  terlepas dari isinya.
                </Card.Text>
                <Button size="sm" className="btn-featured-recipe">
                  check recipe
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src="https://pasjabar.com/wp-content/uploads/2022/12/Screenshot-2022-12-01-155132.jpg"
              />
              <Card.Body style={{ padding: "0.5rem 0 0 0" }}>
                <Card.Title>Nasi Goreng</Card.Title>
                <Card.Text>
                  Pada salah satu tahap pemrosesan hasil panen padi, gabah
                  ditumbuk dengan lesung atau digiling sehingga bagian luarnya
                  terlepas dari isinya.
                </Card.Text>
                <Button size="sm" className="btn-featured-recipe">
                  check recipe
                </Button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default FeaturedRecipe;
