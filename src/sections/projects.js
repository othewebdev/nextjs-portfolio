/** @jsx jsx */
import AbacusCPA from "assets/projects/abacus.png";
import EVP from "assets/projects/EVP.png";
import LiveLook from "assets/projects/livelook.png";
import MercyHealth from "assets/projects/mercy.png";
import Rooted from "assets/projects/rooted.png";
import ScuttleButt from "assets/projects/scuttlebutt.png";
import FeatureCard from "components/feature-card.js";
import SectionHeader from "components/section-header";
import { Container, Grid, jsx } from "theme-ui";

const data = [
  {
    id: 1,
    imgSrc: LiveLook,
    path: "https://livelook.app/",
    altText: "LiveLook",
    title: "Live Look",
    text: "PR Firm Database Tool.",
  },
  {
    id: 2,
    imgSrc: Rooted,
    path: "https://www.rootedsuccess.com/",
    altText: "Rooted Success",
    title: "Rooted Success",
    text: "Black-owned Business Directory.",
  },

  {
    id: 3,
    imgSrc: EVP,
    path: "https://www.evpulse.com/",
    altText: "EV Pulse",
    title: "EV Pulse",
    text: "Electric Vehicle News Website.",
  },
  {
    id: 4,
    imgSrc: ScuttleButt,
    path: "https://www.greatlakesscuttlebutt.com/",
    altText: "Scuttlebutt",
    title: "Great Lakes Scuttlebutt",
    text: "Boating Social Media.",
  },
  {
    id: 5,
    imgSrc: AbacusCPA,
    path: "https://www.abacuscpas.com/",
    altText: "Abacus CPAs",
    title: "Abacus CPAs",
    text: "Tax Status Tracking App.",
  },
  {
    id: 6,
    imgSrc: MercyHealth,
    path: "https://www.mercy.com/",
    altText: "Mercy Health",
    title: "Mercy Health",
    text: "Infection Prevention Tool for Hospital",
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
            src={item.imgSrc}
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
