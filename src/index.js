import { h, app } from "hyperapp"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import { location } from "@hyperapp/router"
import state from "app/state"
import actions from "app/actions"
import App from "app/views"
import "assets/styles/index.css"

// Images "preload"
const images = [
  require("assets/images/city/slice.png"),
  require("assets/images/menu/acadia.jpg"),
  require("assets/images/menu/characters.jpg"),
  require("assets/images/menu/games.jpg"),
  require("assets/images/menu/news.jpg"),
  require("assets/images/characters/ladyselwidge_preview.jpg"),
  require("assets/images/characters/languependue_preview.jpg"),
  require("assets/images/characters/pattefolle_preview.png"),
  require("assets/images/characters/princessvivianne_preview.jpg"),
  require("assets/images/characters/pattefolle_gallery.png"),
  require("assets/images/games/beyond.jpg"),
  require("assets/images/places/basfonds.jpg"),
  require("assets/images/places/doube.jpg"),
  require("assets/images/places/empire.jpg"),
  require("assets/images/places/fantasia.jpg"),
  require("assets/images/places/mineantesang.jpg"),
  require("assets/images/places/tolpa.jpg"),
  require("assets/images/places/yaye.jpg"),
]

images.forEach((image, index) => {
  images[index] = new Image()
  images[index].src = image
})

const bodyTag = document.body
const htmlTag = document.querySelector("html")
const baseFontSize = ds.get("type.sizes.base")

htmlTag.style.setProperty("--baseBackgroundColor", ds.get("colors.backgrounds.dark"))
htmlTag.style.setProperty("--baseTextSize", `${baseFontSize}px`)
htmlTag.style.setProperty("--baseTextColor", ds.get("colors.texts.default"))
htmlTag.style.setProperty("--baseTextFont", ds.get("type.fontFamily.base"))
htmlTag.style.setProperty("--boldTextFont", ds.get("type.fontFamily.bold"))

const enhancedActions = Object.assign({}, { location: location.actions }, actions)
const view = (state, actions) => <App state={state} actions={enhancedActions} />
const main = app(state, enhancedActions, view, bodyTag)
const unsubscribe = location.subscribe(main.location)
