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
};

const languageIcons: Record<string, string> = {
  en: 'uk',
  ja: 'jp',
};

const availablePhrases: Record<string, string> = {
  en: 'This page is available in English',
  ja: 'このページは日本語でご覧いただけます',
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
        {targetLanguages.map((lang) => (
          <p key={lang} className="margin-bottom--none">
            {languageIcons[lang] && <HaiIcon name={languageIcons[lang]} />}
            {availablePhrases[lang] || `This page is available in ${lang}`}:{' '}
            <a href={getLocalizedPath(lang)}>{languageNames[lang] || lang}</a>
          </p>
        ))}
        {children && <div className="margin-top--md">{children}</div>}
      </div>
    </div>
  );
}