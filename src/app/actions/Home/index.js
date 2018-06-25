export default {
  setIntro: ({ value }) => (state) => ({
    playIntro: value,
  }),
  resetIntro: () => (state) => ({
    playIntro: false,
  }),
}
