import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { Box, Link } from "theme-ui";

const social = [
  {
    path: "https://www.linkedin.com/in/othewebdev/",
    icon: <FaLinkedin />,
  },
  {
    path: "https://github.com/othewebdev",
    icon: <FaGithubAlt />,
  },
];
export default function Socials() {
  return social.map((socialItem, i) => (
    <Box sx={styles.social}>
      <Box key={i} sx={styles.social.icon} as="span">
        <Link sx={styles.social.link} target="_blank" href={socialItem.path}>
          {socialItem.icon}
        </Link>
      </Box>
    </Box>
  ));
}

const styles = {
  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    link: {
      color: "#fff",
      "&:hover": {
        color: "secondary",
      },
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 32,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },
};
