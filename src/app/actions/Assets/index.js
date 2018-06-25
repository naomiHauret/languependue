export default {
  setHoveredAsset: ({ value }) => (state) => ({
    hoveredAsset: value,
  }),
  toggleAsset: ({ asset, visible }) => (state) => ({
    assetModalVisible: visible,
    asset,
  }),
}
