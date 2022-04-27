import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .about__img {
    max-width: 900px;
    width: 100%;
    height: 575px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0rem 0;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle subheading="" heading="Over Mij" />
          <PText>
            Ik ben een jonge dynamische software developer. Ik werk altijd met
            veel enthousiasme en perfectionisme om een project tot een goed
            einde te brengen. Management, communicatie, teamwork en leiderschap
            zijn enkele van mijn sterke punten.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Projects" btnLink="/projects" />
            <Button btnText="Lees meer" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="about__img" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
