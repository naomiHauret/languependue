export default {
  setHoveredMenuItem: ({ value }) => (state) => ({
    hoveredMenuItem: value,
  }),
  toggleMenuVisibility: () => (state) => ({
    menuVisible: !state.menuVisible,
  }),
}
