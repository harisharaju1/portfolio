import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { Layout, MainContainer } from "../ui";

function LandingPage() {
  return (
    <MainContainer>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </MainContainer>
  );
}

export default LandingPage;
