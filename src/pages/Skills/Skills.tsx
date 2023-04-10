import React from 'react';
import { Header } from '../../components/Header/Header';
import { Skill } from '../../components/Skill/Skill';
import * as constants from '../../constants/constants';
import { IconContext } from 'react-icons';

export const Skills = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="skills" id="whatIdo">
          <Header title="services" subtitle="what I do" />
          <IconContext.Provider value={{ size: '40px', color: '#20c997' }}>
            <div className="skills-wrapper">
              {constants.SKILLS_ITEMS.map((skill) => {
                return (
                  <Skill
                    title={skill.title}
                    description={skill.description}
                    icon={skill.icon}
                  />
                );
              })}
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
