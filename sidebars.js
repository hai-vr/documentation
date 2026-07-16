/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "products/index",
    "products/listing",
    {
      "type": "category",
      "label": "🌊 Non-VRChat uses", // INDEX
      "items": [
        "products/compatibility/basis",
        "products/compatibility/beatsaber",
        "products/compatibility/chilloutvr",
        "products/compatibility/resonite",
        "products/compatibility/vnyan",
        "products/compatibility/vseeface",
        "products/compatibility/warudo"
      ],
      "link": {
        "type": "doc",
        "id": "products/compatibility/index"
      }
    },
    {
      "type": "category",
      "label": "🧰 General tools", // Reminder there are two placed needed to update this.
      "collapsed": false,
      "items": [
      {
        "type": "category",
        "label": "Animator As Code (V1)", // INDEX
        "items": [
          "products/animator-as-code/install",
          "products/animator-as-code/getting-started",
          "products/animator-as-code/reference",
          {
            "type": "category",
            "label": "Functions",
            "items": [
              "products/animator-as-code/functions/base",
              "products/animator-as-code/functions/modification",
              "products/animator-as-code/functions/vrchat",
              "products/animator-as-code/functions/vrchat-destructive-workflow",
              "products/animator-as-code/functions/modular-avatar",
              "products/animator-as-code/functions/ndmf-processor"
            ]
          },
          "products/animator-as-code/v1.1-whats-new",
          "products/animator-as-code/migrating-v0-to-v1",
          {
            "type": "category",
            "label": "Obsolete documentation",
            "items": [
              "products/animator-as-code/obsolete/getting-started",
              "products/animator-as-code/obsolete/examples",
              "products/animator-as-code/obsolete/reference-barebones",
              "products/animator-as-code/obsolete/examples-maac"
            ],
            "link": {
              "type": "doc",
              "id": "products/animator-as-code/obsolete/index"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "products/animator-as-code/index"
        }
      },
      // "products/auto-reset-osc-config",
      {
        "type": "category",
        "label": "Chillaxins", // INDEX
        "items": [],
        "link": {
          "type": "doc",
          "id": "products/chillaxins/index"
        }
      },
      // "products/cloth-transfer",
      // {
      //   "type": "category",
      //   "label": "ComboGestureExpressions",
      //   "items": [
      //     "products/combo-gesture-expressions/reference",
      //     "products/combo-gesture-expressions/v2.0-whats-new",
      //     "products/combo-gesture-expressions/v3.0-vcc",
      //     {
      //       "type": "category",
      //       "label": "Additional pages",
      //       "items": [
      //         "products/combo-gesture-expressions/additional-pages/corrections",
      //         "products/combo-gesture-expressions/additional-pages/integrator",
      //         "products/combo-gesture-expressions/additional-pages/tutorial",
      //         "products/combo-gesture-expressions/additional-pages/v2-animate-transforms",
      //         "products/combo-gesture-expressions/additional-pages/writedefaults"
      //       ]
      //     },
      //     "products/combo-gesture-expressions/convert-to-faceemo"
      //   ],
      //   "link": {
      //     "type": "doc",
      //     "id": "products/combo-gesture-expressions/index"
      //   }
      // },
      {
        "type": "category",
        "label": "Constraint Tools",
        "items": [
          "products/constraint-tools/skinned-mesh-constraint",
          "products/constraint-tools/activate-with-skinned-offsets"
        ]
      },
      "products/denormalized-avatar-exporter",
      {
        "type": "category",
        "label": "⭐ Double Hip Tracker",
        "items": [
          "products/double-hip-tracker/double-chest-tracker",
          "products/double-hip-tracker/faq",
          "products/double-hip-tracker/v1.3-new-detection-method"
        ],
        "link": {
          "type": "doc",
          "id": "products/double-hip-tracker/index"
        }
      },
      {
        "type": "category",
        "label": "⭐ FaceTra Shape Creator",
        "items": [
          "products/facetra-shape-creator/install",
          // {
          //   "type": "category",
          //   "label": "Premade files",
          //   "items": [
          //     "products/facetra-shape-creator/premade/hai-style"
          //   ],
          //   "link": {
          //     "type": "doc",
          //     "id": "products/facetra-shape-creator/premade/index"
          //   }
          // },
          "products/facetra-shape-creator/video",
          "products/facetra-shape-creator/new-avatar",
          "products/facetra-shape-creator/construction-lines",
          {
            "type": "category",
            "label": "Shapes",
            "items": [
              "products/facetra-shape-creator/shapes/eye",
              "products/facetra-shape-creator/shapes/face",
              "products/facetra-shape-creator/shapes/cheek-squint",
              "products/facetra-shape-creator/shapes/cheek-puff",
              "products/facetra-shape-creator/shapes/mouth-press",
              "products/facetra-shape-creator/shapes/mouth-closed",
              "products/facetra-shape-creator/shapes/jaw",
              "products/facetra-shape-creator/shapes/tongue"
            ]
          },
          "products/facetra-shape-creator/improve-eye-tracking",
          "products/facetra-shape-creator/export",
          "products/facetra-shape-creator/tailoring",
          "products/facetra-shape-creator/nonstandard",
          "products/facetra-shape-creator/already-face-tracking",
          "products/facetra-shape-creator/faq",
          "products/facetra-shape-creator/modular-avatar-for-resonite-patch"
        ],
        "link": {
          "type": "doc",
          "id": "products/facetra-shape-creator/index"
        }
      },
      {
        "type": "category",
        "label": "H-View", // INDEX
        "items": [],
        "link": {
          "type": "doc",
          "id": "products/h-view/index"
        }
      },
      "products/let-me-see/index",
      {
        "type": "category",
        "label": "Prefabulous",
        "items": [
          "products/prefabulous/reference",
          {
            "type": "category",
            "label": "🌊 Universal Components",
            "items": [
              "products/prefabulous/universal/assign-uv-tile",
              "products/prefabulous/universal/change-avatar-scale",
              "products/prefabulous/universal/convert-blendshape-conventions",
              "products/prefabulous/universal/delete-polygons",
              "products/prefabulous/universal/edit-all-mesh-anchor-override",
              "products/prefabulous/universal/edit-all-mesh-bounds",
              "products/prefabulous/universal/generate-speech-visemes",
              "products/prefabulous/universal/generate-twist-bones",
              "products/prefabulous/universal/haixt-generate-blendshapes-for-face-tracking-extensions",
              "products/prefabulous/universal/non-linear-blendshapes",
              "products/prefabulous/universal/recalculate-normals",
              "products/prefabulous/universal/replace-textures"
            ],
            "link": {
              "slug": "products/prefabulous/universal",
              "type": "generated-index"
            }
          },
          {
            "type": "category",
            "label": "💬 VRChat Platform",
            "items": [
              "products/prefabulous/vrchat/accurate-eye-tracking-transforms",
              "products/prefabulous/vrchat/blank-expressions-menu-and-parameters",
              "products/prefabulous/vrchat/blank-fx-animator",
              "products/prefabulous/vrchat/blank-gesture-animator",
              "products/prefabulous/vrchat/haixt-face-tracking-extensions",
              "products/prefabulous/vrchat/import-expression-parameters",
              "products/prefabulous/vrchat/lock-locomotion-menu-item",
              "products/prefabulous/vrchat/mass-blendshape-sync",
              "products/prefabulous/vrchat/replace-action-animator",
              "products/prefabulous/vrchat/replace-locomotion-animator"
            ],
            "link": {
              "slug": "products/prefabulous/vrchat",
              "type": "generated-index"
            }
          },
          {
            "type": "category",
            "label": "📹 VRM and VTubing",
            "items": [
              "products/prefabulous/vrm/add-arkit-to-blendshapeavatar"
            ],
            "link": {
              "slug": "products/prefabulous/vrm",
              "type": "generated-index"
            }
          },
          {
            "type": "category",
            "label": "🚚 Conversions",
            "items": [
              "products/prefabulous/conversions/convert-vrc-constraints-to-unity-constraints"
            ],
            "link": {
              "slug": "products/prefabulous/conversions",
              "type": "generated-index"
            }
          }
        ],
        "link": {
          "type": "doc",
          "id": "products/prefabulous/index"
        }
      },
      // "products/property-finder",
      {
        "type": "category",
        "label": "🔒 Starmesh",
        "items": [
          "products/starmesh/WIP-selectors",
          "products/starmesh/install",
          "products/starmesh/introduction",
          {
            "type": "category",
            "label": "Prefabs", // INDEX
            "items": [
              "products/starmesh/prefabs/vrc"
            ],
            "link": {
              "type": "doc",
              "id": "products/starmesh/prefabs/index"
            }
          },
          "products/starmesh/reference",
          {
            "type": "category",
            "label": "Operators",
            "items": [
              "products/starmesh/operators/compressive-deform",
              "products/starmesh/operators/displace-outwards",
              "products/starmesh/operators/paint-new-bone",
              "products/starmesh/operators/reassign-painted-bone",
              "products/starmesh/operators/rig-thumb-metacarpal",
              "products/starmesh/operators/rig-toe-bones",
              "products/starmesh/operators/ripple-wave",
              "products/starmesh/operators/transfer-blendshape",
              "products/starmesh/operators/translate-rotate-scale",
              "products/starmesh/operators/unpaint-bone"
            ],
            "link": {
              "slug": "products/starmesh/operators",
              "type": "generated-index"
            }
          },
          "products/starmesh/selectors",
          "products/starmesh/animation",
          "products/starmesh/examples",
          "products/starmesh/faq"
        ],
        "link": {
          "type": "doc",
          "id": "products/starmesh/index"
        }
      },
      // {
      //   "type": "category",
      //   "label": "Transfer Assistant",
      //   "items": [],
      //   "link": {
      //     "type": "doc",
      //     "id": "products/transfer-assistant/index"
      //   }
      // },
      // "products/visual-expressions-editor",
      {
        "type": "category",
        "label": "⭐ Vixen",
        "items": [
          "products/vixen/getting-started",
          "products/vixen/change-properties",
          "products/vixen/cross-control-effects",
          "products/vixen/item-slots",
          "products/vixen/flags",
          "products/vixen/ejects",
          "products/vixen/test-versions"
        ],
        "link": {
          "type": "doc",
          "id": "products/vixen/index"
        }
      },
      {
        "type": "category",
        "label": "Vixxy",
        "items": [],
        "link": {
          "type": "doc",
          "id": "basis/avatar-customization/vixxy/index"
        }
      }
    ]
    },
    {
      "type": "category",
      "label": "🌊 Assistive tools", // Reminder there are two placed needed to update this.
      "collapsed": false,
      "items": [
        "products/animation-viewer",
        "products/blendshape-viewer",
        "products/blendtree-viewer",
        "products/lightbox-viewer/index",
        "products/lightbox-viewer/urp",
        "products/property-finder",
        // {
        //   "type": "category",
        //   "label": "Lightbox Viewer",
        //   "items": [
        //     "products/lightbox-viewer/urp"
        //   ],
        //   "link": {
        //     "type": "doc",
        //     "id": "products/lightbox-viewer/index"
        //   }
        // },
        'products/transfer-assistant/index',
        "products/visual-expressions-editor",
      ]
    },
    {
      "type": "category",
      "label": "✈️ Legacy tools", // Reminder there are two placed needed to update this.
      "collapsed": true,
      "items": [
        "products/auto-reset-osc-config",
        "products/cloth-transfer",
        "products/combo-gesture-expressions/index",
        "products/constraint-track-animation-creator/index",
        "products/expressions-menu-hierarchy-editor",
      ]
    }
  ]
  ,
  changelogsSidebar: [{type: 'autogenerated', dirName: 'changelogs'}],
  resilienceSidebar: [{type: 'autogenerated', dirName: 'resilience'}],
  basisSidebar: [{type: 'autogenerated', dirName: 'basis'}],
  contentSidebar: [{type: 'autogenerated', dirName: 'content'}],
  researchSidebar: [{type: 'autogenerated', dirName: 'research'}],
  otherSidebar: [{type: 'autogenerated', dirName: 'other'}],
  xyvrSidebar: [{type: 'autogenerated', dirName: 'xyvr'}],
  hvrSidebar: [{type: 'autogenerated', dirName: 'hvr'}],

  legacyProductsSidebar: [
    {
      type: 'link',
      href: '/docs/products',
      label: 'Return to Products'
    },
    {
      '✈️ Legacy tools': [ // Reminder there are two placed needed to update this.
        "products/auto-reset-osc-config",
        "products/cloth-transfer",
        {
          "type": "category",
          "label": "ComboGestureExpressions",
          "items": [
            "products/combo-gesture-expressions/reference",
            "products/combo-gesture-expressions/v2.0-whats-new",
            "products/combo-gesture-expressions/v3.0-vcc",
            {
              "type": "category",
              "label": "Additional pages",
              "items": [
                "products/combo-gesture-expressions/additional-pages/corrections",
                "products/combo-gesture-expressions/additional-pages/integrator",
                "products/combo-gesture-expressions/additional-pages/tutorial",
                "products/combo-gesture-expressions/additional-pages/v2-animate-transforms",
                "products/combo-gesture-expressions/additional-pages/writedefaults"
              ]
            },
            "products/combo-gesture-expressions/convert-to-faceemo"
          ],
          "link": {
            "type": "doc",
            "id": "products/combo-gesture-expressions/index"
          }
        },
        {
          "type": "category",
          "label": "Constraint Track Animation Creator",
          "items": [
            "products/constraint-track-animation-creator/reference"
          ],
          "link": {
            "type": "doc",
            "id": "products/constraint-track-animation-creator/index"
          }
        },
        "products/expressions-menu-hierarchy-editor",
      ]
    }
  ],
  newProductsSidebar: [
    {
      type: 'link',
      href: '/docs/products',
      label: 'Return to Products'
    },
    {
      '🌊 Assistive tools': [ // Reminder there are two placed needed to update this.
        "products/animation-viewer",
        "products/blendshape-viewer",
        "products/blendtree-viewer",
        {
          "type": "category",
          "label": "Lightbox Viewer", // INDEX
          "items": [
            "products/lightbox-viewer/advanced"
          ],
          "link": {
            "type": "doc",
            "id": "products/lightbox-viewer/index"
          }
        },
        // "products/lightbox-viewer/index",
        "products/lightbox-viewer/urp",
        "products/property-finder",
        'products/transfer-assistant/index',
        "products/visual-expressions-editor",
      ]
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
