import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="Wat ik kan doen voor jou"
          heading="Services"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web dev"
            desc="Ik creëer moderne en gebruiksvriendelijke websites. Mijn skills omvatten zowel de front-end als de back-end."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="software dev"
            desc="Ik ontwikkel ook desktop applicaties. Tijdens mijn opleiding heb ik kennis gemaakt met heel wat programmeertalen."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app dev"
            desc="Verder develop ik ook mobiele apps. Deze zijn cross platform, dus zowel voor Android als iOS."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
