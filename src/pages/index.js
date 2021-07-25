import Layout from "components/layout";
import SEO from "components/seo";
import React from "react";
import theme from "theme";
import { ThemeProvider } from "theme-ui";
import Banner from "../sections/banner";
import Projects from "../sections/projects";
import DevToolbox from "../sections/skills";
import Contact from "../sections/contact";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Odis Barnett | Portfolio" />
        <Banner />
        <DevToolbox />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
