import React, { FC } from 'react';

export interface ISkill {
  title: string;
  description: string;
  icon: any;
}

export const Skill: FC<ISkill> = ({ icon, title, description }) => {
  return (
    <div className="skill">
      <div className="skill-image-wrapper">{icon}</div>
      <div className="skill-description">
        <h4 className="skill-description-title">{title}</h4>
        <p className="skill-description-text">{description}</p>
      </div>
    </div>
  );
};
