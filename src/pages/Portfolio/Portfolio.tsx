import React from 'react';
import { Header } from '../../components/Header/Header';
import { Project } from '../../components/Project/Project';
import * as constants from '../../constants/constants';
import { Zoom } from 'react-awesome-reveal';

export const Portfolio = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Zoom cascade triggerOnce>
          <div className="portfolio" id="portfolio">
            <Header title="portfolio.header.title" subtitle="portfolio.header.subtitle" />
            <div className="portfolio-projects">
              {constants.PROJECTS.map((project) => {
                return (
                  <Project
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    gitHubLink={project.gitHub}
                    previewLink={project.demo}
                  />
                );
              })}
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
