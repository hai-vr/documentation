import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HaiIcon } from '../HaiIcon';

interface Props {
  languages: string[];
  children?: React.ReactNode;
}

const languageNames: Record<string, string> = {
  en: 'English',
  ja: '日本語',
  fr: 'Français',
  ko: '한국어',
  'zh-Hant': '繁體中文',
  'zh-Hans': '简体中文',
};

const languageIcons: Record<string, string> = {
  en: 'uk',
  ja: 'jp',
};

const availablePhrases: Record<string, string> = {
  en: 'This page is available in English',
  ja: 'このページは日本語でご覧いただけます',
  fr: 'Cette page est disponible en français',
  ko: '이 페이지는 한국어로 제공됩니다',
  'zh-Hant': '本頁面有繁體中文版本',
  'zh-Hans': '本页面有简体中文版本',
};

export default function HaiLocalization({ languages, children }: Props): JSX.Element {
  const { pathname } = useLocation();
  const { siteConfig, i18n } = useDocusaurusContext();
  const { defaultLocale, currentLocale } = i18n;
  const { baseUrl } = siteConfig;

  const targetLanguages = languages.filter((lang) => lang !== currentLocale);

  const getLocalizedPath = (targetLocale: string) => {
    // 1. Get the path relative to baseUrl
    let relativePath = pathname.startsWith(baseUrl)
      ? pathname.substring(baseUrl.length)
      : pathname;

    // Ensure no leading slash in relativePath for splitting
    if (relativePath.startsWith('/')) {
      relativePath = relativePath.substring(1);
    }

    const pathParts = relativePath.split('/');

    // 2. Identify if the first part is a non-default locale
    if (currentLocale !== defaultLocale && pathParts[0] === currentLocale) {
      pathParts.shift();
    }

    // 3. Construct the new path
    const newPathParts = [...pathParts];
    if (targetLocale !== defaultLocale) {
      newPathParts.unshift(targetLocale);
    }

    const newRelativePath = newPathParts.join('/');

    return "/" + newRelativePath;
  };

  if (targetLanguages.length === 0) {
    return null;
  }

  return (
    <div className="alert alert--secondary margin-bottom--md" role="alert" data-nosnippet>
      <div className="admonition-content">
        <ul className="margin-bottom--none">
          {targetLanguages.map((lang) => (
            <li key={lang}>
              {languageIcons[lang] && <HaiIcon name={languageIcons[lang]} />}
              {availablePhrases[lang] || `This page is available in ${lang}`}:{' '}
              <a href={getLocalizedPath(lang)}>{languageNames[lang] || lang}</a>
            </li>
          ))}
        </ul>
        {children && <div className="margin-top--md">{children}</div>}
      </div>
    </div>
  );
}