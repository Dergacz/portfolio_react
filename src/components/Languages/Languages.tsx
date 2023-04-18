import React, { FC, useState } from 'react';
import i18n from 'i18next';
import * as constants from '../../constants/constants';
import { ILanguages } from './Languages.types';

export const Languages: FC<ILanguages> = ({ isSelectOpen }) => {
  const [selectLanguage, setsSelectLanguage] = useState<string>(
    constants.EN_LANGUAGE
  );

  const changeLanguage = (language: string) => {
    if (language === constants.EN_LANGUAGE) {
      i18n.changeLanguage(constants.EN_LANGUAGE);
      setsSelectLanguage(constants.EN_LANGUAGE);
    } else {
      i18n.changeLanguage(constants.PL_LANGUAGE);
      setsSelectLanguage(constants.PL_LANGUAGE);
    }
  };
  return (
    <>
      {!isSelectOpen && (
        <ul className="languages">
          {constants.LANGUAGES.map((language) => {
            return (
              <li className="languages-item">
                <span
                  className={`languages-link ${
                    selectLanguage === language ? 'languages-link-active' : ''
                  }`}
                  onClick={() => changeLanguage(language)}
                >
                  {language}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
