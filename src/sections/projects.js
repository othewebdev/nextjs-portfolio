/** @jsx jsx */
import AbacusCPA from "assets/projects/abacus.png";
import EVP from "assets/projects/EVP.png";
import LiveLook from "assets/projects/livelook.png";
import Lighthouse from "assets/projects/roofing.png";
import CleanCarpets from "assets/projects/cleaning.png";
import TruleyUnique from "assets/projects/store.png";
import MercyHealth from "assets/projects/mercy.png";
import Rooted from "assets/projects/rooted.png";
import ScuttleButt from "assets/projects/scuttlebutt.png";
import FeatureCard from "components/feature-card.js";
import SectionHeader from "components/section-header";
import { Container, Grid, jsx } from "theme-ui";

const data = [
  {
    id: 0,
    path: "https://www.babylonhealth.com/en-us",
    altText: "Babylon Health",
    title: "Babylon Health",
    text: "Maintained internal component library for UK based mobile health application.",
  },
  {
    id: 1,
    path: "https://amtrustofficesuites.com/",
    altText: "Amtrust Office Suites",
    title: "Amtrust Office Suites",
    text: "Developed and hosted website for real estate agency using WordPress.",
  },
  {
    id: 2,
    path: "https://www.texasmuseums360.org/",
    altText: "Texas Museums 360",
    title: "Texas Museums 360",
    text: "Created navigation and Front-End components for an internal student/teacher dashboard.",
  },
];

export default function Projects() {
  return (
    <section id="projects" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader slogan="What have I worked on?" title="My Portfolio" />
      </Container>
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCard
            key={item.id}
            alt={item.altText}
            title={item.title}
            path={item.path}
            text={item.text}
          />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],

    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
