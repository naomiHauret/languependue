import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import AssetsLayout from "app/views/components/AssetsLayout"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import { charactersMetaTitle } from "app/routes"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

var previousItem = {
  src: null,
}

export default () => (state, actions) => {
  const metaTitle = charactersMetaTitle
  const key = "kcharacterspage"
  const assets = [
    {
      key: "pattefolle",
      name: "Patte Folle",
      previewSrc: `${require("assets/images/characters/pattefolle_preview.png")}`,
      previewSrcSet: `${require("assets/images/characters/pattefolle_preview.png")} 1x`,
      data: {
        text:
          "Patte Folle était un berger cosmique de Nemeth, à l’Ouest d’Acadia. Après avoir rencontré une vieille dame, Patte Folle fut maudit est transformé en centaure. D’un naturel fier et orgueilleux, il décida de se cacher en rejoignant, au début de la 1ère Guerre Cosmique, l’armée acadienne.",
        games: [
          {
            name: "Beyond The Lines",
            src: `${require("assets/images/games/beyond.jpg")}`,
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: `${require("assets/images/characters/pattefolle_gallery.png")}`,
          },
          {
            type: "img",
            src: `${require("assets/images/characters/pattefolle_preview.png")}`,
          },
        ],
        stats: [
          {
            name: "Force",
            value: 35,
          },
          {
            name: "Robustesse",
            value: 20,
          },
          {
            name: "Vitesse",
            value: 10,
          },
          {
            name: "Humour",
            value: 80,
          },
        ],
      },
    },
    {
      key: "languependue",
      name: "Langue Pendue",
      previewSrc: `${require("assets/images/characters/languependue_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/languependue_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        games: [
          {
            name: "Beyond The Lines",
            src: `${require("assets/images/games/beyond.jpg")}`,
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: `${require("assets/images/characters/languependue_preview.jpg")}`,
          },
        ],
        stats: [
          {
            name: "Force",
            value: 45,
          },
          {
            name: "Robustesse",
            value: 70,
          },
          {
            name: "Vitesse",
            value: 80,
          },
          {
            name: "Humour",
            value: 100,
          },
        ],
      },
    },
    {
      key: "princessvivianne",
      name: "Princesse Vivianne",
      previewSrc: `${require("assets/images/characters/princessvivianne_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/princessvivianne_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        games: [
          {
            name: "Beyond The Lines",
            src: `${require("assets/images/games/beyond.jpg")}`,
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: `${require("assets/images/characters/princessvivianne_preview.jpg")}`,
          },
        ],
        stats: [
          {
            name: "Force",
            value: 55,
          },
          {
            name: "Robustesse",
            value: 15,
          },
          {
            name: "Vitesse",
            value: 20,
          },
          {
            name: "Humour",
            value: 70,
          },
        ],
      },
    },
    {
      key: "ladyselwidge",
      name: "Dame Selwidge",
      previewSrc: `${require("assets/images/characters/ladyselwidge_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/ladyselwidge_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        games: [
          {
            name: "Beyond The Lines",
            src: `${require("assets/images/games/beyond.jpg")}`,
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: `${require("assets/images/characters/ladyselwidge_preview.jpg")}`,
          },
        ],
        stats: [
          {
            name: "Force",
            value: 25,
          },
          {
            name: "Robustesse",
            value: 40,
          },
          {
            name: "Vitesse",
            value: 100,
          },
          {
            name: "Humour",
            value: 30,
          },
        ],
      },
    },
  ]

  return (
    <Page state={state} actions={actions} metaTitle={metaTitle} key={key}>
      <div
        oncreate={(e) => {
          actions.resetAsset()
          document.querySelector("#page-exit").style.opacity = 1
          anime({ targets: e, opacity: [0, 1], time: 750, delay: 750, easing: "easeInOutSine" })
        }}
        class={cxs({ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 5 })}
      >
        <AssetsLayout
          modalVisible={state.assetModalVisible}
          currentAsset={state.asset}
          assets={assets}
          hoveredAsset={state.hoveredAsset}
          actions={actions}
          type="characters"
        />
      </div>
    </Page>
  )
}
