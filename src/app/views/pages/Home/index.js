import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import { Link } from "@hyperapp/router"
import Container from "app/views/components/Container"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import { homeMetaTitle } from "app/routes"
import anime from "animejs"
import background from "assets/videos/background.mp4"
import { cityPageUrl } from "../../../routes"

const baseFontSize = ds.get("type.sizes.base")
var loadingAnimation
var discoverButtonAnimation
var backgroundLoadingAnimation
var passTrailerAnimation

export default () => (state, actions) => {
  const metaTitle = homeMetaTitle
  const key = "khome"
  const videoId = "Dm3JnFtSb8E"
  const id = `cover-${videoId}`

  return (
    <Page state={state} actions={actions} metaTitle={homeMetaTitle} key={key}>
      <Container grow={1} zIndex={1} align="center" justify="center">
        <div class={cxs({ marginTop: "auto", marginBottom: state.playIntro === false ? 0 : "auto" })}>
          <svg
            id="logo-wrapper"
            width="211"
            height="179"
            xmlns="http://www.w3.org/2000/svg"
            class={cxs({
              transform: state.playIntro === true ? "translateY(-60px)" : 0,
              overflow: "visible",
            })}
          >
            <g fill-rule="nonzero">
              <path
                onupdate={(e) =>
                  anime({
                    targets: e,
                    translateY: [0, -20],
                    opacity: [1, 0],
                    easing: "easeInOutSine",
                    duration: 850,
                    delay: 0,
                  })
                }
                data-animate="logo"
                class={cxs({ transition: "fill 1250ms ease-in-out" })}
                oncreate={(e) => {
                  loadingAnimation = anime({
                    targets: e,
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: "easeInOutSine",
                    duration: 1450,
                    direction: "alternate",
                    loop: true,
                    autoplay: false,
                  })
                  loadingAnimation.play()
                }}
                fill="transparent"
                d="M55.831 94.317L91.038 1H71.704L19.182 137.919h21.93s18.036-34.583 50.503-41.278c3.75-11.048 13.854-39.825 13.854-39.825l21.642 52.035s-47.2-14.389-69.838 29.05c22.656.145 22.512 0 22.512 0s7.644-14.243 28.569-14.243c21.93 0 29.718 14.243 29.718 14.243h17.603L113.257 36.173l5.485-17.73 53.916 119.665 19.96-.194L129.13 1h-24.242l-28.28 80.817s-10.389 3.195-20.777 12.5z"
                stroke="#FFF"
                stroke-width=".8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                onupdate={(e) =>
                  anime({
                    targets: e,
                    translateY: [0, -20],
                    opacity: [1, 0],
                    easing: "easeInOutSine",
                    duration: 850,
                    delay: 150,
                  })
                }
                class={cxs({
                  transition: "fill 750ms ease-in-out",
                  transitionDelay: "750ms",
                })}
                data-animate="logoTitle"
                fill="transparent"
                d="M13.53 160.588L20.78 179h-5.666l-1.026-2.582h-7.37L5.68 178.97H0l7.45-18.411 6.08.03zm-4.725 10.727h3.307l-1.63-4.143-1.677 4.143zM50.125 178.999c-4.238-.002-7.947-2.805-9.044-6.834-1.096-4.029.692-8.281 4.36-10.369 3.67-2.087 8.306-1.49 11.305 1.457l-3.685 3.627a4.215 4.215 0 0 0-4.541-.893 4.1 4.1 0 0 0-2.574 3.79 4.1 4.1 0 0 0 2.574 3.79 4.215 4.215 0 0 0 4.54-.894l3.686 3.628a9.098 9.098 0 0 1-6.621 2.698zM92.654 160.559L99.905 179H94.24l-1.012-2.556h-7.384L84.804 179h-5.679l7.454-18.441h6.075zm-4.746 10.743h3.307l-1.643-4.14-1.664 4.14zM140.667 169.777c-.015 5.086-4.298 9.207-9.587 9.223h-7.997v-18.441h7.997c5.288.014 9.572 4.133 9.587 9.218zm-12.259 4.103h2.658c2.357 0 4.267-1.837 4.267-4.103s-1.91-4.102-4.267-4.102h-2.658v8.205zM163.045 160.559h5.595V179h-5.595zM203.75 160.588L211 179h-5.66l-1.035-2.582h-7.364l-1.039 2.552h-5.682l7.447-18.411 6.083.03zm-4.727 10.727h3.301l-1.624-4.143-1.677 4.143z"
              />
            </g>
          </svg>
        </div>
        {state.playIntro === true && (
          <div
            class={cxs({
              fontFamily: ds.get("type.fontFamily.black"),
              fontSize: pxTo(baseFontSize, baseFontSize, "rem"),
              letterSpacing: pxTo(1, baseFontSize, "rem"),
              textTransform: "uppercase",
              position: "absolute",
              textAlign: "center",
              top: "50%",
              left: "50%",
              margin: "0 !important",
              transform: "translate(-50%, -50%) !important",
              lineHeight: 1.39,
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
              "> p": {
                width: "100%",
                position: "absolute",
                transition: "all 750ms ease-in-out",
                opacity: 0,
                letterSpacing: pxTo(1, baseFontSize, "em"),
              },
            })}
          >
            <p
              oncreate={(e) =>
                anime({
                  targets: e,
                  opacity: [1, 1, 1, 0],
                  duration: 5300,
                  easing: "easeInOutBack",
                  delay: 250,
                })
              }
            >
              La ville la plus importante du monde, icône du progrès,<br /> de la science et de la technologie …
            </p>
            <p
              oncreate={(e) =>
                anime({
                  targets: e,
                  opacity: [1, 1, 1, 0],
                  duration: 5800,
                  easing: "easeInOutBack",
                  delay: 6000,
                })
              }
            >
              Une ville où le danger <br /> et la corruption rôdent...
            </p>
            <p
              oncreate={(e) =>
                anime({
                  targets: e,
                  opacity: [1, 1, 1, 0],
                  duration: 6200,
                  easing: "easeInOutBack",
                  delay: 12000,
                })
              }
            >
              Une ville où chaque guerre, chaque pas,<br />chaque instant interroge la science...<br /> et les croyances
              de chacun …
            </p>
            <p
              oncreate={(e) =>
                anime({
                  targets: e,
                  opacity: [1, 1, 1, 0],
                  duration: 5000,
                  easing: "easeInOutBack",
                  delay: 18500,
                  complete: () => {
                    anime({
                      targets: "#logo-wrapper path",
                      opacity: {
                        value: [0, 1],
                        duration: 1050,
                        delay: 750,
                      },
                      translateY: 0,
                      easing: "easeInOutQuad",
                      complete: () => {
                        document.querySelector("[data-decoy='city-link']").click()
                      },
                    })
                  },
                })
              }
            >
              La ville... où commence votre histoire...
            </p>
          </div>
        )}
        {state.playIntro === false && (
          <div
            key="launchtrailerbuttoncontainer"
            class={cxs({
              marginBottom: "auto",
            })}
            oncreate={(e) => {
              discoverButtonAnimation = anime({
                targets: e,
                delay: 2450,
                marginTop: {
                  value: [0, 60],
                  duration: 950,
                  easing: "easeInOutQuad",
                },
                opacity: {
                  value: [0, 1],
                  duration: 1025,
                  easing: "easeInOutQuad",
                  delay: 2950,
                },
                translateY: {
                  value: [-30, 0],
                  duration: 950,
                  easing: "easeInOutQuad",
                  delay: 2550,
                },
                loop: false,
                autoplay: false,
              })
            }}
          >
            <button
              class={cxs({
                fontSize: pxTo(ds.get("type.sizes.sm"), baseFontSize, "rem"),
                letterSpacing: pxTo(0.8, baseFontSize, "em"),
                backgroundColor: "transparent",
                padding: 0,
                color: "inherit",
                border: 0,
                overflow: "hidden",
                position: "relative",
                transition: "all 250ms ease-in-out",
                ":hover": {
                  color: ds.get("colors.texts.action"),
                  "> svg": {
                    strokeDasharray: 370,
                  },
                },
                ":focus": {
                  color: ds.get("colors.texts.action"),
                  "> svg": {
                    strokeDasharray: 370,
                  },
                },
              })}
              onclick={() => {
                document.querySelector('[data-video="intro"]').play()
                actions.setIntro({ value: true })
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={cxs({
                  strokeDasharray: 85,
                  transition: "inherit",
                })}
                width="136"
                height="50"
              >
                <path d="M1 1h134v48H1z" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" />
              </svg>
              <span
                class={cxs({
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translate(-50%, -125%)",
                })}
              >
                Découvrir
              </span>
            </button>
          </div>
        )}

        <div
          class={cxs({
            marginBottom: pxTo(65, baseFontSize, "rem"),
          })}
          key="passtrailerbutton"
          oncreate={(e) =>
            (passTrailerAnimation = anime({
              targets: e,
              opacity: [0, 1],
              duration: 1150,
              loop: false,
              autoplay: false,
              easing: "easeInOutSine",
            }))
          }
        >
          <button
            data-decoy="city-link"
            class={cxs({
              fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
              letterSpacing: pxTo(0.7, baseFontSize, "em"),
              backgroundColor: "transparent",
              color: "inherit",
              border: 0,
              transition: "450ms all ease-in-out",
              opacity: 0.55,
              ":hover": {
                opacity: 1,
              },
              ":focus": {
                opacity: 1,
              },
            })}
            onclick={(e) => {
              e.preventDefault()
              anime({
                targets: "#page-exit",
                translateX: "-150vw",
                easing: "easeInOutSine",
                duration: 350,
                delay: state.playIntro === true ? 750 : 0,
                complete: () => {
                  document.querySelector("#page-exit").style.opacity = 0
                  document.querySelector("#page-exit").style.transition = "initial"
                  document.querySelector("#page-exit").style.transform = "translateX(0)"
                  document.querySelector("a").click()
                },
              })
            }}
          >
            <span>Passer</span>
          </button>
        </div>
        <Link class={cxs({ display: "none" })} to={cityPageUrl}>
          Passer
        </Link>
      </Container>
      <div
        class={cxs({
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        })}
        oncreate={(e) => {
          backgroundLoadingAnimation = anime({
            targets: e,
            filter: ["blur(10px)", "blur(45px)"],
            direction: "alternate",
            easing: "easeInOutSine",
            loop: true,
            autoplay: true,
            duration: 750,
          })
        }}
        onupdate={(e) => {
          backgroundLoadingAnimation.pause()
          return anime({
            targets: e,
            filter: "blur(0)",
            easing: "easeInOutSine",
            loop: false,
            autoplay: true,
            duration: 50,
            delay: 50,
          })
        }}
      >
        <video
          class={cxs({
            width: "100%",
            height: "100%",
            objectFit: "cover",
          })}
          data-video="intro"
          oncreate={(e) => {
            e.currentTime = 2
          }}
          oncanplaythrough={(e) => {
            passTrailerAnimation.play()
            loadingAnimation.seek(1450)
            loadingAnimation.pause()
            setTimeout(() => {
              document.querySelector("[data-animate='logoTitle']").style.fill = "currentColor"
            }, 150)
            setTimeout(() => {
              document.querySelector("[data-animate='logo']").style.fill = "currentColor"
            }, 50)
            discoverButtonAnimation.play()
          }}
        >
          <source src={background} type="video/mp4" />
        </video>
      </div>
    </Page>
  )
}
