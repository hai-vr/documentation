---
title: Blendshape Viewer (V3)
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";
import HaiSupport from "/docs/_support.mdx";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

*Blendshape Viewer* vous permet de visualiser quelle zone d'un modèle est affectée par une blendshape afin que vous puissiez ajuster leurs valeurs.

:::tip[Notes de compatibilité]
- Il a été testé pour fonctionner sur Unity 2022 et Unity 6.4, et devrait fonctionner sur les versions plus récentes.
- 🌊 Aucun SDK spécifique au jeu n'est requis.
- Si vous utilisez une version d'Unity inférieure à 2022, vous devez utiliser la version 2.1.2.
:::

![Unity_Q4csWb8ty6.png](/assets/docs/products/blendshape-viewer/v3/Unity_Q4csWb8ty6.png)

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-25-45_Je9CWGeOH8.mp4"></HaiVideo>

## Téléchargement

Cet outil peut être téléchargé sur [Booth.pm](https://hai-vr.booth.pm/items/3582541) :

Il peut également être installé via ALCOM :
- Utilisez ce lien pour **[installer notre listing sur ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Ajoutez *Haï ~ Blendshape Viewer* à votre projet en utilisant ALCOM.

<HaiSupport/>

## Comment utiliser

### Choisir l'objet à prévisualiser

Sélectionnez le *SkinnedMeshRenderer* que vous souhaitez prévisualiser. Dans l'inspecteur, cliquez sur les trois points et sélectionnez « Haï Blendshape Viewer ».

![how_to_open](/assets/docs/products/blendshape-viewer/v3/how_to_open.png)

### Aligner la vue de la scène avec votre mesh

Regardez autour de vous en utilisant l'onglet Scene pour vous concentrer sur votre mesh, puis appuyez sur *Mettre à jour* pour actualiser les vignettes. Les vignettes utilisent les mêmes paramètres de caméra que la vue de la scène.

Si vous souhaitez que les vignettes soient plus grandes, modifiez le curseur *Taille de la vignette* et appuyez à nouveau sur le bouton *Mettre à jour*.

:::tip
Pour de meilleurs résultats, n'oubliez pas que vous pouvez modifier le champ de vision (field of view) de la caméra de la Scene.

![field_of_view](/assets/docs/products/blendshape-viewer/Untitled_5.png)
:::

### Identifier quelle blendshape affecte quelle zone

Par défaut, les vignettes affichent les différences. Si vous ne le souhaitez pas, décochez *Afficher les différences*.

Tout en ayant votre curseur à l'intérieur de la fenêtre *Blendshape Viewer*, appuyez sur la touche ALT pour afficher plus précisément où se trouvent les différences.

![alt](/assets/docs/products/blendshape-viewer/v3/alt.png)

### Rechercher des blendshapes

Tapez dans le champ *Rechercher* pour filtrer les résultats par nom de blendshape.

Vous pouvez séparer les termes de recherche par un espace. La requête de recherche `eye down` peut trouver des résultats comme `eye_lookdown`.

### Copier le nom d'une blendshape

Cliquez sur l'**icône du presse-papiers** pour copier le nom de la blendshape.

Alternativement, vous pouvez également sélectionner le texte qui contient le nom de la blendshape.

### Modifier la valeur d'une blendshape

Le curseur sous chaque blendshape modifiera la valeur de cette blendshape dans votre scène.

Ceci peut également être utilisé lors de l'enregistrement d'une animation.

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-18-15_4Kdbs1Hlck.mp4"></HaiVideo>

## Remerciements

- [Pema](https://github.com/pema99/) pour le [Compute Shader](https://github.com/hai-vr/blendshape-viewer/commit/46db696df8be42d251f59c3f0fb240b117905c76) !
