import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container text>
    <iframe height="416" width="624" src="http://static.arcadespot.com/embed/medabots-metabee-version/" border="0" frameborder="0" scrolling="no"></iframe>
      <h1>Batteries</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
        texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A
        small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
        paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing
        has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to
        do so, because there were thousands.
      </p>
    </Container>
    <Footer />
  </div>
);

export default About;
