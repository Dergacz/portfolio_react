import React from 'react';
import { Header } from '../../components/Header/Header';
import { Project } from '../../components/Project/Project';
import * as constants from '../../constants/constants';

export const Portfolio = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="portfolio">
          <Header title="portfolio" subtitle="my work" />
          <div className="portfolio-projects">
            {constants.PROJECTS.map((project) => {
              return (
                <Project
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
      </div>
    </div>
  );
};
