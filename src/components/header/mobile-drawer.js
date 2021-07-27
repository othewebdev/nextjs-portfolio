import Drawer from "components/drawer";
import Socials from "components/socials";
import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import { Box, Button, Link as NavLink } from "theme-ui";
import menuItems from "./header.data";

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="32px" />
        </Box>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prevState) => !prevState)}
      closeButton={<IoMdClose size="32px" color="#1ec2ba" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((menuItem, i) => (
              <Link
                activeClass="active"
                to={menuItem.path}
                onClick={() => setIsDrawerOpen((prevState) => !prevState)}
                smooth={true}
                offset={-50}
                duration={500}
                key={i}
                spy={true}
              >
                {menuItem.label}
              </Link>
            ))}
          </Box>
          <NavLink
            target="_blank"
            href="https://drive.google.com/file/d/1cbNHvIRUIHCNfNjXyumgDOJK4fDygESI/view"
          >
            <Button variant="triaryResume">View Resume</Button>
          </NavLink>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              <Socials />
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
}

const styles = {
  handler: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#111111",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        color: "secondary",
      },
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};
