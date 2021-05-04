/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link } from "components/link";
import data from "./footer.data";
import FooterLogo from "assets/logo.png";
import Socials from "components/socials";

export default function Footer() {
  return (
    <section sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Box sx={styles.footer.logo}>
            <Link path="/">
              <Image src={FooterLogo} />
            </Link>
          </Box>
          <Box sx={styles.footer.container}>
            <Socials />
          </Box>
          <Box sx={styles.footer.menus}>
            <Text sx={styles.footer.copyright}>
              Copyright © {new Date().getFullYear()} Odis Barnett.
            </Text>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    container: {
      width: "150px",
      m: "auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      mt: "16px",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
    logo: {
      alignSelf: "center",
      width: "200px",
    },
  },
};
