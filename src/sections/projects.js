/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import LiveLook from "assets/projects/livelook.png";
import Rooted from "assets/projects/rooted.png";
import EVP from "assets/projects/EVP.png";
import ScuttleButt from "assets/projects/scuttlebutt.png";
import AbacusCPA from "assets/projects/abacus.png";
import TruleyUnique from "assets/projects/truleyunique.png";

const data = [
  {
    id: 1,
    imgSrc: LiveLook,
    path: "https://livelook.app/",
    altText: "LiveLook",
    title: "Live Look",
    text:
      "Live Look keeps publishers and journalists in contact. Allows effective communication between PR teams.",
  },
  {
    id: 2,
    imgSrc: Rooted,
    path: "https://www.rootedsuccess.com/",
    altText: "Rooted Success",
    title: "Rooted Success",
    text: "Created to support the future of equality and black success. ",
  },

  {
    id: 3,
    imgSrc: EVP,
    path: "https://www.evpulse.com/",
    altText: "EV Pulse",
    title: "EV Pulse",
    text:
      "EV fanatic blog covering the latest and greatest news in the electric vehicle space. ",
  },
  {
    id: 4,
    imgSrc: ScuttleButt,
    path: "https://www.greatlakesscuttlebutt.com/",
    altText: "Scuttlebutt",
    title: "Great Lakes Scuttlebutt",
    text:
      "Media application that strives to digitally unify the boating community.",
  },
  {
    id: 5,
    imgSrc: AbacusCPA,
    path: "https://www.abacuscpas.com/",
    altText: "Abacus CPA's",
    title: "Abacus CPA's",
    text: "Tax filing application with in-depth status tracking.",
  },
  {
    id: 7,
    imgSrc: TruleyUnique,
    path: "https://truleyunique.com/",
    altText: "Truley Unique",
    title: "Truley Unique",
    text:
      "Ecommerce site for face masks, shirts, earrings and other specialty items.",
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
