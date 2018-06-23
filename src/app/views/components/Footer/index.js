import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import { Link } from "@hyperapp/router"
import cxs from "cxs"
import Container from "app/views/components/Container"
import SocialLinks from "app/views/components/SocialLinks"
import anime from "animejs"

import { homePageUrl } from "app/routes"

const baseFontSize = ds.get("type.sizes.base")

export default (props, children) => {
  return (
    <footer
      oncreate={(e) =>
        anime({
          targets: e,
          translateX: ["100vw", 0],
          easing: "easeInOutQuad",
          duration: 550,
        })
      }
      class={cxs({
        marginTop: "auto",
        paddingBottom: pxTo(35, baseFontSize, "rem"),
      })}
    >
      <Container zIndex={15} direction="row" justify="space-between" align="center">
        <SocialLinks
          links={[
            {
              href: "#",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M6.694 3.431H9V0H6.272C2.982.14 2.306 1.997 2.25 3.938v1.715H0V9h2.25v9h3.375V9h2.784l.535-3.347H5.625v-1.04A1.114 1.114 0 0 1 6.694 3.43z"
                  />
                </svg>
              ),
              title: "Suivre l'aventure sur Facebook",
            },
            {
              href: "#",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <g fill="currentColor" fill-rule="evenodd">
                    <path d="M12.637 0H5.36A5.363 5.363 0 0 0 0 5.35v7.26a5.362 5.362 0 0 0 5.361 5.35h7.276A5.363 5.363 0 0 0 18 12.61V5.35A5.362 5.362 0 0 0 12.637 0zm3.551 12.61a3.548 3.548 0 0 1-3.551 3.544H5.36a3.548 3.548 0 0 1-3.55-3.544V5.35a3.548 3.548 0 0 1 3.55-3.543h7.276a3.547 3.547 0 0 1 3.551 3.544v7.26z" />
                    <path d="M9 4.335a4.645 4.645 0 1 0 4.654 4.645A4.656 4.656 0 0 0 9 4.335zm0 7.485a2.838 2.838 0 1 1 .013-5.677A2.838 2.838 0 0 1 9 11.82zm5.779-7.45a1.116 1.116 0 1 1-2.231.005 1.116 1.116 0 0 1 2.23-.005z" />
                  </g>
                </svg>
              ),
              title: "Découvrir la ville sur Instagram",
            },
            {
              href: "#",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18">
                  <path
                    d="M24.987 1.545C24.048.448 22.315 0 19.007 0H6.993C3.609 0 1.847.477.912 1.645 0 2.785 0 4.463 0 6.786v4.428C0 15.714 1.082 18 6.994 18h12.012c2.87 0 4.46-.395 5.489-1.364C25.55 15.643 26 14.022 26 11.214V6.786c0-2.45-.07-4.138-1.013-5.24zm-8.295 8.066l-5.455 2.805a.85.85 0 0 1-.823-.026.822.822 0 0 1-.404-.705V6.094c0-.288.153-.556.403-.705a.85.85 0 0 1 .822-.028l5.455 2.787a.823.823 0 0 1 .452.731c0 .308-.173.59-.45.732z"
                    fill-rule="nonzero"
                    fill="currentColor"
                  />
                </svg>
              ),
              title: "En voir plus sur Youtube",
            },
            {
              href: "#",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18">
                  <g fill-rule="nonzero" fill="currentColor">
                    <path d="M1.133 0L0 3.375V15.75h4.533V18H6.8l2.267-2.25h3.4L17 10.957V0H1.133zm14.734 10.125L12.693 13.5H8.675l-2.442 1.763V13.5H2.267V1.125h13.6v9z" />
                    <path d="M8 5h1v5H8zM11 5h1v5h-1z" />
                  </g>
                </svg>
              ),
              title: "En voir plus sur Twitch",
            },
          ]}
        />
        <a
          class={cxs({
            textTransform: "uppercase",
            color: `${ds.get("colors.links.external")} !important`,
            transition: "450ms ease-in-out all",
            display: "block",
            position: "relative",
            fontFamily: ds.get("type.fontFamily.bold"),
            letterSpacing: pxTo(1.6, baseFontSize, "em"),
            "::after": {
              transition: "450ms ease-in-out all",
              content: "' '",
              display: "block",
              position: "absolute",
              height: pxTo(2, baseFontSize, "rem"),
              width: 0,
              backgroundColor: "currentColor",
              left: 0,
              bottom: pxTo(-5, baseFontSize, "rem"),
            },
            ":hover": {
              "::after": {
                width: "100%",
              },
            },
          })}
          href="#"
        >
          Acheter Beyond the Lines
        </a>
      </Container>
    </footer>
  )
}
