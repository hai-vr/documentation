---
unlisted: true
displayed_sidebar: newProductsSidebar
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiLocalization from "/src/components/HaiLocalization";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";

# Transfer Assistant

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hant', 'zh-Hans']} />

Cet outil Unity vous aidera lorsque vous souhaitez utiliser la fonction d'exportation *.unitypackage* pour **transférer des assets d'un projet à un autre**, tout en supprimant les assets que vous jugez inutiles.

![general_fr.png](/assets/docs/products/transfer-assistant/general_fr.png)

Cet outil **ignorera délibérément certaines références d'assets**, ne conservant que les assets dont vous avez activement besoin.

- Au lieu d'exporter chaque asset référencé par les prefabs, il n'exporte que les assets qui existent sur l'avatar principal.
  Si un prefab utilise un asset que l'avatar principal n'utilise pas, il n'est pas inclus. C'est le comportement par défaut, mais il peut être modifié.
- Vous pouvez choisir d'ignorer les assets par type ou par composant, ainsi que tout asset référencé par eux. Exemples :
  - Lorsque vous ignorez les matériaux, cela ignorera également les textures utilisées par ces matériaux.
  - Lorsque vous ignorez des composants tels que *Modular Avatar Menu Item*, cela ignorera également les textures d'icônes référencées par ces composants.
- Vous pouvez choisir d'ignorer les assets référencés par des objets marqués comme EditorOnly.

Si un asset inattendu est inclus dans l'exportation, l'interface utilisateur de *Transfer Assistant* peut vous aider à localiser quel objet ou composant en dépend.

![dependency_fr.png](/assets/docs/products/transfer-assistant/dependency_fr.png)

*Transfer Assistant* ne modifiera jamais le contenu des Scènes ou des Prefabs.

L'utilisation prévue de cet outil est d'**exporter un fichier de projet d'avatar entre différents jeux**, par exemple, d'un projet Unity 2022 BIRP vers un projet Unity 6.4 URP autonome.
Dans un tel projet, les assets sont dispersés dans plusieurs dossiers, et à l'intérieur de ces dossiers, il y a des assets que vous souhaitez exclure car ils ne servent à rien dans le projet de destination, comme les animator controllers ou les fichiers d'animation.

### Ce pour quoi cet outil n'est PAS conçu

Si vous êtes un créateur de produits, cet outil n'est **pas** conçu pour exporter des fichiers *.unitypackage* destinés à être publiés et distribués dans le cadre d'une release, car de tels assets nécessitent généralement une discipline plus rigoureuse dans la structure des dossiers.
Certaines fonctionnalités de cet outil peuvent être utilisées à des fins d'introspection, mais il n'est **pas recommandé** d'utiliser cet outil pour la gestion des releases de produits.

## Téléchargement

Cet outil peut être téléchargé sur Booth.pm :

<p style={{color:"#FF0000"}}>**TODO: LINK TO BOOTH PAGE**</p>

Il peut également être installé via ALCOM.

<HaiLocalization languages={['en', 'ja']} />

## Comment utiliser

Voici les étapes de base pour utiliser l'outil :

- [Choisir les assets à analyser.](#choisir-les-assets-à-analyser)
- [Affiner les références d'assets que vous souhaitez conserver.](#affiner-les-références-dassets-que-vous-souhaitez-conserver)
- [Explorer quels assets nécessitent d'autres assets.](#explorer-quels-assets-nécessitent-dautres-assets)
- [Préparer l'exportation pour prévisualiser quels fichiers d'assets seront exportés.](#préparer-lexportation-pour-prévisualiser-quels-fichiers-dassets-seront-exportés)
- [Découvrir pourquoi des fichiers d'assets inattendus sont requis.](#découvrir-pourquoi-des-fichiers-dassets-inattendus-sont-requis)
- [Exporter les assets sélectionnés.](#exporter-les-assets-sélectionnés)

## Choisir les assets à analyser

Pour commencer, choisissez l'une des options suivantes :

- [Analyser un prefab](#analyser-un-prefab), ou
- [Analyser une scène](#analyser-une-scène).

### Analyser un prefab

Dans l'onglet *Project*, faites un clic droit sur un prefab et choisissez *Transfer Assistant...*

Alternativement, vous pouvez aller dans *Window > Haï~ > Transfer Assistant*, puis choisir un prefab, et cliquer sur le bouton *Effectuer l'analyse*.

:::info
Si vous travaillez sur un avatar, vous devez sélectionner le prefab dans la vue Project qui contient votre avatar.
:::

![project_menu.png](/assets/docs/products/transfer-assistant/project_menu.png)

### Analyser une scène

Pour analyser les objets contenus dans une scène, vous devez :

- Ouvrir la scène dans l'éditeur Unity.
- Aller dans *Window > Haï~ > Transfer Assistant*.
- Si nécessaire, [changez la langue de la fenêtre en utilisant les instructions de la section suivante](#changer-la-langue-de-la-fenêtre).
- Régler le menu déroulant en haut à droite sur **Scènes actuelles**.
- Cliquer sur le bouton *Effectuer l'analyse*.

![window_menu.png](/assets/docs/products/transfer-assistant/window_menu.png)

![scenes_fr.png](/assets/docs/products/transfer-assistant/scenes_fr.png)

### Détails supplémentaires

Le menu déroulant en haut à droite vous permet de basculer entre différents modes de sélection d'objets.

- **Cible unique**: Un seul objet racine est analysé.
- **Cibles multiples**: Plusieurs objets racines sont analysés.
- **Scènes actuelles**: Tous les objets racines de la scène ouverte sont analysés, et la scène elle-même est ajoutée pour l'exportation.
  - Cela n'inclut **pas** les paramètres de rendu des scènes. La skybox, les données d'éclairage et les autres références de scène ne seront pas incluses dans l'exportation.
  - Si vous avez plusieurs scènes ouvertes, elles seront toutes analysées.

Si vous décidez de changer de cible, ou si vous apportez des modifications à l'un des assets, cliquez sur le bouton *Effectuer l'analyse* pour rafraîchir le contenu.

## Changer la langue de la fenêtre

Vous pouvez changer la langue en utilisant le menu déroulant en bas de la fenêtre, qui affiche le mot *"Language"* écrit en anglais. <!-- AI: On this line, the word Language which is in quotes at near the end of the sentence must be kept written in English using alphabetical characters. -->

:::note
Si votre langue n'est pas disponible, mais que vous avez des compétences techniques, vous pouvez :
- demander à un grand modèle de langage de traduire le fichier `Packages/dev.hai-vr.transfer-assistant/Scripts/Editor/Locale/en.json` en un nouveau fichier `.json`,
- puis appuyer sur `CTRL-R` dans la fenêtre de l'éditeur Unity,
- puis appuyer sur le bouton de rafraîchissement situé à droite du menu déroulant de sélection de la langue.
:::

![language.png](/assets/docs/products/transfer-assistant/language.png)

## Affiner les références d'assets que vous souhaitez conserver

Cochez les cases dans la barre latérale à gauche pour affecter les assets qui seront exportés.

Ces cases à cocher ont un **effet en cascade** ; par exemple, décocher Materials affectera les Textures qui seront exportées.

:::info
*Transfer Assistant* ne **modifie jamais** les prefabs ni les scènes, il est donc toujours sûr de cliquer sur n'importe quel bouton.
:::

![checkboxes_fr.png](/assets/docs/products/transfer-assistant/checkboxes_fr.png)

#### Inclure EditorOnly

- Lorsque cette case est cochée, tous les objets sont inclus. **C'est l'option par défaut.**
- Lorsqu'elle est décochée, les assets référencés à l'intérieur des objets EditorOnly et de leurs enfants ne sont pas inclus.
  - Cependant, pour éviter les erreurs lors de l'importation, les sources de prefabs sont toujours incluses, même si l'instance du prefab est EditorOnly.

Cela ne supprime pas les GameObjects ou les composants marqués comme EditorOnly du prefab, même pendant l'exportation ; cela ignore seulement les références qu'ils contiennent.

Le fait de cocher ou de décocher cette case dépend de votre workflow.

#### Inclure les éléments cachés dans les Prefabs

Cette option concerne la manière dont la modification d'une instance de prefab masque les assets à l'intérieur du prefab source.

- Lorsque cette case est cochée, les assets référencés dans les prefabs sources sont inclus, même si votre objet cible ne les utilise pas dans sa hiérarchie parce qu'il les surcharge.
- Lorsqu'elle est décochée, les assets référencés dans les prefabs sources ne sont pas inclus, de sorte que seuls les assets que votre objet cible utilise activement sont inclus. **C'est l'option par défaut.**
  - C'est l'option recommandée pour les **projets de type avatar**, car vous n'êtes souvent intéressé que par ce qui est activement utilisé sur votre avatar.

> ![simplehidden.png](/assets/docs/products/transfer-assistant/simplehidden.png)
>
> Par défaut, *Inclure les éléments cachés dans les Prefabs* est décoché. Le laisser décoché entraînera parfois un nombre d'assets exportés considérablement plus faible.
>
> Dans cet exemple, un avatar a été modifié en convertissant les matériaux en NonToon.
> - La source du prefab référence toujours les matériaux précédents avant la conversion, bien que l'avatar n'utilise plus activement ces matériaux.
> - En laissant *Inclure les éléments cachés dans les Prefabs* décoché, ces anciens matériaux ne sont pas inclus pour l'exportation, ne laissant que les matériaux NonToon inclus.

#### Élagage

- En cochant un type d'asset, ces types d'assets sont inclus, ainsi que tout autre asset référencé par ces types d'assets.
- En décochant un type d'asset, ces types d'assets ne sont pas inclus, et les assets référencés par ces types d'assets ne sont pas inclus.

>![culling.png](/assets/docs/products/transfer-assistant/culling.png)
>
> Décocher *Animator Controller* ne supprime pas seulement les *Animator Controllers* de l'exportation, cela supprime également les assets *Blend Tree* et les assets *Animation Clip* utilisés par ces *Animator Controllers* de l'exportation.

#### Composants

- En cochant un composant, tout asset référencé par ces composants est inclus, ainsi que tout autre asset référencé par ces assets.
- En décochant un composant, les assets référencés par ces composants ne sont pas inclus, et les assets référencés par ces assets ne sont pas inclus.

Cela ne supprime pas les composants du prefab, même pendant l'exportation.

## Explorer quels assets nécessitent d'autres assets

Le panneau principal de *Transfer Assistant* contient un arbre de dépendances d'objets. Cet arbre est affiché de telle sorte que les racines dépendent des enfants (= les enfants sont ce dont un objet dépend).

De nombreux objets comme les matériaux ou les textures sont utilisés plusieurs fois, ce qui signifie qu'ils auraient plusieurs parents ; vous verrez ce même objet plusieurs fois dans cet arbre lorsque cela se produit.

Pour plus de brièveté, chaque objet n'affiche ses enfants qu'une seule fois ; les autres occurrences porteront la mention "*(Déjà affiché)*" ajoutée à leur droite.

Cliquez sur n'importe quel objet pour mettre en évidence l'emplacement de cet objet.

Utilisez les fonctions suivantes pour naviguer et comprendre pourquoi certains objets sont requis :
- Appuyez sur l'**icône de loupe sur un objet spécifique** pour vous concentrer sur cet objet.<br/>Utilisez ceci pour comprendre de quels objets il dépend et quels objets dépendent de lui.
- Appuyez sur l'**icône de loupe sur la barre latérale** pour vous concentrer sur ces types d'assets.<br/>Utilisez ceci pour visualiser chaque dépendance qui nécessite ces types d'assets.
- Tapez du texte dans le **champ de recherche** pour rechercher des noms d'assets spécifiques.

Vous pouvez cliquer à nouveau sur l'icône de la loupe pour effacer la recherche.

![search_fr.png](/assets/docs/products/transfer-assistant/search_fr.png)

:::note
Le code couleur est le suivant :

- La plupart des objets grisés ne sont pas des assets, par exemple, il peut s'agir de composants ou de GameObjects qui ne sont pas des prefabs. Les composants sont affichés en jaune grisé.
- Les objets en bleu sont des *Prefab Sources* ou *Prefab Models*, qui sont des assets de prefab existant sous forme de fichiers dans le projet.
- Les objets en vert sont des *Prefab Instances*, qui sont des objets de scène. Ils peuvent exister dans la scène ou à l'intérieur d'autres prefabs.

Les *Prefab Instances* partagent souvent le même nom que la *Prefab Source* dont elles dépendent, ce qui peut être déroutant à lire. C'est pourquoi elles sont colorées.
:::

## Préparer l'exportation pour prévisualiser quels fichiers d'assets seront exportés

Dans la barre latérale, appuyez sur le bouton *Préparer l'export...*. Cela ouvrira une nouvelle fenêtre qui ressemble à la fenêtre *Export .unitypackage*.

Vous pouvez y inspecter les fichiers qui seraient exportés et affiner votre sélection.

La barre latérale de cette fenêtre comporte des boutons pour chaque type d'asset. Ceux-ci **n'ont pas** d'effet en cascade.

- **Select** : Sélectionne les assets de ce type, ce qui les inclura dans l'exportation.
- **Deselect** : Désélectionne les assets de ce type, ce qui les exclura de l'exportation.
- **Deselect and Hide** : Désélectionne les assets de ce type et les supprime de la fenêtre d'exportation.
    - *Note : Appuyer sur Deselect and Hide ne désélectionnera **pas** les assets qui sont référencés par ces assets, c'est donc différent de l'option Culling de la fenêtre Transfer Assets.*

![export_fr.png](/assets/docs/products/transfer-assistant/export_fr.png)

:::warning
Les modifications apportées à la fenêtre *Transfer Assistant* ne seront pas reflétées dans la fenêtre *Prepare Export* :

Si vous décidez d'affiner ou d'élargir vos dépendances, vous devrez appuyer à nouveau sur le bouton *Préparer l'export...*.
:::

## Découvrir pourquoi des fichiers d'assets inattendus sont requis

Dans la fenêtre *Prepare Export*, il arrive que vous voyiez des fichiers sans comprendre pourquoi ils sont exportés.

Dans ce cas, appuyez sur l'**icône de loupe** à droite de la fenêtre *Prepare Export*. Cela recherchera cet asset à l'intérieur de la fenêtre *Transfer Assistant*.

Vous pouvez utiliser cette information pour comprendre quel objet dans votre hiérarchie nécessite cet asset.

:::tip
Vous pouvez appuyer sur le bouton *Préparer l'export...* même si vous n'avez pas l'intention d'exporter les fichiers.

Comme la fenêtre *Prepare Export* représente vos dépendances sous forme de fichiers et de dossiers, c'est une information utile pour aider à localiser les assets inattendus.
:::

![exportexplain.png](/assets/docs/products/transfer-assistant/exportexplain.png)

## Exporter les assets sélectionnés

Près du bas de la fenêtre *Prepare Export*, appuyez sur le bouton *Exporter vers un fichier...* pour exporter les assets sélectionnés vers un fichier de votre choix.

Alternativement, appuyez sur le bouton *Export rapide* pour exporter ou écraser le fichier `export.unitypackage`.
