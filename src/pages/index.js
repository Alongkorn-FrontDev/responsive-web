import Image from "next/image";
import React, { useEffect } from 'react';
import { Inter } from "next/font/google";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Slider from '../../components/card/slideCard';
import SliderBottom from '../../components/card/slideBottomCard';

const inter = Inter({ subsets: ["latin"] });

export default function Home({ imageFootballer, imageBastketball }) {

  return (
    <>
      <Container maxWidth={false} className="home-page">
        <Box sx={{ flexGrow: 1 }}>
          {/* Begin Bottom Section */}
          <Grid container spacing={4} className="top-section">
            <Box className="first">
              <Container maxWidth="lg">
                <Grid xs={12} sm={12} order={{xs: 3, sm: 1, lg: 1 }}>
                  <Box className="image-box">
                    <Image
                        src={imageFootballer}
                        width={670}
                        height={950}
                        alt="Picture of the author"
                        className="image-responsive"
                        priority
                    />
                  </Box>
                </Grid>
                <Grid xs={12} xsOffset={0} sm={6} smOffset={6} lg={6} lgOffset={6} order={{xs: 1, sm: 2, lg: 2 }}>
                  <Typography variant="h1" gutterBottom>
                    ATHLETS
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Box className="second" sx={{ display: {xs: "none", sm: "block", lg: "block"}}}>
              <Container maxWidth="lg">
                <Grid xs={12} xsOffset={0} sm={6} smOffset={6} lg={6} lgOffset={6}> 
                    <Typography variant="h2" gutterBottom>
                      <span>01</span>
                      CONNECTION
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Connect with coaches directly, you can ping coaches to view
                      profile.
                    </Typography>
                  </Grid>
              </Container>
            </Box>
            <Box className="third" sx={{ display: {xs: "none", sm: "block", lg: "block"}}}>
              <Container maxWidth="lg">
                <Grid xs={12} xsOffset={0} sm={6} smOffset={6} lg={6} lgOffset={6}>
                  <Typography variant="h2" gutterBottom>
                  <span>02</span>
                    COLLABORATION
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Work with other student athletes to  increase visability. When
                    you share and like other players videos it will increase your
                    visability as a player. This is the team work aspect to
                    Surface 1.
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Box className="last" sx={{ display: {xs: "none", sm: "block", lg: "block"}}}>
              <Container maxWidth="lg">
                <Grid xs={12} xsOffset={0} sm={6} smOffset={6} lg={6} lgOffset={6}>
                  <Typography variant="h2" gutterBottom>
                  <span>03</span>
                    GROWTH
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Resources and tools for you to get better as a student
                    Athelte. Access to training classes, tutor sessions, etc
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Grid xs={12} sm={12} className="slide-mobile">
              {/* Begin Slide On Mobile Responsive */}
              <Slider></Slider>
              {/* End Slide On Mobile Responsive */}
            </Grid>
          </Grid>
           {/* End Top Section */}
          {/* Begin Bottom Section */}
          <Grid container spacing={4} className="bottom-section">
            <Box className="first">
              <Container maxWidth="lg">
                <Grid className="grid-image" xs={12} sm={12} md={12} lg={12} order={{xs: 2, sm: 1, lg: 1 }}>
                  <Box className="image-box">
                    <Image
                        src={imageBastketball}
                        width={670}
                        height={950}
                        alt="Picture of the author"
                        className="image-responsive"
                    />
                  </Box>
                </Grid>
                <Grid xs={12} xsOffset={0} sm={6} smOffset={0} lg={6} lgOffset={0} order={{xs: 1, sm: 2, lg: 2 }}>
                  <Typography variant="h1" gutterBottom>
                  PLAYERS
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Box className="second" sx={{ display: {xs: "none", sm: "block", lg: "block"}}}>
              <Container maxWidth="lg">
                <Grid xs={12} xsOffset={0} sm={6} smOffset={0} lg={6} lgOffset={0}> 
                    <Typography variant="h2" gutterBottom>
                      <span>01</span>
                      CONNECTION
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                    Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                    </Typography>
                  </Grid>
              </Container>
            </Box>
            <Box className="third" sx={{ display: {xs: "none", sm: "block", lg: "block"}}}>
              <Container maxWidth="lg">
                <Grid xs={12} xsOffset={0} sm={6} smOffset={0} lg={6} lgOffset={0}>
                  <Typography variant="h2" gutterBottom>
                    <span>02</span>
                    COLLABORATION
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                  Work with recruiter to increase your chances of finding talented athlete.
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Box className="last" sx={{ display: {xs: "none", sm: "block", lg: "block"}}}>
              <Container maxWidth="lg">
                <Grid xs={12} xsOffset={0} sm={6} smOffset={0} lg={6} lgOffset={0}>
                  <Typography variant="h2" gutterBottom>
                    <span>03</span>
                    GROWTH
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                  Save your time, recruit proper athlets for your team.
                  </Typography>
                </Grid>
              </Container>
            </Box>
            <Grid xs={12} sm={12} className="slide-mobile">
              {/* Begin Slide On Mobile Responsive */}
              <SliderBottom></SliderBottom>
              {/* End Slide On Mobile Responsive */}
            </Grid>
          </Grid>
          {/* End Bottom Section */}
        </Box>
      </Container>
    </>
  );
}

export async function getServerSideProps() {

  const imageFootballer = "/images/footballer.png"
  const imageBastketball = "/images/bastketball.png"

  return {
    props: {
      imageFootballer,
      imageBastketball
    },
  };
}
