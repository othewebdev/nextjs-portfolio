/** @jsx jsx */
import { keyframes } from "@emotion/core";
import LogoDark from "assets/logo.png";
import Logo from "components/logo";
import { useContext } from "react";
import { Link } from "react-scroll";
import { Button, Container, Flex, jsx, Link as NavLink } from "theme-ui";
import { MessageContext } from "utils/Context";
import menuItems from "./header.data";
import MobileDrawer from "./mobile-drawer";

export default function Header({ className }) {
  const [isEmailSent, setIsEmailSent] = useContext(MessageContext);

  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              smooth={true}
              offset={-50}
              duration={500}
              key={i}
              spy={true}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        <NavLink
          target="_blank"
          href="https://drive.google.com/file/d/1cbNHvIRUIHCNfNjXyumgDOJK4fDygESI/view"
        >
          <Button variant="secondaryResume">View Resume</Button>
        </NavLink>
        <MobileDrawer></MobileDrawer>
      </Container>
      {isEmailSent && (
        <Container sx={styles.messageContainer}>
          <h3>Message Sent!</h3>
        </Container>
      )}
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#cdf1f5",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
