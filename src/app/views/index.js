import { h } from "hyperapp"
import { Switch, Route } from "@hyperapp/router"
import { homePageUrl, cityPageUrl, charactersPageUrl, placesPageUrl } from "app/routes"
import Home from "app/views/pages/Home"
import City from "app/views/pages/City"
import Characters from "app/views/pages/Characters"
import Places from "app/views/pages/Places"

export default ({ state, actions, match }) => {
  return (
    <Switch>
      <Route render={Home} path={homePageUrl} />
      <Route render={City} path={cityPageUrl} />
      <Route render={Characters} path={charactersPageUrl} />
      <Route render={Places} path={placesPageUrl} />
    </Switch>
  )
}
