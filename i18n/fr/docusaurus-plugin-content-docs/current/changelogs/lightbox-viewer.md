---
title: Lightbox Viewer
---

import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 2.5.0-beta.4

Ajout d'une option pour forcer l'anticrénelage. Cela peut être utile dans certaines configurations de projets autonomes (par exemple, les projets Basis Framework).

## 2.5.0-beta.3

En mode Édition, masquez les objets qui sont masqués par l'icône de visibilité dans l'onglet de la hiérarchie de la scène.

Correction : les événements de changement d'objet ne devraient plus se déclencher en mode Play, ce qui causait des erreurs dans les journaux.

## 2.5.0-beta.2

Correction d'un problème avec les URP Adaptive Probe Volumes dans les scènes additives qui rendait les aperçus lilToon 2.3.0 incorrects.

- Correction des données d'éclairage par défaut qui affectaient négativement les Adaptive Probe Volumes dans les scènes additives :
  - Les scènes par défaut ont un asset de données d'éclairage par défaut qui leur est assigné.
  - Ces données d'éclairage par défaut font que le rendu semble différent, ce qui est particulièrement visible sur lilToon 2.3.0.
  - Correction en vérifiant si la scène utilise actuellement les données d'éclairage par défaut. Si c'est le cas, elles sont mises à null pendant la durée de l'utilisation de la lightbox.
  - Cela devrait corriger https://github.com/hai-vr/lightbox-viewer-urp/issues/1 dans Lightbox Viewer URP.

## 2.5.0-beta.1

Lightbox Viewer est désormais compatible avec :
- BIRP Light Probes.
- BIRP VRCLV.
- URP Adaptive Probe Volumes.
- URP Light Probes.

Ajout du support pour les URP Light Probes :
- Si URP est le pipeline de rendu actuel, basculez vers une scène différente si les paramètres de Qualité utilisent des Light Probes au lieu des Adaptive Probe Volumes.
- Si URP est présent dans le projet, détectez quand les paramètres de Qualité changent.

Contrairement à ce qui a été suggéré dans les versions alpha précédentes, ce n'est toujours pas compatible avec macOS, car la tentative de compatibilité a échoué.

Anciens journaux de modifications des versions alpha répétés par ordre chronologique, sans les modifications macOS :

*De la version 2.4.1-alpha.1 :*

- Changement de stratégie du mode Édition pour la performance :
    - Auparavant, le mode Édition copiait l'avatar à chaque image, afin d'éviter de modifier l'avatar par accident.
    - Ce changement copie désormais l'avatar dans un GameObject caché dans la hiérarchie et marqué comme non sauvegardé, si la référence à l'Object To View ne change pas.
    - Utilisation des événements de changement d'objet pour détecter tout changement dans la scène. S'il y a un changement qui concerne un élément autre que le transform, nous détruisons l'objet copié et en créons un nouveau.
    - Cet objet copié est déplacé de 10 000 unités vers le bas entre les cycles de rendu.
    - Ne pas désactiver l'avatar d'origine entre les cycles de rendu, car l'activation de l'avatar est lente.
    - Dans la copie, suppression des Animators, car ils prennent du temps à se lier et nous n'en avons pas besoin.

*De la version 2.4.1-alpha.2 :*

- Ajout du support pour les projets URP :
    - Détection si le projet est BIRP.
    - Si ce n'est pas BIRP, ne suggère pas d'installer le package Post-Processing V2.
    - Si ce n'est pas BIRP, chargement de la scène URP, même si le package Light Volumes est installé.

*De la version 2.5.0-alpha.2 :*

- Tentative d'optimisation qui supprime le besoin de copier la texture du GPU vers le CPU.

*De la version 2.5.0-alpha.3 :*

- Tentative de correction d'un problème où la profondeur affectait le rendu de la vue dans un projet Unity 6.2 Basis.

## 2.5.0-alpha.3

- Tentative de correction d'un problème où la profondeur affectait le rendu de la vue dans un projet Unity 6.2 Basis.

## 2.5.0-alpha.2

Tentative d'optimisation qui supprime le besoin de copier la texture du GPU vers le CPU.

Cela pourrait également améliorer le support pour Metal sur macOS, car le changement introduit dans la version 2.5.0-alpha.1 pourrait avoir été inefficace.

## 2.5.0-alpha.1

Tentative de support pour les systèmes sans Async GPU readback :
- Tentative de support pour Metal sur macOS, qui ne semble pas disposer de l'Async GPU readback.

*De la version 2.4.1-alpha.2 :*

- Ajout du support pour les projets URP :
  - Détection si le projet est BIRP.
  - Si ce n'est pas BIRP, ne suggère pas d'installer le package Post-Processing V2.
  - Si ce n'est pas BIRP, chargement de la scène URP, même si le package Light Volumes est installé.

*De la version 2.4.1-alpha.1 :*

- Changement de stratégie du mode Édition pour la performance :
  - Auparavant, le mode Édition copiait l'avatar à chaque image, afin d'éviter de modifier l'avatar par accident.
  - Ce changement copie désormais l'avatar dans un GameObject caché dans la hiérarchie et marqué comme non sauvegardé, si la référence à l'Object To View ne change pas.
  - Utilisation des événements de changement d'objet pour détecter tout changement dans la scène. S'il y a un changement qui concerne un élément autre que le transform, nous détruisons l'objet copié et en créons un nouveau.
  - Cet objet copié est déplacé de 10 000 unités vers le bas entre les cycles de rendu.
  - Ne pas désactiver l'avatar d'origine entre les cycles de rendu, car l'activation de l'avatar est lente.
  - Dans la copie, suppression des Animators, car ils prennent du temps à se lier et nous n'en avons pas besoin.

- Correction : le déplacement vertical (Vertical Displacement) ne pouvait pas être réinitialisé.

## 2.4.1-alpha.2

Ajout du support pour les projets URP :
- Détection si le projet est BIRP.
- Si ce n'est pas BIRP, ne suggère pas d'installer le package Post-Processing V2.
- Si ce n'est pas BIRP, chargement de la scène URP, même si le package Light Volumes est installé.

## 2.4.1-alpha.1

- Changement de stratégie du mode Édition pour la performance :
  - Auparavant, le mode Édition copiait l'avatar à chaque image, afin d'éviter de modifier l'avatar par accident.
  - Ce changement copie désormais l'avatar dans un GameObject caché dans la hiérarchie et marqué comme non sauvegardé, si la référence à l'Object To View ne change pas.
  - Utilisation des événements de changement d'objet pour détecter tout changement dans la scène. S'il y a un changement qui concerne un élément autre que le transform, nous détruisons l'objet copié et en créons un nouveau.
  - Cet objet copié est déplacé de 10 000 unités vers le bas entre les cycles de rendu.
  - Ne pas désactiver l'avatar d'origine entre les cycles de rendu, car l'activation de l'avatar est lente.
  - Dans la copie, suppression des Animators, car ils prennent du temps à se lier et nous n'en avons pas besoin.

- Correction : le déplacement vertical (Vertical Displacement) ne pouvait pas être réinitialisé.

## 2.4.0

- Ajout de Collections de lightboxes. Les utilisateurs peuvent désormais passer des six lightboxes par défaut à d'autres plus spécialisées.
  - Ajout de lightboxes spéciales spécifiquement pour les Light Volumes. Cela nécessite l'installation du package Light Volumes.
  - Exposition de la lightbox Spotlight Cookie qui était auparavant cachée.
- Auparavant, les lumières à l'intérieur de l'objet visualisé étaient désactivées. Ce n'est plus le cas par défaut.
- Ajout d'une option pour désactiver les lumières à l'intérieur de l'objet visualisé.
- Ajout d'une option pour supporter les shaders qui nécessitent une texture de profondeur (Depth Texture).
  - Cela utilise les paramètres de lumière [DepthGet de Poiyomi](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab), mais reconditionnés avec un GUID différent pour éviter les conflits d'installation.
- Le menu Avancé est désormais une barre latérale.
- Certains paramètres sont désormais enregistrés à l'échelle de l'éditeur, au lieu d'être réinitialisés à la fermeture de la fenêtre Lightbox Viewer.
  - Cela inclut *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*.

![Unity_a6UfNnk6f1.png](/assets/docs/products/lightbox-viewer/Unity_a6UfNnk6f1.png)

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## 2.4.0-beta.2

- Correction : le mode Play n'affichait pas les collections lorsque le Reload Domain restait par défaut.

## 2.4.0-beta.1

- Ajout de Collections de lightboxes. Les utilisateurs peuvent désormais passer des six lightboxes par défaut à d'autres plus spécialisées.
  - Ajout de lightboxes spéciales spécifiquement pour les Light Volumes. Cela nécessite l'installation du package Light Volumes.
  - Exposition de la lightbox Spotlight Cookie qui était auparavant cachée.
- Auparavant, les lumières à l'intérieur de l'objet visualisé étaient désactivées. Ce n'est plus le cas par défaut.
- Ajout d'une option pour désactiver les lumières à l'intérieur de l'objet visualisé.
- Ajout d'une option pour supporter les shaders qui nécessitent une texture de profondeur (Depth Texture).
  - Cela utilise les paramètres de lumière [DepthGet de Poiyomi](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab), mais reconditionnés avec un GUID différent pour éviter les conflits d'installation.
- Le menu Avancé est désormais une barre latérale.
- Certains paramètres sont désormais enregistrés à l'échelle de l'éditeur, au lieu d'être réinitialisés à la fermeture de la fenêtre Lightbox Viewer.
  - Cela inclut *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*.

## 2.3.0

Ajout du support pour [Light Volumes](https://github.com/REDSIM/VRCLightVolumes) s'il est installé dans le projet.

Les lightboxes elles-mêmes ne changent pas, les différences sont donc subtiles.
La scène Rose est la plus remarquable car la main gauche sera éclairée en rose et la main droite en violet.

:::warning
Si vous voulez que les **aperçus** utilisent les light volumes, sachez que *contrairement aux uploads d'avatars*, il ne suffit pas d'avoir un shader compatible comme lilToon 1.10 ;
vous devez avoir le [package Light Volumes](https://github.com/REDSIM/VRCLightVolumes?tab=readme-ov-file#installation-through-vrchat-creator-companion) installé dans votre projet d'avatar.
:::

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>

*Avec light volumes :*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*Sans light volumes :*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

## 2.3.0-beta.2

Correction de l'erreur "Unknown error occurred while loading LightingData.asset" :
- Re-calcul (bake) de la scène avec un fichier .lighting séparé.
- Cela devrait résoudre l'erreur "Unknown error occurred while loading LightingData.asset".

## 2.3.0-beta.1

Ajout du support pour les Light Volumes s'ils sont installés dans le projet.

Les lightboxes elles-mêmes ne changent pas, les différences sont donc subtiles.
La scène Rose est la plus remarquable car la main gauche sera éclairée en rose et la main droite en violet.

*Avec light volumes :*
![Unity_UWaWszgU9p.png](/assets/docs/products/lightbox-viewer/Unity_UWaWszgU9p.png)

*Sans light volumes :*
![Unity_BuaFhsYHjq.png](/assets/docs/products/lightbox-viewer/Unity_BuaFhsYHjq.png)

- Ajout d'une scène pour supporter les Light Volumes : https://github.com/REDSIM/VRCLightVolumes
  - La scène est calculée différemment de la scène principale, car elle utilise le GPU Progressif au lieu du CPU.
  - La scène comporte des lightboxes inactives avec les Light Volumes désactivés.
- Cette scène est sélectionnée par défaut si le package Light Volumes version 0.7.2 ou supérieure est installé.

## 2.2.0

Tentative d'amélioration de la vitesse en mode Édition en supprimant tous les MonoBehaviours de la copie :
- Tentative d'amélioration de la vitesse d'exécution en mode Édition en supprimant tous les MonoBehaviours de la copie, afin que les méthodes OnEnable/OnDestroy ne soient pas invoquées.
- Cela se fait en apparentant la copie à un parent désactivé avant de supprimer tous les MonoBehaviours de la copie.

## 2.1.0

Nouveau calcul de l'éclairage de la scène Lightbox dans Unity 2022 :
- La lightmap actuelle semblait mal se comporter dans Unity 2022, en particulier la boîte blanche (White box).
- L'éclairage a été recalculé dans Unity 2022.
- Le package est désormais classé comme étant un package Unity 2022.3.

## 2.0.2

- Correction d'un problème où les avatars ne parvenaient pas à être téléchargés (upload).
  - Les scripts se compilent désormais lors de la construction (build).

## 2.0.1

- Première version publique VCC de Lightbox Viewer.
  - L'installation VCC supprime les installations précédentes de cet outil de Assets/
  - Cet outil se trouve désormais dans Packages/
