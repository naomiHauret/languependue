import { h } from "hyperapp"

const homePageName = "Acadia"
export const cityPageName = "City of Acadia"
export const charactersPageName = "Personnages"
export const placesPageName = "Lieux"

export const baseUrl = "/"
export const cityPageUrl = "/city"
export const charactersPageUrl = "/characters"
export const placesPageUrl = "/places"

export const homePageUrl = baseUrl

const baseTitle = homePageName
const titleSeparator = "|"
const metaTitleSuffix = `${titleSeparator} ${baseTitle}`
export const homeMetaTitle = baseTitle
export const cityMetaTitle = `Découvrir la ville ${metaTitleSuffix}`
