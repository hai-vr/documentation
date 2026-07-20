import React from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HaiIcon } from '../HaiIcon';

interface Props {
  languages: string[];
  applicationIsLocalized?: boolean;
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

const aiDisclaimer: Record<string, string> = {
  en: 'Translations to non-English languages are provided by Gemini 3 Flash.',
  ja: '英語以外の言語への翻訳はGemini 3 Flashによって提供されています。',
  fr: 'Les traductions vers des langues autres que l\'anglais sont fournies par Gemini 3 Flash.',
  ko: '영어 이외의 언어 번역은 Gemini 3 Flash에서 제공합니다.',
  'zh-Hant': '非英語語言的翻譯由 Gemini 3 Flash 提供。',
  'zh-Hans': '非英语语言的翻译由 Gemini 3 Flash 提供。',
};

const aiLocalizationDisclaimer: Record<string, string> = {
  en: 'Additionally, the localization files used by the application are provided to the large language model as additional context for the translation of this user manual.',
  ja: 'また、アプリケーションで使用されているローカライズファイルが、このユーザーマニュアルの翻訳のための追加のコンテキストとして大規模言語モデルに提供されています。',
  fr: 'De plus, les fichiers de localisation utilisés par l\'application sont fournis au modèle de langage étendu en tant que contexte supplémentaire pour la traduction de ce manuel d\'utilisation.',
  ko: '또한, 애플리케이션에서 사용하는 로컬라이제이션 파일이 이 사용자 매뉴얼의 번역을 위한 추가 컨텍스트로 대규모 언어 모델에 제공됩니다.',
  'zh-Hant': '此外，應用程式所使用的在地化檔案也作為此使用者手冊翻譯的補充內容提供給大型語言模型。',
  'zh-Hans': '此外，应用程序所使用的本地化文件也作为此用户手册翻译的补充内容提供给大型语言模型。',
};

export default function HaiLocalization({ languages, applicationIsLocalized, children }: Props): JSX.Element {
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
            <li lang={lang} key={lang}>
              {languageIcons[lang] && <HaiIcon name={languageIcons[lang]} />}
              {availablePhrases[lang] || `This page is available in ${lang}`}:{' '}
              <a href={getLocalizedPath(lang)}>{languageNames[lang] || lang}</a>
            </li>
          ))}
        </ul>
        {aiDisclaimer[currentLocale] && (
          <div className="margin-top--sm" style={{ fontSize: '0.75em', opacity: 0.8 }}>
            {aiDisclaimer[currentLocale]}
            {applicationIsLocalized && aiLocalizationDisclaimer[currentLocale] && (
              <> {aiLocalizationDisclaimer[currentLocale]}</>
            )}
          </div>
        )}
        {children && <div className="margin-top--md">{children}</div>}
      </div>
    </div>
  );
}