/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import ReactJS from "assets/key-feature/reactjs.png";
import ReactNative from "assets/key-feature/reactnative.png";
import HTML5 from "assets/key-feature/html5.png";
import CSS3 from "assets/key-feature/css3.png";
import JavaScript from "assets/key-feature/js.png";
import AWS from "assets/key-feature/aws.png";
import NextJS from "assets/key-feature/nextjs.png";
import Vercel from "assets/key-feature/vercel.png";
import Netlify from "assets/key-feature/netlify.png";
import NodeJS from "assets/key-feature/nodejs.png";
import Yarn from "assets/key-feature/yarn.png";
import Wordpress from "assets/key-feature/wordpress.png";

const data = [
  {
    id: 1,
    imgSrc: HTML5,
    altText: "HTML",
    title: "HTML5",
    text: "The most popular markup language for building websites.",
  },
  {
    id: 2,
    imgSrc: CSS3,
    altText: "CSS",
    title: "CSS3",
    text:
      "Styling sheet language that describes the look of a markup language document.",
  },
  {
    id: 3,
    imgSrc: JavaScript,
    altText: "Javascript",
    title: "JavaScript",
    text:
      "ECMAScript programming language used for websites and software applications.",
  },
  {
    id: 4,
    imgSrc: ReactJS,
    altText: "React",
    title: "React.JS",
    text: "A JavaScript library for building user interfaces.",
  },
  {
    id: 5,
    imgSrc: ReactNative,
    altText: "React Native",
    title: "React Native",
    text: "Used to create native apps for Android and iOS using React.",
  },
  {
    id: 6,
    imgSrc: AWS,
    altText: "AWS",
    title: "AWS Services",
    text:
      "AWS Services help build sophisticated applications with increased flexibility, scalability and reliability.",
  },
  {
    id: 7,
    imgSrc: NextJS,
    altText: "NextJS",
    title: "NextJS",
    text:
      "NextJS provides hybrid static & server rendering, Typescript support, smart bundling, route pre-fetching and more.",
  },
  {
    id: 8,
    imgSrc: Vercel,
    altText: "Vercel",
    title: "Vercel",
    text:
      "Vercel allows fast and easy deployments for all frontend applications. It's easy to use and scalability is dynamic.",
  },
  {
    id: 9,
    imgSrc: Netlify,
    altText: "Netlify",
    title: "Netlify",
    text:
      "An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps",
  },
  {
    id: 10,
    imgSrc: NodeJS,
    altText: "NodeJS",
    title: "NodeJS",
    text:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    id: 11,
    imgSrc: Yarn,
    altText: "Yarn",
    title: "Yarn",
    text: "Yarn is a package manager that doubles down as project manager.",
  },
  {
    id: 12,
    imgSrc: Wordpress,
    altText: "WordPress",
    title: "WordPress",
    text: "A very popular website building platform",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader slogan="What do I use?" title="My Skills" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",

    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
