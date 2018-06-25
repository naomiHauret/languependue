import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import AssetsLayout from "app/views/components/AssetsLayout"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import { placesMetaTitle } from "app/routes"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

var previousItem = {
  src: null,
}

export default () => (state, actions) => {
  const metaTitle = placesMetaTitle
  const key = "kplacespage"
  const assets = [
    {
      key: "fantasia",
      name: "Le Fantasia",
      previewSrc: `${require("assets/images/characters/languependue_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/languependue_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        place: "La Haute",
        games: [
          {
            name: "Beyond The Lines",
            src: "",
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: "",
          },
        ],
      },
    },
    {
      key: "layaye",
      name: "La Yaye",
      previewSrc: `${require("assets/images/characters/princessvivianne_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/princessvivianne_preview.jpg")} 1x`,
      data: {
        place: "Les Plaines",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        games: [
          {
            name: "Beyond The Lines",
            src: "",
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: "",
          },
        ],
      },
    },
    {
      key: "ledoube",
      name: "Le Doube",
      previewSrc: `${require("assets/images/characters/ladyselwidge_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/ladyselwidge_preview.jpg")} 1x`,
      data: {
        place: "Les Plaines",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        games: [
          {
            name: "Beyond The Lines",
            src: "",
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: "",
          },
        ],
      },
    },
    {
      key: "latolpa",
      name: "La Tolpa",
      previewSrc: `${require("assets/images/characters/languependue_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/languependue_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        place: "Les Plaines",
        games: [
          {
            name: "Beyond The Lines",
            src: "",
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: "",
          },
        ],
      },
    },
    {
      key: "antesang",
      name: "Mine d'Antésang",
      previewSrc: `${require("assets/images/characters/languependue_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/languependue_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        place: "Les Fosses",
        games: [
          {
            name: "Beyond The Lines",
            src: "",
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: "",
          },
        ],
      },
    },
    {
      key: "lesbasfonds",
      name: "Les Bas Fonds",
      previewSrc: `${require("assets/images/characters/languependue_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/languependue_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        place: "Les Fosses",
        games: [
          {
            name: "Beyond The Lines",
            src: "",
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: "",
          },
        ],
      },
    },
    {
      key: "lempire",
      name: "L'Empire",
      previewSrc: `${require("assets/images/characters/languependue_preview.jpg")}`,
      previewSrcSet: `${require("assets/images/characters/languependue_preview.jpg")} 1x`,
      data: {
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ex at dolor viverra porttitor id ornare risus. Nunc lacinia est pulvinar, cursus arcu ut, semper sapien. Sed malesuada ac metus eu sagittis. Maecenas quis purus id neque tristique egestas et sed ex. Pellentesque gravida nisi a nunc luctus, et faucibus nisi eleifend. In massa nisi, consequat non diam id, placerat cursus sapien. Vivamus rutrum ornare nisl, id pharetra metus ultricies vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla et interdum diam, nec eleifend leo.",
        place: "La Haute",
        games: [
          {
            name: "Beyond The Lines",
            src: "",
            href: "#",
          },
        ],
        gallery: [
          {
            type: "img",
            src: "",
          },
        ],
      },
    },
  ]

  return (
    <Page state={state} actions={actions} metaTitle={metaTitle} key={key}>
      <div
        oncreate={(e) => {
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
        />
      </div>
    </Page>
  )
}
