/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import { Link } from "react-scroll";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading variant="heroPrimary" as="h1">
            I Develop{" "}
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Websites")
                  .pauseFor(5000)
                  .deleteAll()
                  .typeString("Mobile Apps")
                  .pauseFor(5000)
                  .deleteAll()
                  .typeString("Software")
                  .pauseFor(5000)
                  .deleteAll()
                  .start();
              }}
            />
          </Heading>
          <Link to="projects">
            <Button variant="secondary">View Portfolio</Button>
          </Link>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Link to="https://www.rootedsuccess.com/">
            <Image src={BannerImg} alt="banner" />
          </Link>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "150px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "24%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "24%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
