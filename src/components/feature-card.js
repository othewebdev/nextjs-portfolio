/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";

export default function FeatureCard({ title, text, path }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <a target="_blank" href={path}>
          <Heading sx={styles.wrapper.title}>{title}</Heading>
        </a>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    mb: -1,
    margin: "auto",
    width: "50%",
    "@media screen and (max-width: 1336px)": {
      width: "80%",
    },
    "@media screen and (max-width: 1024px)": {
      width: "100%",
    },
  },

  img: {
    width: ["70px", null, null, "80px", "90px", "auto"],
    height: "auto",
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [2, 3],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ["10px", null, "15px"],
    },
    subTitle: {
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};
