import React, { FC } from 'react';

export interface IProject {
  title: string;
  image: any;
  description: string;
  gitHubLink: string;
  previewLink: string;
}

export const Project: FC<IProject> = ({
  gitHubLink,
  image,
  previewLink,
  title,
  description,
}) => {
  return (
    <div className="project" style={image}>
      <div className="project-curtain">
        <div className="project-details">
          <div>
            <p className="project-title">{title}</p>
            <p className="project-description">{description}</p>
          </div>

          <div className="project-links">
            <div>
              <span className="project-links-title">gitHub: </span>
              <a className="project-links-link" href={gitHubLink} target="_blank" rel="noreferrer">
                {gitHubLink}
              </a>
            </div>
            <div>
              <span className="project-links-title">demo: </span>
              <a className="project-links-link" href={previewLink} target="_blank" rel="noreferrer">
                {previewLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
