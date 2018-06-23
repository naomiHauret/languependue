import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import Container from "app/views/components/Container"
import BackgroundTitle from "app/views/components/BackgroundTitle"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => (state, actions) => {
  return (
    <h1
      class={cxs({
        content: "Acadia City",
        color: ds.get("colors.texts.backgroundTitle"),
        fontSize: pxTo(ds.get("type.sizes.xxl"), baseFontSize, "rem"),
        fontFamily: ds.get("type.fontFamily.black"),
      })}
    >
      {children}
    </h1>
  )
}
