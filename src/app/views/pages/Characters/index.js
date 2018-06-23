import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import Container from "app/views/components/Container"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import { charactersMetaTitle } from "app/routes"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

export default () => (state, actions) => {
  const metaTitle = charactersMetaTitle
  const key = "kcharacterspage"
  const assets = [
    {
      name: "Patte Folle",
      src: "",
    },
    {
      name: "Languependue",
      src: "",
    },
    {
      name: "Princesse Viviane",
      src: "",
    },
    {
      name: "Dame Selwidge",
      src: "",
    },
  ]
  return (
    <Page state={state} actions={actions} metaTitle={metaTitle} key={key}>
      <div
        oncreate={(e) => {
          document.querySelector("#page-exit").style.opacity = 1
          anime({ targets: e, opacity: [0, 1], time: 750, delay: 750, easing: "easeInOutSine" })
        }}
      >
        <ul />
      </div>
    </Page>
  )
}
