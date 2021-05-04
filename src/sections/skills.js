/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import ReactJS from "assets/key-feature/reactjs.png";
import AWS from "assets/key-feature/aws.png";
import NextJS from "assets/key-feature/nextjs.png";
import Vercel from "assets/key-feature/vercel.png";

const data = [
  {
    id: 1,
    imgSrc: ReactJS,
    altText: "React",
    title: "React.JS",
    text:
      "React allows a painless experience to create reusable components for interactive front-end solutions.",
  },
  {
    id: 2,
    imgSrc: AWS,
    altText: "AWS",
    title: "AWS Services",
    text:
      "AWS Services help build sophisticated applications with increased flexibility, scalability and reliability.",
  },
  {
    id: 3,
    imgSrc: NextJS,
    altText: "NextJS",
    title: "NextJS",
    text:
      "NextJS provides hybrid static & server rendering, Typescript support, smart bundling, route pre-fetching and more.",
  },
  {
    id: 4,
    imgSrc: Vercel,
    altText: "Vercel",
    title: "Vercel",
    text:
      "Vercel allows fast and easy deployments for all frontend applications. It's easy to use and scalability is dynamic.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="What do I use?"
          title="My Dev Toolbox Contains"
        />
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
