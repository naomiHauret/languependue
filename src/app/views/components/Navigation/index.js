import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import { Link } from "@hyperapp/router"
import cxs from "cxs"
import Container from "app/views/components/Container"
import { homePageUrl } from "app/routes"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => {
  const { links, location, menuVisible, hoveredItem, actions } = props
  return (
    <div
      class={cxs({
        position: "fixed",
        zIndex: 10,
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: ds.get("colors.backgrounds.dark"),
        paddingLeft: pxTo(130, baseFontSize, "rem"),
        display: "flex",
      })}
    >
      <nav>
        <ol
          oncreate={(e) =>
            anime({
              targets: e.children,
              opacity: {
                value: [0, 1],
                easing: "easeInOutQuad",
              },
              translateX: {
                value: [60, 0],
                easing: "easeInOutBack",
              },
              duration: 850,
              delay: (target, index) => {
                return index === 0 ? 350 : 350 + index * 150
              },
              elasticity: (target, index, totalTargets) => {
                return 200 + (totalTargets - index) * 200
              },
            })
          }
          class={cxs({
            textTransform: "uppercase",
            paddingTop: pxTo(75, baseFontSize, "rem"),
            paddingBottom: pxTo(55, baseFontSize, "rem"),
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            counterReset: "item",
            listStyleType: "none",
            "> li": {
              transition: "all 650ms ease-in-out",
              position: "relative",
              overflow: "hidden",
              ":last-child": {
                marginTop: pxTo(45, baseFontSize, "rem"),
                fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
                fontFamily: ds.get("type.fontFamily.bold"),
                color: ds.get("colors.links.menu.aside"),
                letterSpacing: pxTo(0.8, baseFontSize, "rem"),
                "> ul li": {
                  transition: "all 650ms ease-in-out",
                  ":not(:last-child)": {
                    marginRight: pxTo(30, baseFontSize, "em"),
                  },
                },
              },
              ":not(:last-child)": {
                fontSize: pxTo(ds.get("type.sizes.xm"), baseFontSize, "rem"),
                fontFamily: ds.get("type.fontFamily.black"),
                color: ds.get("colors.links.menu.default"),
                marginBottom: pxTo(85, baseFontSize, "rem"),
                display: "flex",
                alignItems: "center",
                padding: `${pxTo(5, baseFontSize, "em")} 0`,
                "::before": {
                  fontSize: pxTo(ds.get("type.sizes.md"), baseFontSize, "rem"),
                  content: "'0'counter(item)",
                  counterIncrement: "item",
                  display: "inline-block",
                  transform: "rotate(-90deg)",
                  marginRight: pxTo(90, baseFontSize, "rem"),
                },
                "::after": {
                  transition: "all 250ms ease-in-out",
                  content: "' '",
                  position: "absolute",
                  width: pxTo(1, baseFontSize, "rem"),
                  height: "100%",
                  left: pxTo(70, baseFontSize, "rem"),
                  top: 0,
                  backgroundColor: ds.get("colors.links.menu.active"),
                  transform: "translateY(105%)",
                },
              },
              ":focus-within": {
                ":last-child": {
                  "> ul li:hover": {
                    color: ds.get("colors.links.menu.active"),
                  },
                },
                ":not(:last-child)": {
                  color: ds.get("colors.links.menu.active"),
                  "::after": {
                    transform: "translateY(0)",
                  },
                },
              },
              ":hover": {
                ":last-child": {
                  "> ul li:hover": {
                    color: ds.get("colors.links.menu.active"),
                  },
                },
                ":not(:last-child)": {
                  color: ds.get("colors.links.menu.active"),
                  "::after": {
                    transform: "translateY(0)",
                  },
                },
              },
            },
          })}
        >
          {links.filter((link) => link.secondary === false).map((el) => (
            <li
              data-nav={el.key}
              onfocusin={(e) => {
                e.preventDefault()
                if (links.length > 0) {
                  let el = links.filter((link) => link.key === e.target.getAttribute("data-nav") && link)[0]
                  let value = {
                    title: el.content.title,
                    text: el.content.text,
                    src: el.src,
                  }
                  actions.setHoveredItem({ value })
                }
              }}
              onfocusout={(e) => {
                e.preventDefault()
                actions.setHoveredItem({ value: null })
              }}
              onmouseenter={(e) => {
                e.preventDefault()
                if (links.length > 0) {
                  let el = links.filter((link) => link.key === e.target.getAttribute("data-nav") && link)[0]
                  let value = {
                    title: el.content.title,
                    text: el.content.text,
                    src: el.src,
                  }
                  actions.setHoveredItem({ value })
                }
              }}
              onmouseleave={(e) => {
                e.preventDefault()
                actions.setHoveredItem({ value: null })
              }}
            >
              <Link data-nav={el.key} to={el.href}>
                {el.abbr ? <abbr title={el.title}>{el.name}</abbr> : el.name}
              </Link>
            </li>
          ))}
          {links.filter((link) => link.secondary === true).length > 0 && (
            <li>
              <ul
                class={cxs({
                  display: "flex",
                })}
              >
                {links.filter((link) => link.secondary === true).map((el) => (
                  <li>
                    <Link to={el.href}>
                      {el.abbr ? (
                        <small>
                          <abbr title={el.title}>{el.name}</abbr>
                        </small>
                      ) : (
                        <small>{el.name}</small>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ol>
      </nav>
      {hoveredItem !== null &&
        hoveredItem !== undefined && (
          <aside
            class={cxs({
              marginLeft: pxTo(130, baseFontSize, "rem"),
              flexGrow: 1,
            })}
          >
            <figure
              class={cxs({
                display: "flex",
                alignItems: "flex-end",
              })}
            >
              <div
                class={cxs({
                  width: pxTo(370, baseFontSize, "rem"),
                  height: "100vh",
                })}
              >
                <img
                  class={cxs({
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  })}
                  src={hoveredItem.src}
                  alt=""
                />
              </div>
              <figcaption>
                <b
                  class={cxs({
                    display: "block",
                    fontFamily: ds.get("type.fontFamily.bold"),
                    textTransform: "uppercase",
                    fontSize: pxTo(ds.get("type.fontSize.sm"), baseFontSize, "rem"),
                    marginBottom: pxTo(10, baseFontSize, "rem"),
                  })}
                  oncreate={(e) =>
                    anime({
                      targets: e,
                      translateY: [25, 0],
                      opacity: [0, 1],
                      duration: 850,
                      delay: 120,
                      easing: "easeInOutQuad",
                    })
                  }
                >
                  {hoveredItem.title}
                </b>
                <p
                  class={cxs({
                    fontFamily: ds.get("type.fontFamily.base"),
                    color: ds.get("colors.texts.muted"),
                    lineHeight: 1.57,
                    fontSize: pxTo(ds.get("type.fontSize.xs"), baseFontSize, "rem"),
                    paddingBottom: pxTo(60, baseFontSize, "rem"),
                  })}
                  oncreate={(e) =>
                    anime({
                      targets: e,
                      translateY: [25, 0],
                      opacity: [0, 1],
                      duration: 750,
                      delay: 250,
                      easing: "easeInOutQuad",
                    })
                  }
                >
                  {hoveredItem.text}
                </p>
              </figcaption>
            </figure>
          </aside>
        )}
    </div>
  )
}
