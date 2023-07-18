import React, { useRef, useState } from 'react';
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/thumbs";

// import required modules
import { Pagination } from 'swiper/modules';


export default function Slider() {

  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={12}>
          <Swiper
           style={{
              "--swiper-navigation-color": "#603EBE",
              "--swiper-pagination-color": "#603EBE",
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            autoHeight={false}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="swiperSlide"
            >
            <SwiperSlide>
              <Box className="second">
              <Container maxWidth="lg">
                <Grid xs={12} sm={12}>
                  <Typography variant="h2" gutterBottom>
                  <span>01</span>
                    CONNECTION
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Connect with coaches directly, you can ping coaches to view profile.
                  </Typography>
                </Grid>
                </Container>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="third">
              <Container maxWidth="lg">
                <Grid xs={12} sm={12}>
                  <Typography variant="h2" gutterBottom>
                  <span>02</span>
                  COLLABORATION
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                  </Typography>
                </Grid>
                </Container>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="last">
              <Container maxWidth="lg">
                <Grid xs={12} sm={12}>
                  <Typography variant="h2" gutterBottom>
                  <span>03</span>
                  GROWTH
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc
                  </Typography>
                </Grid>
                </Container>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}
