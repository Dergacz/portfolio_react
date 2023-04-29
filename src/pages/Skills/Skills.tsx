import React from 'react';
import { Header } from '../../components/Header/Header';
import { Skill } from '../../components/Skill/Skill';
import * as constants from '../../constants/constants';
import { IconContext } from 'react-icons';
import { Zoom } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="container">
        <Zoom cascade triggerOnce>
          <div className="skills" id="whatIdo">
            <Header
              title="skills.header.title"
              subtitle="skills.header.subtitle"
            />
            <IconContext.Provider value={{ size: '40px', color: '#20c997' }}>
              <div className="skills-wrapper">
                {constants.SKILLS_ITEMS.map((skill) => {
                  return (
                    <Skill
                      key={skill.title}
                      title={t(`skills.skill.${skill.title}.title`)}
                      description={t(`skills.skill.${skill.title}.description`)}
                      icon={skill.icon}
                    />
                  );
                })}
              </div>
            </IconContext.Provider>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
