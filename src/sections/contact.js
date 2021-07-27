/** @jsx jsx */
import ArrowEven from "assets/arrowEven.svg";
import ArrowOdd from "assets/arrowOdd.svg";
import PatternBG from "assets/patternBG.png";
import SectionHeader from "components/section-header";
import emailjs from "emailjs-com";
import { useContext } from "react";
import { Container, jsx, Button } from "theme-ui";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MessageContext } from "utils/Context";

export default function Contact() {
  const [isEmailSent, setIsEmailSent] = useContext(MessageContext);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const sendMessage = () => {
    setIsEmailSent(true);
    setTimeout(() => {
      setIsEmailSent(false);
    }, 3000);
  };

  return (
    <section id="contact" sx={styles.workflow}>
      <Container sx={styles.messageContainer} />
      <Container>
        <SectionHeader
          isWhite={true}
          slogan="Want to connect?"
          title="Contact Me"
        />
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            })
              .then(() => {
                console.log("Success");
                actions.resetForm();
              })
              .catch(() => {
                console.log("Error");
              })
              .finally(() => actions.setSubmitting(false));
          }}
          validate={(values) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.name) {
              errors.name = "* Name Required";
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "* Valid Email Required";
            }
            if (!values.message) {
              errors.message = "* Message Required";
            }
            return errors;
          }}
        >
          <Form name="contact" sx={styles.formContainer} data-netlify={true}>
            <label htmlFor="name" sx={styles.formLabel}>
              Name:{" "}
            </label>
            <Field name="name" sx={styles.formInput} />
            <div sx={styles.errorLabel}>
              <ErrorMessage name="name" sx={styles.errorLabel} />
            </div>
            <label htmlFor="email" sx={styles.formLabel}>
              Email:{" "}
            </label>
            <Field name="email" sx={styles.formInput} />
            <div sx={styles.errorLabel}>
              <ErrorMessage name="email" />
            </div>
            <label htmlFor="message" sx={styles.formLabel}>
              Message:{" "}
            </label>
            <Field
              name="message"
              component="textarea"
              sx={styles.formTextarea}
            />
            <div sx={styles.errorLabel}>
              <ErrorMessage name="message" sx={styles.errorLabel} />
            </div>
            <Button
              type="submit"
              onClick={() => sendMessage()}
              sx={styles.submitButton}
            >
              Send
            </Button>
          </Form>
        </Formik>
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
    width: "265px",
    height: "50px",
    my: "12px",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "#ffffff",
  },
  submitButton: {
    width: "265px",
    height: "50px",
    border: "1px solid white",
    color: "white",
    my: "20px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "white",
      color: "primary",
    },
  },
  formTextarea: {
    width: "265px",
    height: "150px",
    color: "#ffffff",
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "transparent",
    resize: "none",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    display: "flex",
    zIndex: 99,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  formLabel: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  errorLabel: {
    fontWeight: "700",
    color: "#ff0000",
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
