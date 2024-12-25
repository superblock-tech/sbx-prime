// import { useRef } from "react";
import Header from "../../components/header";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Investment from "./Investment";
import Security from "./Security";
import ContactForm from "./ContactForm";
import AskQuestion from "./AskQuestion";
import { Footer } from "../../components/footer";
import OurPartners from "./OurPartners/index.jsx";

const Home = () => {
  // const scrollContainer = useRef(null);

  return (
    <>
      <Header />
      <HeroSection />
      <OurPartners />
      <Features />
      <Investment />
      <Security />
      <ContactForm />
      <AskQuestion />
      <Footer />
    </>
  );
};

export default Home;
