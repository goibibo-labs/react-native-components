# Supporting SVG icons in react-native using font file

## Limitations

1. Multi-color icons will not be supported
2. Strokes will get ignored, should be converted to fills

### How to add new icons

1. Visit https://icomoon.io/app/#/select
2. Upload `selection.json` by clicking on **Import Icons**
3. Choose *Yes* when prompted for import settings
4. Upload new icons by clicking on **Import Icons**
5. Go to **Generate Font** tab
6. Verify that new icons are available
7. Click on Download
8. Update `icomoon.ttf` in `src/assets/fonts` & `selection.json` in `src/libs/icon`
9. Link assets `yarn run link`
