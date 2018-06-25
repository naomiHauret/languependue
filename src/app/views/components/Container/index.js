import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"

const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => {
  const {
    background,
    grow,
    align,
    justify,
    margin,
    zIndex,
    overflow,
    overflowX,
    overflowY,
    direction,
    top,
    left,
    right,
    bottom,
    position,
    height,
    transform,
  } = props
  return (
    <div
      class={cxs({
        display: "flex",
        flexDirection: direction ? direction : "column",
        maxWidth: ds.get("grid.width.xs"),
        flexGrow: grow ? grow : 0,
        alignItems: align ? align : "initial",
        justifyContent: justify ? justify : "initial",
        margin: margin ? margin : 0,
        zIndex: zIndex ? zIndex : "initial",
        overflow: overflow ? overflow : "initial",
        overflowX: overflowX ? overflowX : "initial",
        overflowY: overflowY ? overflowY : "initial",
        top: top ? top : "initial",
        bottom: bottom ? bottom : "initial",
        left: left ? left : "initial",
        right: right ? right : "initial",
        position: position ? position : "initial",
        height: height ? height : "initial",
        background: background ? background : "initial",
        transform: transform ? transform : "initial",
        "@media (min-width: 768px)": {
          width: pxTo(ds.get("grid.width.sm"), baseFontSize, "rem"),
          margin: "0 auto",
        },
        "@media (min-width: 992px)": {
          width: pxTo(ds.get("grid.width.md"), baseFontSize, "rem"),
        },
        "@media (min-width: 1200px)": {
          width: pxTo(ds.get("grid.width.lg"), baseFontSize, "rem"),
        },
        "@media (min-width: 1365px)": {
          width: pxTo(ds.get("grid.width.xl"), baseFontSize, "rem"),
        },
        "@media (min-width: 1919px)": {
          width: pxTo(ds.get("grid.width.xxl"), baseFontSize, "rem"),
        },
      })}
      {...props}
    >
      {children}
    </div>
  )
}
