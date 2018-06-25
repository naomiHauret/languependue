import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import { Link } from "@hyperapp/router"
import cxs from "cxs"
import Container from "app/views/components/Container"
import Navigation from "app/views/components/Navigation"
import {
  homePageUrl,
  cityPageUrl,
  charactersPageUrl,
  placesPageUrl,
  gamesPageUrl,
  newsPageUrl,
  faqPageUrl,
  termsPageUrl,
} from "app/routes"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => {
  const { location, hoveredMenuItem, actions, menuVisible, modalVisible } = props
  return (
    <header
      oncreate={(e) =>
        anime({
          targets: e,
          translateX: ["100vw", 0],
          easing: "easeInOutQuad",
          duration: 550,
        })
      }
      class={cxs({ position: "relative", zIndex: 10 })}
    >
      <div
        class={cxs({
          width: "100%",
          height: "100%",
          position: "relative",
          paddingBottom: pxTo(30, baseFontSize, "rem"),
          paddingTop: pxTo(30, baseFontSize, "rem"),
          "::after": {
            content: "' '",
            display: "block",
            height: "100%",
            width: "100%",
            zIndex: "-1",
            position: "absolute",
            top:
              (location.pathname === charactersPageUrl && modalVisible === true) ||
              (location.pathname === placesPageUrl && modalVisible === true)
                ? 0
                : "-100%",
            left: 0,
            backgroundColor: ds.get("colors.backgrounds.dark"),
            transition: "450ms ease-in-out all",
          },
        })}
      >
        <Container zIndex={15} direction="row" justify="space-between" align="center">
          <button
            class={cxs({
              backgroundColor: "transparent",
              borderWidth: 0,
              color: "inherit",
              position: "relative",
              zIndex: 20,
            })}
          >
            <Link to={homePageUrl} class={cxs({ display: "block", width: "100%", height: "100%" })}>
              <svg
                class={cxs({
                  marginTop: pxTo(-10, baseFontSize, "rem"),
                })}
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="36"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.087 24.14L18.815 1h-4.793L1 34.953h5.437s4.472-8.576 12.521-10.236c.93-2.74 3.435-9.876 3.435-9.876l5.366 12.904s-11.702-3.568-17.315 7.204c5.617.036 5.581 0 5.581 0s1.895-3.532 7.083-3.532c5.438 0 7.368 3.532 7.368 3.532h4.365L24.324 9.722l1.36-4.396L39.052 35 44 34.952 28.26 1h-6.01l-7.012 20.04s-2.576.793-5.151 3.1z"
                />
              </svg>
            </Link>
          </button>

          <div class={cxs({ display: "flex", alignItems: "center" })}>
            <button
              class={cxs({
                color: "inherit",
                backgroundColor: "transparent",
                position: "relative",
                borderStyle: "solid",
                borderColor: ds.get("colors.borders.colorful"),
                borderWidth: pxTo(2, baseFontSize, "rem"),
                fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
                padding: `${pxTo(20, baseFontSize, "em")} ${pxTo(30, baseFontSize, "em")}`,
                marginRight: pxTo(40, baseFontSize, "rem"),
                letterSpacing: pxTo(1.6, baseFontSize, "em"),
                ":hover::after": {
                  width: "100%",
                },
                "::after": {
                  zIndex: 0,
                  content: "' '",
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: 0,
                  height: "100%",
                  backgroundColor: ds.get("colors.borders.colorful"),
                  transition: "250ms ease-in-out",
                },
              })}
            >
              <div class={cxs({ position: "relative", zIndex: 1 })}>Newsletter</div>
            </button>
            <button
              data-toggle="menu"
              onclick={() => {
                if (menuVisible === false) {
                  actions.toggleMenuVisibility()
                } else {
                  anime({
                    targets: "#anime-nav-wrapper",
                    translateX: [0, "100%"],
                    duration: 450,
                    easing: "easeInOutQuad",
                  })
                  anime({ targets: "#src-preview", height: ["100%", 0], duration: 250, easing: "easeInOutQuad" })

                  anime({
                    targets: "#title-preview",
                    translateY: [0, 25],
                    opacity: [1, 0],
                    duration: 280,
                    delay: 220,
                    easing: "easeInOutQuad",
                  })

                  anime({
                    targets: "#text-preview",
                    translateY: [0, 30],
                    opacity: [1, 0],
                    duration: 220,
                    delay: 230,
                    easing: "easeInOutQuad",
                    complete: () => {
                      setTimeout(() => {
                        actions.toggleMenuVisibility()
                      }, 50)
                    },
                  })
                }
              }}
              class={cxs({
                backgroundColor: "transparent",
                border: 0,
                position: "relative",
                color: "inherit",
                zIndex: 20,
                ":hover svg": {
                  color: ds.get("colors.links.external"),
                },
                ":focus svg": {
                  color: ds.get("colors.links.external"),
                },
              })}
            >
              {menuVisible === true ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                  <g fill="currentColor" fill-rule="evenodd">
                    <path d="M5.755 3.41l25.58 25.58-5.755-1.065L0 2.344z" />
                    <path d="M3.41 25.58L28.99 0l-1.065 5.755-25.581 25.58z" />
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="25"
                  class={cxs({
                    transition: "450ms all ease-in-out",
                  })}
                >
                  <path
                    d="M4.824 0H41l-4.824 3.314H0zm0 10.13H41l-4.824 3.314H0zm0 10.13H41l-4.824 3.314H0z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </div>

      {menuVisible === true && (
        <Navigation
          location={location}
          menuVisible={menuVisible}
          hoveredMenuItem={hoveredMenuItem}
          actions={actions}
          links={[
            {
              key: "acadia",
              name: "Acadia",
              href: cityPageUrl,
              secondary: false,
              src: require("assets/images/menu/acadia.jpg"),
              srcset: `${require("assets/images/menu/acadia.jpg")} 1x,
                       ${require("assets/images/menu/acadia@2x.jpg")} 2x,
                       ${require("assets/images/menu/acadia@2x.jpg")} 3x`,
              content: { title: "Acadia la Haute", text: "Lorem" },
            },
            {
              key: "characters",
              name: "Personnages",
              href: charactersPageUrl,
              secondary: false,
              src: require("assets/images/menu/characters.jpg"),
              srcset: `${require("assets/images/menu/characters.jpg")} 1x,
                       ${require("assets/images/menu/characters@2x.jpg")} 2x,
                       ${require("assets/images/menu/characters@2x.jpg")} 3x`,
              content: { title: "Languependue", text: "Lorem" },
            },
            {
              key: "places",
              name: "Lieux",
              href: placesPageUrl,
              secondary: false,
              src: require("assets/images/menu/acadia.jpg"),
              srcset: `${require("assets/images/menu/acadia.jpg")} 1x,
                       ${require("assets/images/menu/acadia@2x.jpg")} 2x,
                       ${require("assets/images/menu/acadia@2x.jpg")} 3x`,
              content: { title: "La Tolpa", text: "Lorem" },
            },
            {
              key: "games",
              name: "Jeux",
              href: gamesPageUrl,
              secondary: false,
              src: require("assets/images/menu/games.jpg"),
              srcset: `${require("assets/images/menu/games.jpg")} 1x,
                       ${require("assets/images/menu/games@2x.jpg")} 2x,
                       ${require("assets/images/menu/games@2x.jpg")} 3x`,
              content: { title: "Beyond the Lines", text: "Lorem" },
            },
            {
              key: "news",
              name: "Actualités",
              href: newsPageUrl,
              secondary: false,
              src: require("assets/images/menu/news.jpg"),
              srcset: `${require("assets/images/menu/news.jpg")} 1x,
                       ${require("assets/images/menu/news@2x.jpg")} 2x,
                       ${require("assets/images/menu/news@2x.jpg")} 3x`,
              content: { title: "Start to Play 2018", text: "Lorem" },
            },
            { name: "Mentions légales", href: termsPageUrl, secondary: true },
            { name: "FAQ", abbr: true, meaning: "Foire aux questions", href: faqPageUrl, secondary: true },
          ]}
        />
      )}
    </header>
  )
}
