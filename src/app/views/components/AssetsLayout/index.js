import { h } from "hyperapp"
import Container from "app/views/components/Container"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

var previousItem = {
  src: null,
}

export default (props) => {
  const { actions, hoveredAsset, assets, modalVisible, currentAsset, type } = props
  return (
    <Container align="center">
      <ul
        tabindex="0"
        autofocus
        class={cxs({
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          paddingBottom: `${pxTo(20, baseFontSize, "rem")} !important`,
          overflowX: "auto",
          overflowY: "hidden",
          overflowX: "auto",
          pointerEvents: "none",
          ":after": {
            content: "' '",
            display: "block",
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundColor: ds.get("colors.backgrounds.dark"),
            top: 0,
            left: 0,
            opacity: 0.3,
            pointerEvents: "none",
            zIndex: 1,
          },
          "::-webkit-scrollbar": {
            height: pxTo(2, baseFontSize, "rem"),
            width: pxTo(347, baseFontSize, "rem"),
            backgroundColor: ds.get("colors.borders.dark"),
            borderRadius: pxTo(5, baseFontSize, "rem"),
          },

          "::-webkit-scrollbar-thumb": {
            borderRadius: pxTo(5, baseFontSize, "rem"),
            backgroundColor: ds.get("colors.borders.colorful"),
          },
        })}
        oncreate={(e) =>
          anime({
            targets: e.children,
            opacity: [0, 1],
            translateY: [55, 0],
            duration: 1350,
            zIndex: 2,
            easing: "easeInOutBack",
            delay: (target, index) => {
              return index === 0 ? 1325 : 1325 + index * 50
            },
            elasticity: (target, index, totalTargets) => {
              return 200 + (totalTargets - index) * 200
            },
            complete: () =>
              setTimeout(() => {
                document.querySelector("[data-target='assetslist']").style.pointerEvents = "auto"
              }, 350),
          })
        }
        data-target="assetslist"
        onmouseover={(e) => {
          e.clientX <= 0.15 * window.innerWidth &&
            document.querySelector("[data-target='assetslist']").scrollBy(50, 0, "smooth")
          e.clientX >= 0.85 * window.innerWidth &&
            document.querySelector("[data-target='assetslist']").scrollBy(50, 0, "smooth")
        }}
      >
        {assets.map((asset, i) => (
          <li
            key={`asset-list-${i}-${asset.key}`}
            class={cxs({
              display: "flex",
              width: pxTo(310, baseFontSize, "rem"),
              height: pxTo(320, baseFontSize, "rem"),
              alignItems: "center",
              flexGrow: 0,
              flexShrink: 0,
              justifyContent: "center",
              overflow: "visible",

              "::before": {
                content: "'•'",
                color: "currentColor",
                zIndex: 2,
              },
              ":last-child::after": {
                content: "'•'",
                color: "currentColor",
                zIndex: 2,
              },
            })}
          >
            <div
              id={`anime-${asset.key}-wrapper`}
              class={cxs({
                width: "100%",
                height: pxTo(313, baseFontSize, "rem"),
                display: "flex",
                position: "relative",
                zIndex: 2,
                ":hover": {
                  "> svg": {
                    opacity: 1,
                    color: ds.get("colors.texts.action"),
                  },
                },
              })}
            >
              <svg
                class={cxs({
                  position: "absolute",
                  left: "-5px",
                  top: 0,
                  pointerEvents: "none",
                  transition: "450ms ease-in-out all",
                  opacity: 0,
                })}
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                width="312"
                height="312"
              >
                <path fill="none" stroke-width="2" d="M1 156a155 155 0 1 0 310 0 155 155 0 1 0-310 0" />
              </svg>
              <button
                onmouseenter={() => {
                  if (
                    hoveredAsset === undefined ||
                    hoveredAsset === null ||
                    (hoveredAsset !== undefined && asset.key !== hoveredAsset.key)
                  )
                    actions.setHoveredAsset({ value: asset })
                }}
                onfocusin={() => actions.setHoveredAsset({ value: asset })}
                onclick={() => actions.toggleAsset({ asset, visible: true })}
                class={cxs({
                  backgroundColor: "transparent",
                  border: 0,
                  width: "100%",
                  height: "100%",
                  color:
                    hoveredAsset !== undefined && hoveredAsset !== null && hoveredAsset.key === asset.key
                      ? ds.get("colors.texts.action")
                      : "inherit",
                  fontFamily: ds.get("type.fontFamily.bold"),
                  fontSize: pxTo(baseFontSize, baseFontSize, "rem"),
                  letterSpacing: pxTo(2, baseFontSize, "em"),
                  cursor: "pointer",
                  transition: "all 450ms ease-in-out",
                  ":hover": {
                    color: ds.get("colors.texts.action"),
                  },
                  ":focus": {
                    color: ds.get("colors.texts.action"),
                  },
                })}
              >
                <div>{asset.name}</div>
                {asset.data.place && (
                  <div
                    class={cxs({
                      marginTop: pxTo(10, baseFontSize, "rem"),
                      fontFamily: ds.get("type.fontFamily.base"),
                      fontSize: pxTo(ds.get("type.fontSize.xs"), baseFontSize, "rem"),
                      textTransform: "none",
                    })}
                  >
                    {asset.data.place}
                  </div>
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {hoveredAsset !== null &&
        hoveredAsset !== undefined && (
          <div
            class={cxs({
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 0,
              "> img": {
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                top: 0,
                left: 0,
              },
            })}
          >
            <img
              onupdate={(e) => {
                anime({ targets: e, opacity: [1, 0], scale: [1.05, 1], duration: 850, easing: "easeInOutSine" })
              }}
              src={previousItem.src !== null ? previousItem.src : ""}
              alt=""
            />
            <img
              class={cxs({ width: "100%", objectFit: "cover" })}
              oncreate={(e) => {
                previousItem.src = hoveredAsset.previewSrc
                anime({ targets: e, opacity: [0, 1], scale: [1.05, 1], duration: 850, easing: "easeInOutSine" })
              }}
              onupdate={(e) => {
                anime({ targets: e, opacity: [0, 1], scale: [1.05, 1], duration: 850, easing: "easeInOutSine" })
                previousItem.src = hoveredAsset.previewSrc
                previousItem.srcset = hoveredAsset.previewSrcset
              }}
              src={hoveredAsset.previewSrc}
              srcset={hoveredAsset.previewSrcset}
              alt=""
            />
          </div>
        )}
      {modalVisible === true &&
        currentAsset !== undefined &&
        currentAsset !== null && (
          <div
            oncreate={(e) => {
              anime({ targets: e, translateY: ["100vh", 0], duration: 650, easing: "easeInOutQuad" })
            }}
            class={cxs({
              position: "absolute",
              height: "100vh",
              width: "93.05%",
              display: "flex",
              right: 0,
              top: 0,
              backgroundColor: ds.get("colors.backgrounds.dark"),
              zIndex: 10,
              alignItems: "center",
            })}
            id="asset-modal"
          >
            <div
              class={cxs({
                width: `${(1 / 12) * 100}%`,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              })}
            >
              <button
                oncreate={(e) => {
                  anime({
                    targets: e,
                    opacity: [0, 1],
                    translateY: [60, 0],
                    duration: 450,
                    delay: 450,
                    easing: "easeInOutQuad",
                  })
                }}
                class={cxs({
                  width: "100%",
                  height: "100%",
                  border: 0,
                  color: "currentColor",
                  backgroundColor: "transparent",
                  textTransform: "uppercase",
                  fontFamily: ds.get("type.fontFamily.bold"),
                  fontSize: pxTo(ds.get("type.fontSize.xs"), baseFontSize, "rem"),
                  letterSpacing: pxTo(1.6, baseFontSize, "em"),
                  ":hover > div": {
                    transform: "rotate(-90deg) translateX(-45%)",
                  },
                })}
                onclick={(e) => {
                  anime({
                    targets: "#asset-modal",
                    translateY: [0, "100vh"],
                    duration: 650,
                    easing: "easeInOutQuad",
                    complete: () => {
                      actions.toggleAsset({ asset: null, visible: false })
                    },
                  })
                }}
              >
                <div
                  class={cxs({
                    transform: "rotate(-90deg)",
                    whiteSpace: "nowrap",
                    transition: "550ms ease-in-out all",
                  })}
                >
                  <svg
                    class={cxs({
                      transform: "translateX(-10px) rotate(-90deg)",
                    })}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="nonzero"
                      d="M12 6a.878.878 0 0 0-.212-.538L7.092.505C6.818.181 6.291.187 5.982.48c-.308.293-.333.81-.023 1.102L9.4 5.217H.783a.783.783 0 0 0 0 1.566h8.616l-3.44 3.635c-.31.291-.285.812.024 1.104.308.293.843.294 1.11-.027l4.695-4.957A.762.762 0 0 0 12 6z"
                    />
                  </svg>
                  Retour aux {type === "characters" ? "personnages" : "lieux"}
                </div>
              </button>
            </div>
            <div
              oncreate={(e) => {
                anime({
                  targets: e,
                  opacity: [0, 1],
                  translateY: [50, 0],
                  duration: 500,
                  delay: 480,
                  easing: "easeInOutQuad",
                })
              }}
              class={cxs({
                width: `${(5 / 12) * 100}%`,
                "@media (min-width: 1440px)": {
                  width: `${(7 / 12) * 100}%`,
                },
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginLeft: pxTo(-30, baseFontSize, "rem"),
              })}
            >
              <ul
                class={cxs({
                  height: "100%",
                  width: "100%",
                  maxWidth: pxTo(440, baseFontSize, "rem"),
                  display: "flex",
                })}
              >
                {currentAsset.data.gallery.map((item) => (
                  <li
                    class={cxs({
                      margin: "auto 0 !important",
                      ":not(:first-child)": {
                        display: "none",
                      },
                    })}
                  >
                    <div
                      class={cxs({
                        width: "100%",
                      })}
                    >
                      {item.type === "img" && (
                        <img
                          class={cxs({
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          })}
                          src={item.src}
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              class={cxs({
                paddingLeft: pxTo(30, baseFontSize, "rem"),
                width: `${(6 / 12) * 100}%`,
                borderLeft: `solid ${pxTo(1, baseFontSize, "rem")} ${ds.get("colors.borders.dark")}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                wordBreak: "break-word",
                overflowY: "auto",
                maxHeight: "100vh",
                paddingTop: pxTo(430, baseFontSize, "rem"),
                paddingRight: pxTo(50, baseFontSize, "rem"),
                paddingBottom: pxTo(130, baseFontSize, "rem"),
                flexGrow: 1,
                "@media (min-height: 800px)": {
                  paddingTop: pxTo(230, baseFontSize, "rem"),
                },
                "@media (min-width: 1440px)": {
                  width: `${(3 / 12) * 100}%`,
                },
                "::-webkit-scrollbar": {
                  height: pxTo(15, baseFontSize, "rem"),
                  width: pxTo(5, baseFontSize, "rem"),
                  backgroundColor: ds.get("colors.borders.dark"),
                  borderRadius: pxTo(5, baseFontSize, "rem"),
                },

                "::-webkit-scrollbar-thumb": {
                  borderRadius: pxTo(5, baseFontSize, "rem"),
                  backgroundColor: ds.get("colors.borders.colorful"),
                },
              })}
            >
              <h2
                class={cxs({
                  fontFamily: ds.get("type.fontFamily.black"),
                  fontSize: pxTo(ds.get("type.sizes.xm"), baseFontSize, "rem"),
                  "@media (min-width: 1200px)": {
                    fontSize: pxTo(ds.get("type.sizes.xl"), baseFontSize, "rem"),
                  },
                })}
              >
                <div
                  oncreate={(e) => {
                    anime({
                      targets: e,
                      opacity: [0, 1],
                      translateY: [70, 0],
                      duration: 550,
                      delay: 455,
                      easing: "easeInOutQuad",
                    })
                  }}
                  class={cxs({ letterSpacing: "8px" })}
                >
                  {currentAsset.name}
                </div>
                {currentAsset.data.place && (
                  <div
                    class={cxs({
                      marginTop: pxTo(25, baseFontSize, "em"),
                      fontSize: `${pxTo(baseFontSize, baseFontSize, "rem")} !important`,
                      letterSpacing: `${pxTo(1, baseFontSize, "rem")} !important`,
                    })}
                    oncreate={(e) => {
                      anime({
                        targets: e,
                        opacity: [0, 1],
                        translateY: [60, 0],
                        duration: 450,
                        delay: 500,
                        easing: "easeInOutQuad",
                      })
                    }}
                  >
                    Acadia {currentAsset.data.place}
                  </div>
                )}
              </h2>
              <div
                class={cxs({
                  marginTop: pxTo(35, baseFontSize, "rem"),
                  fontSize: pxTo(ds.get("type.sizes.regular"), baseFontSize, "rem"),
                  fontFamily: ds.get("type.fontFamily.base"),
                })}
              >
                <p
                  oncreate={(e) => {
                    anime({
                      targets: e,
                      opacity: [0, 1],
                      translateY: [60, 0],
                      duration: 450,
                      delay: 550,
                      easing: "easeInOutQuad",
                    })
                  }}
                  class={cxs({ lineHeight: pxTo(25, baseFontSize, "em") })}
                >
                  {currentAsset.data.text}
                </p>

                {currentAsset.data.stats && (
                  <ul
                    class={cxs({
                      marginTop: pxTo(50, baseFontSize, "rem"),
                    })}
                    oncreate={(e) => {
                      anime({
                        targets: e,
                        opacity: [0, 1],
                        translateY: [60, 0],
                        duration: 450,
                        delay: 550,
                        easing: "easeInOutQuad",
                      })
                      anime({
                        targets: e.children,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 415,
                        easing: "easeInOutQuad",
                        delay: (target, index) => {
                          return index === 0 ? 550 : 550 + index * 50
                        },
                        elasticity: (target, index, totalTargets) => {
                          return 200 + (totalTargets - index) * 200
                        },
                      })
                    }}
                  >
                    {currentAsset.data.stats.map((stat) => (
                      <li
                        class={cxs({
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "center",
                          ":not(:first-child)": {
                            marginTop: pxTo(10, baseFontSize, "rem"),
                          },
                        })}
                      >
                        <div>{stat.name}</div>
                        <progress
                          oncreate={(e) =>
                            anime({
                              targets: e,
                              value: [0, stat.value],
                              easing: "easeInOutExpo",
                              duration: 650,
                              delay: 625,
                            })
                          }
                          max="100"
                          value={stat.value}
                          class={cxs({
                            "[value]": {
                              height: pxTo(5, baseFontSize, "rem"),
                              backgroundColor: ds.get("colors.progress.bar"),

                              "::-webkit-progress-bar": {
                                backgroundColor: ds.get("colors.progress.bar"),
                                borderRadius: pxTo(5, baseFontSize, "rem"),
                              },
                              "::-webkit-progress-value": {
                                backgroundColor: ds.get("colors.progress.value"),
                                borderRadius: pxTo(5, baseFontSize, "rem"),
                                boxShadow: `0 0 ${pxTo(5, baseFontSize, "rem")} ${pxTo(
                                  1,
                                  baseFontSize,
                                  "rem",
                                )} ${ds.get("colors.progress.value")}`,
                              },
                            },
                          })}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                class={cxs({
                  marginTop: pxTo(50, baseFontSize, "rem"),
                })}
              >
                <ul
                  class={cxs({
                    display: "flex",
                    flexWrap: "wrap",
                    wordBreak: "break-word",
                    fontFamily: ds.get("type.fontFamily.black"),
                    textTransform: "uppercase",
                    fontSize: pxTo(ds.get("type.sizes.regular"), baseFontSize, "rem"),
                    letterSpacing: pxTo(0.9, baseFontSize, "rem"),
                  })}
                  oncreate={(e) => {
                    anime({
                      targets: e.children,
                      opacity: [0, 1],
                      translateY: [30, 0],
                      duration: 420,
                      easing: "easeInOutQuad",
                      delay: (target, index) => {
                        return index === 0 ? 670 : 670 + index * 50
                      },
                      elasticity: (target, index, totalTargets) => {
                        return 200 + (totalTargets - index) * 200
                      },
                    })
                  }}
                >
                  {currentAsset.data.games.map((game) => (
                    <li>
                      <div
                        class={cxs({
                          width: pxTo(124, baseFontSize, "rem"),
                          height: pxTo(124, baseFontSize, "rem"),
                          marginBottom: pxTo(15, baseFontSize, "rem"),
                        })}
                      >
                        <img
                          class={cxs({
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          })}
                          src={game.src}
                        />
                      </div>
                      <div>{game.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
    </Container>
  )
}
