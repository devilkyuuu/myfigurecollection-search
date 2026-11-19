# MyFigureCollection

This extension adds two right-click actions:

- **MyFigureCollection** on selected text opens Google results for the selected words plus `MyFigureCollection`.
- **MyFigureCollection Image Search** on an image opens Google Lens with the image URL and `MyFigureCollection` as the search text.

## Install in Chrome

1. Extract `mfc-selection-search.zip` if you downloaded the ZIP.
2. Open `chrome://extensions`.
3. Turn on **Developer mode**.
4. Choose **Load unpacked** and select the `mfc-selection-search` folder.
5. Select text or right-click an image, then choose the corresponding MyFigureCollection action.

Image search passes the image URL to Google Lens. It works for images with URLs that Google can access; browser-local images and some protected image URLs may not be available to Lens.
