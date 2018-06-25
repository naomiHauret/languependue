export default {
  resetAsset: () => (state) => ({
    hoveredAsset: null,
    asset: null,
    assetModalVisible: false,
  }),
  setHoveredAsset: ({ value }) => (state) => ({
    hoveredAsset: value,
  }),
  toggleAsset: ({ asset, visible }) => (state) => ({
    assetModalVisible: visible,
    asset,
  }),
}
