import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import anime from "animejs"
import {
  cityPageName,
  charactersPageName,
  placesPageName,
  homePageUrl,
  cityPageUrl,
  charactersPageUrl,
  placesPageUrl,
} from "app/routes"
import BackgroundTitle from "app/views/components/BackgroundTitle"
import Container from "app/views/components/Container"
import Header from "app/views/components/Header"
import Footer from "app/views/components/Footer"
const baseFontSize = ds.fontSize("base")

export default (props, children) => {
  const { state, actions, key } = props
  return (
    <main
      key="hyperionPage"
      class={cxs({
        flexGrow: 1,
        display: "flex",
      })}
    >
      <div
        id="page-exit"
        class={cxs({
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        })}
      >
        <div
          class={cxs({
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          })}
          key={key}
        >
          {state.location.pathname !== homePageUrl && (
            <Header
              location={state.location}
              menuVisible={state.menuVisible}
              hoveredItem={state.hoveredItem}
              actions={actions}
            />
          )}
          {state.location.pathname !== homePageUrl && (
            <div
              class={cxs({
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                textAlign: "center",
                transform: "translate(-50%, -50%)",
              })}
            >
              <div
                oncreate={(e) =>
                  state.location.previous === homePageUrl
                    ? anime({
                        targets: e,
                        translateX: ["100vw", 0],
                        easing: "easeInOutQuad",
                        duration: 750,
                      })
                    : anime({
                        targets: e,
                        opacity: {
                          value: [0, 1],
                          delay: 750,
                        },
                        easing: "easeInOutQuad",
                        duration: 750,
                      })
                }
              >
                <BackgroundTitle>
                  {() => {
                    switch (state.location.pathname) {
                      case cityPageUrl:
                        return cityPageName
                        break

                      case charactersPageUrl:
                        return charactersPageName
                        break
                      case placesPageUrl:
                        return placesPageName
                        break
                      default:
                        break
                    }
                  }}
                </BackgroundTitle>
              </div>
            </div>
          )}
          {children}
          {state.location.pathname !== homePageUrl && <Footer />}
        </div>
      </div>
    </main>
  )
}
