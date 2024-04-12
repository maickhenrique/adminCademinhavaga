// project-imports
import Hero from 'sections/landing/Header';
import Technologies from 'sections/landing/Technologies';
import Combo from 'sections/landing/Combo';
import Apps from 'sections/landing/Apps';
// import Testimonial from 'sections/landing/Testimonial';
// import Partner from 'sections/landing/Partner';
// import ContactUs from 'sections/landing/ContactUs';
import Header from 'layout/CommonLayout/Header';
import FooterBlock from 'layout/CommonLayout/FooterBlock';

// ==============================|| SAMPLE PAGE ||============================== //

const Landing = () => {
  return (
    <>
    <Header />
      <Hero />
      <Technologies />
      <Combo />
      <Apps />
      {/* <Testimonial /> */}
      {/* <Partner /> */}
      {/* <ContactUs /> */}
      <FooterBlock />
    </>
  );
};

export default Landing;
