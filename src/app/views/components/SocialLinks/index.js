import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"

const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => {
  const { links } = props

  return (
    <ul
      class={cxs({
        color: "inherit",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      })}
    >
      {links.map((link) => (
        <li
          class={cxs({
            transition: "all 450ms ease-in-out",
            ":not(:first-child)": {
              marginLeft: pxTo(25, baseFontSize, "rem"),
            },
            ":hover": {
              color: ds.get("colors.links.socials.active"),
            },
            ":focus": {
              color: ds.get("colors.links.socials.active"),
            },
            ":active": {
              color: ds.get("colors.links.socials.active"),
            },
          })}
        >
          <a href={link.href} title={link.title} class={cxs({ color: "inherit" })}>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
