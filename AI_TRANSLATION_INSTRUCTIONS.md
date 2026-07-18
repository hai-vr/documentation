The contents of this AI_TRANSLATION_INSTRUCTIONS.md file are complementary instructions to follow when you are instructed to translate an English manual page to another language:

- The manual in English is authoritative. The other languages must be translated using the English version as the source of truth.
- When there are JSON files alongside the English manual page, those are the JSON localization files used by the actual application that
  the manual is about. Therefore, when translating, make sure that the terms used by the translated manual match the terms used by the JSON files.
- The JSON files are copied manually from the actual application and must never be modified by the AI.
- If a picture ends with _en, such as something_en.png, and there exists an equivalent picture in another language, then use that equivalent picture.
- Keep in mind Docusaurus uses zh-Hans to represent Simplified Chinese but the JSON file and the pictures use zh-ch; this is normal.
- Keep in mind Docusaurus uses zh-Hant to represent Traditional Chinese but the JSON file and the pictures use zh-tw; this is normal.
- There is no need to put the English names in parentheses.
- In most of the applications that our manuals are about, "Model" refers to a 3D model.
- When translating to Japanese, the word "Prefab" should be written as プレハブ
