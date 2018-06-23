import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import { Link } from "@hyperapp/router"
import cxs from "cxs"
import Container from "app/views/components/Container"
import Navigation from "app/views/components/Navigation"
import { homePageUrl } from "app/routes"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => {
  const { location, hoveredItem, actions, menuVisible } = props
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
      class={cxs({
        paddingTop: pxTo(30, baseFontSize, "rem"),
        zIndex: 5,
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
          <Link
            to={homePageUrl}
            class={cxs({
              display: "block",
              width: "100%",
              height: "100%",
            })}
          >
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

        <div
          class={cxs({
            display: "flex",
            alignItems: "center",
          })}
        >
          <button
            class={cxs({
              color: "inherit",
              backgroundColor: "transparent",
              borderStyle: "solid",
              borderColor: ds.get("colors.borders.colorful"),
              borderWidth: pxTo(2, baseFontSize, "rem"),
              fontSize: pxTo(ds.get("type.sizes.xs"), baseFontSize, "rem"),
              padding: `${pxTo(20, baseFontSize, "em")} ${pxTo(30, baseFontSize, "em")}`,
              marginRight: pxTo(40, baseFontSize, "rem"),
              letterSpacing: pxTo(1.6, baseFontSize, "em"),
            })}
          >
            Newsletter
          </button>
          <button
            onclick={actions.toggleMenuVisibility}
            class={cxs({
              backgroundColor: "transparent",
              border: 0,
              position: "relative",
              color: "inherit",
              zIndex: 20,
            })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="25">
              <path
                d="M4.824 0H41l-4.824 3.314H0zm0 10.13H41l-4.824 3.314H0zm0 10.13H41l-4.824 3.314H0z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </Container>
      {menuVisible === true && (
        <Navigation
          location={location}
          menuVisible={menuVisible}
          hoveredItem={hoveredItem}
          actions={actions}
          links={[
            {
              key: "acadia",
              name: "Acadia",
              href: "#",
              secondary: false,
              src: "",
              content: {
                title: "Acadia la Haute",
                text: "Lorem",
              },
            },
            {
              key: "characters",
              name: "Personnages",
              href: "#",
              secondary: false,
              src: "",
              content: {
                title: "Languependue",
                text: "Lorem",
              },
            },
            {
              key: "places",
              name: "Lieux",
              href: "#",
              secondary: false,
              src: "",
              content: {
                title: "La Tolpa",
                text: "Lorem",
              },
            },
            {
              key: "games",
              name: "Jeux",
              href: "#",
              secondary: false,
              src: "",
              content: {
                title: "Beyond the Lines",
                text: "Lorem",
              },
            },
            {
              key: "news",
              name: "Actualités",
              href: "#",
              secondary: false,
              src: "",
              content: {
                title: "Start to Play 2018",
                text: "Lorem",
              },
            },
            {
              name: "Mentions légales",
              href: "#",
              secondary: true,
            },
            {
              name: "FAQ",
              abbr: true,
              meaning: "Foire aux questions",
              href: "#",
              secondary: true,
            },
          ]}
        />
      )}
    </header>
  )
}
