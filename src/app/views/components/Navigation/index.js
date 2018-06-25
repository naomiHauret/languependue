import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import { Link } from "@hyperapp/router"
import cxs from "cxs"
import Container from "app/views/components/Container"
import { homePageUrl } from "app/routes"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")
var previousItem = {
  src: null,
}

export default (props, children) => {
  const { links, location, menuVisible, hoveredMenuItem, actions } = props
  return (
    <div
      id="anime-nav-wrapper"
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
      oncreate={(e) => {
        anime({
          targets: e,
          translateX: ["100%", 0],
          duration: 450,
          easing: "easeInOutQuad",
        })
      }}
    >
      <nav
        class={cxs({
          width: `${(6 / 12) * 100}%`,
        })}
      >
        <ol
          id="nav-wrapper"
          oncreate={(e) =>
            anime({
              targets: document.querySelectorAll("#nav-wrapper li div"),
              translateX: {
                value: ["50%", 0],
                easing: "easeInOutQuad",
              },
              duration: 450,
              delay: (target, index) => {
                return index === 0 ? 150 : 150 + index * 50
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
                  marginRight: pxTo(15, baseFontSize, "em"),

                  "@media (min-width: 1199px) or (max-height: 799px)": {
                    ":not(:last-child)": {
                      marginRight: pxTo(30, baseFontSize, "em"),
                    },
                  },
                },
              },
              ":not(:last-child)": {
                fontSize: pxTo(ds.get("type.sizes.xm"), baseFontSize, "rem"),
                "@media (min-width: 1199px) or (min-height: 799px)": {
                  fontSize: pxTo(ds.get("type.sizes.lg"), baseFontSize, "rem"),
                },
                fontFamily: ds.get("type.fontFamily.black"),
                color: ds.get("colors.links.menu.default"),
                marginBottom: pxTo(85, baseFontSize, "rem"),
                display: "flex",
                alignItems: "center",
                padding: `${pxTo(5, baseFontSize, "em")} 0`,
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
                  actions.setHoveredMenuItem({ value })
                }
              }}
              onmouseenter={(e) => {
                if (links.length > 0) {
                  let el = links.filter((link) => link.key === e.target.getAttribute("data-nav") && link)[0]
                  let value = {
                    title: el.content.title,
                    text: el.content.text,
                    src: el.src,
                  }
                  if (
                    hoveredMenuItem === undefined ||
                    (hoveredMenuItem !== undefined && value.title !== hoveredMenuItem.title)
                  )
                    actions.setHoveredMenuItem({ value })
                }
              }}
            >
              <div
                onclick={(e) => {
                  e.target.nextSibling.click()
                  setTimeout(() => document.querySelector("[data-toggle='menu']").click(), 75)
                }}
                data-nav={el.key}
                to={el.href}
                class={cxs({
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  "::before": {
                    fontSize: pxTo(ds.get("type.sizes.md"), baseFontSize, "rem"),
                    cursor: "pointer",
                    content: "'0'counter(item)",
                    counterIncrement: "item",
                    display: "inline-block",
                    transform: "rotate(-90deg)",
                    marginRight: pxTo(90, baseFontSize, "rem"),
                  },
                })}
              >
                {el.abbr ? <abbr title={el.title}>{el.name}</abbr> : el.name}
              </div>
              <Link
                to={el.href}
                class={cxs({
                  display: "none",
                })}
              >
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
                  <li
                    class={cxs({
                      position: "relative",
                      ":not(:last-child)::after": {
                        content: "'•'",
                        color: "currentColor",
                        position: "absolute",
                        top: 0,
                        right: pxTo(-20, baseFontSize, "em"),
                      },
                    })}
                  >
                    <div
                      class={cxs({
                        width: "100%",
                        height: "100%",
                      })}
                      onclick={(e) => {
                        e.target.nextSibling.click()
                        setTimeout(() => document.querySelector("[data-toggle='menu']").click(), 75)
                      }}
                    >
                      {el.abbr ? (
                        <small>
                          <abbr title={el.title}>{el.name}</abbr>
                        </small>
                      ) : (
                        <small>{el.name}</small>
                      )}
                    </div>
                    <Link
                      to={el.href}
                      class={cxs({
                        display: "none",
                      })}
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ol>
      </nav>
      {hoveredMenuItem !== null &&
        hoveredMenuItem !== undefined && (
          <aside
            class={cxs({
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
                  position: "relative",
                  "> img": {
                    width: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  },
                })}
              >
                <img
                  class={cxs({
                    height: "100%",
                  })}
                  onupdate={(e) => {
                    anime({
                      targets: e,
                      opacity: [1, 0],
                      translateX: [0, -5],
                      duration: 550,
                      easing: "easeInOutSine",
                    })
                  }}
                  src={previousItem.src !== null ? previousItem.src : ""}
                  alt=""
                />
                <img
                  class={cxs({
                    width: "100%",
                    objectFit: "cover",
                  })}
                  id="src-preview"
                  oncreate={(e) => {
                    previousItem.src = hoveredMenuItem.src
                    anime({
                      targets: e,
                      height: [0, "100%"],
                      duration: 550,
                      easing: "easeInOutQuad",
                    })
                  }}
                  onupdate={(e) => {
                    anime({
                      targets: e,
                      opacity: [0, 1],
                      translateX: [-5, 0],
                      duration: 550,
                      easing: "easeInOutSine",
                    })
                    previousItem.src = hoveredMenuItem.src
                    previousItem.srcset = hoveredMenuItem.srcset
                  }}
                  src={hoveredMenuItem.src}
                  srcset={hoveredMenuItem.srcset}
                  alt=""
                />
              </div>
              <figcaption
                class={cxs({
                  paddingLeft: pxTo(60, baseFontSize, "rem"),
                })}
              >
                <b
                  id="title-preview"
                  class={cxs({
                    display: "block",
                    fontFamily: ds.get("type.fontFamily.bold"),
                    textTransform: "uppercase",
                    fontSize: pxTo(ds.get("type.fontSize.sm"), baseFontSize, "rem"),
                    marginBottom: pxTo(10, baseFontSize, "rem"),
                  })}
                  onupdate={(e) =>
                    anime({
                      targets: e,
                      translateY: [25, 0],
                      opacity: [0, 1],
                      duration: 500,
                      delay: 320,
                      easing: "easeInOutQuad",
                    })
                  }
                  oncreate={(e) =>
                    anime({
                      targets: e,
                      translateY: [25, 0],
                      opacity: [0, 1],
                      duration: 500,
                      delay: 320,
                      easing: "easeInOutQuad",
                    })
                  }
                >
                  {hoveredMenuItem.title}
                </b>
                <p
                  id="text-preview"
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
                      translateY: [30, 0],
                      opacity: [0, 1],
                      duration: 550,
                      delay: 450,
                      easing: "easeInOutQuad",
                    })
                  }
                  onupdate={(e) =>
                    anime({
                      targets: e,
                      translateY: [30, 0],
                      opacity: [0, 1],
                      duration: 550,
                      delay: 450,
                      easing: "easeInOutQuad",
                    })
                  }
                >
                  {hoveredMenuItem.text}
                </p>
              </figcaption>
            </figure>
          </aside>
        )}
    </div>
  )
}
