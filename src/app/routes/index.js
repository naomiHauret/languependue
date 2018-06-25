import { h } from "hyperapp"

const homePageName = "Acadia"
const baseUrl = "/"

export const cityPageName = "City of Acadia"
export const charactersPageName = "Personnages"
export const placesPageName = "Lieux"
export const gamesPageName = "Jeux"
export const newsPageName = "Nouveautés"
export const faqPageName = "Foire aux questions"
export const termsPageName = "Mentions légales"

export const homePageUrl = baseUrl
export const cityPageUrl = "/city"
export const charactersPageUrl = "/characters"
export const placesPageUrl = "/places"
export const gamesPageUrl = "/games"
export const newsPageUrl = "/news"
export const faqPageUrl = "/faq"
export const termsPageUrl = "/terms"

const baseTitle = homePageName
const titleSeparator = "|"
const metaTitleSuffix = `${titleSeparator} ${baseTitle}`
export const homeMetaTitle = baseTitle
export const cityMetaTitle = `Découvrir la ville ${metaTitleSuffix}`
export const charactersMetaTitle = `Personnages ${metaTitleSuffix}`
export const placesMetaTitle = `Lieux ${metaTitleSuffix}`
export const gamesMetaTitle = `Jeux ${metaTitleSuffix}`
export const newsMetaTitle = `Actualités ${metaTitleSuffix}`
export const faqMetaTitle = `Foire aux questions ${metaTitleSuffix}`
export const termsMetaTitle = `Mentions légales ${metaTitleSuffix}`
