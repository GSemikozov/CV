import React from 'react';

import { Box } from '../components/box';
import { Container } from '../components/container';
import { Education } from '../components/education';
import { Experience } from '../components/experience';
import { Layout } from '../components/layout';
import { Portfolio } from '../components/portfolio';
import { Profile } from '../components/profile';
import { Section } from '../components/section';
import { SectionTitle } from '../components/section-title';
import SEO from '../components/seo';
import { Skills } from '../components/skills';

export default () => (
  <Layout>
    <SEO title="Herman Semykozov | CV" />
    <Container>
      <Section id="about">
        <Profile />
      </Section>
      <Section id="skills">
        <SectionTitle title="Professional skills" />
        <Box>
          <Skills />
        </Box>
      </Section>
      <Section id="portfolio">
        <SectionTitle title="Portfolio links" />
        <Portfolio />
      </Section>
      <Section id="experience">
        <SectionTitle title="Experience & Projects" />
        <Experience />
      </Section>
      <Section id="education">
        <SectionTitle title="Education" />
        <Box>
          <Education />
        </Box>
      </Section>
    </Container>
  </Layout>
)
