import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import Container from "app/views/components/Container"
import CityPreview from "app/views/components/CityPreview"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import cxs from "cxs"
import { cityMetaTitle } from "app/routes"
import { Enter } from "@hyperapp/transitions"
import anime from "animejs"

const baseFontSize = ds.get("type.sizes.base")

export default () => (state, actions) => {
  const metaTitle = cityMetaTitle
  const key = "kcitypage"
  return (
    <Page state={state} actions={actions} metaTitle={metaTitle} key={key}>
      <div
        oncreate={(e) => {
          document.querySelector("#page-exit").style.opacity = 1
          anime({ targets: e, opacity: [0, 1], time: 750, delay: 750, easing: "easeInOutSine" })
        }}
      >
        <Container grow={1} zIndex={1} align="center" justify="center">
          <CityPreview
            slices={[
              {
                src: require("assets/images/city/slice.png"),
                name: "Acadia la Haute",
                unlocked: true,
              },
              {
                src: require("assets/images/city/slice.png"),
                name: "Acadia les Plaines",
                unlocked: false,
              },
              {
                name: "Acadia lès Fosses",
                src: require("assets/images/city/slice.png"),
                unlocked: false,
              },
              {
                name: "Acadia la Secrète",
                src: require("assets/images/city/slice.png"),
                unlocked: false,
              },
            ]}
          />
        </Container>
      </div>
    </Page>
  )
}
