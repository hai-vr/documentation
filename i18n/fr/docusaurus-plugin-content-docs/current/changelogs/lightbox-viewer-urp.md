---
title: Lightbox Viewer URP
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 1.0.0-beta.4

- Changements de configuration des Adaptive Probe Volumes :
  - Fill empty spaces activé.
  - Dimensions des limites réduites.
  - Espacement modifié à 0,1 m.
- La scène a été re-cuite dans 6000.4.11f1.

## 1.0.0-beta.3

- Re-cuisson des sondes de réflexion de la scène URP Light Probe.
- Lightbox Viewer 2.5.0-beta.2 est désormais requis pour corriger un problème avec les Adaptive Probe Volumes URP dans les scènes additives qui rendait les prévisualisations lilToon 2.3.0 incorrectes.

## 1.0.0-beta.2

- Lightbox Viewer 2.5 est désormais requis.

## 1.0.0-beta.1

- Lightbox Viewer URP prend désormais en charge à la fois les Light Probes et les Adaptive Probe Volumes via deux scènes différentes chargées dynamiquement par Lightbox Viewer 2.5.

## 1.0.0-alpha.6

- Re-cuisson de la scène dans Unity 6.2.

## 1.0.0-alpha.5

- Correction : package.json spécifie désormais Unity 6.

## 1.0.0-alpha.4

- Requiert Lightbox Viewer 2.4.1-alpha.2 minimum.

## 1.0.0-alpha.3

- Requiert Lightbox Viewer 2.4.2-alpha.2 minimum.

## 1.0.0-alpha.2

- Correction : la taille de la boîte de la sonde de réflexion ne provoque plus de brillance (sheen).

## 1.0.0-alpha.2

- Début de l'ajout de la scène de lightbox URP avec APV :
  - Utilise les Adaptive Probe Volumes URP au lieu des light probes. Ne fonctionnera qu'avec les shaders prenant en charge les APV.
  - Poiyomi URP : à compter du 10/07/2025, ne fonctionnera qu'avec Poiyomi URP *070825* ou supérieur.
  - ~~lilToon URP : à compter du 10/07/2025, ne fonctionne pas encore avec lilToon URP.~~~
  - lilToon URP : à compter du 06/10/2025, les APV fonctionneront avec lilToon URP *2.3.0* ou supérieur.
