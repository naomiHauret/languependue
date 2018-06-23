export default {
  setHoveredItem: ({ value }) => (state) => ({
    hoveredItem: value,
  }),
  toggleMenuVisibility: () => (state) => ({
    menuVisible: !state.menuVisible,
  }),
}
