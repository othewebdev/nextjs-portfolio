/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Label, Input, Textarea, Box, Button } from "theme-ui";
import SectionHeader from "components/section-header";
import emailjs from "emailjs-com";
import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";

const data = [
  {
    id: 1,
    title: "Set disbursement Instructions",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    title: "Assembly retrieves funds from your account",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    text:
      "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ax81pyn",
        "template_0shp0wo",
        e.target,
        "user_FD9iHhnkhZkM9OQUNF7io"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section id="contact" sx={styles.workflow}>
      <Container>
        <SectionHeader
          isWhite={true}
          slogan="Want to connect?"
          title="Contact Me"
        />
        <Box as="form" onSubmit={sendEmail}>
          <Container sx={styles.formContainer}>
            <Label sx={styles.formLabel}>Name</Label>
            <input name="name" sx={styles.formInput} />
            <Label sx={styles.formLabel}>Email </Label>
            <input name="email" sx={styles.formInput} />
            <Label sx={styles.formLabel}>Subject </Label>
            <input name="subject" sx={styles.formInput} />
            <Label sx={styles.formLabel}>Message </Label>
            <textarea name="message" sx={styles.formTextarea} />
            <Button type="submit" sx={styles.submitButton}>
              Send Message
            </Button>
          </Container>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },
  formInput: {
    width: "300px",
    height: "50px",
    my: "12px",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "#ffffff",
  },
  submitButton: {
    width: "300px",
    height: "50px",
    border: "1px solid white",
    color: "white",
    my: "20px",
    borderRadius: "5px",
  },
  formTextarea: {
    width: "300px",
    height: "150px",
    border: "1px solid white",
    backgroundColor: "transparent",
    resize: "none",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formLabel: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
