---
title: Blendshape Viewer
---
import HaiLocalization from "/src/components/HaiLocalization";

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

## 3.0.0-beta.3

Corrections :
- Correction d'un problème où l'anti-aliasing nécessitait une plus grande tolérance dans le compute shader.
- Correction d'une invocation incorrecte de la libération de RenderTexture.

## 3.0.0-beta.2

Changements :
- Utilisation de la couleur jaune pour les zones devenues plus claires, et de la couleur rouge pour les zones devenues plus sombres.
- S'assure que la caméra dispose de l'anti-aliasing pour la génération des vignettes.

## 3.0.0-beta.1

Changements majeurs :
- Ne supporte plus Unity 2019. Unity 2022 est le minimum requis.

Optimisations :
- L'interface utilisateur devrait maintenant être plus rapide sur les modèles contenant un grand nombre de blendshapes (testé avec 700 blendshapes).
- La durée du rendu devrait maintenant être plus courte.
  - Le rendu était lent si la fenêtre Blendshape était déjà ouverte en raison d'une particularité du ramasse-miettes (garbage collection) de l'Animation Mode.
  - L'Animation Mode d'Unity n'est plus utilisé pour le rendu des vignettes.

Fonctionnalités :
- Appuyer sur la touche ALT affichera désormais en jaune les zones affectées par la blendshape.
- Les cases à cocher sont désormais sauvegardées entre les sessions de l'éditeur.
- Ajout de la localisation.

Changements :
- Le compute shader est désormais toujours utilisé sur les ordinateurs qui le supportent.
- Si aucun changement n'est visible sur une vignette de blendshape, la vignette paraît désormais encore plus sombre.
- L'auto-update au focus est désormais désactivé par défaut.
- La fenêtre s'appelle désormais "Blendshape Viewer" au lieu de "BlendshapeViewer".

Corrections :
- Lorsque la fenêtre prend le focus avec les mises à jour automatiques, les mises à jour sont désormais différées pour éviter un double rafraîchissement.

## 2.1.2

- Correction des erreurs de mise en page qui ne devraient plus se produire lorsque la recherche ne donne aucun résultat.
- Empêche le blocage de l'éditeur lorsque l'utilisateur colle par erreur une page entière de contenu non pertinent dans le champ de recherche.
  - La requête de recherche est désormais limitée à 100 caractères maximum.

## 2.1.1

- Correction d'une erreur lorsqu'aucun mesh n'était sélectionné.

## 2.1.0

Ajout de la recherche et de la copie dans le presse-papiers :
- Ajout d'un champ de recherche.
- Ajout d'un bouton Copier dans le presse-papiers.

## 2.0.3

- Correction d'un problème où le téléchargement d'avatars échouait.
  - Correction des scripts qui compilent désormais lors du build.

## 2.0.2

- Première version publique VCC de Blendshape Viewer.
  - L'installation VCC supprime les installations précédentes de cet outil de Assets/
  - Cet outil se trouve désormais dans Packages/
