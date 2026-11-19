const TEXT_MENU_ID = "google-search-selection-mfc";
const IMAGE_MENU_ID = "google-lens-image-search-mfc";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: TEXT_MENU_ID,
      title: "MyFigureCollection",
      contexts: ["selection"]
    });

    chrome.contextMenus.create({
      id: IMAGE_MENU_ID,
      title: "MyFigureCollection Image Search",
      contexts: ["image"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === TEXT_MENU_ID && info.selectionText) {
    const query = `${info.selectionText.trim()} MyFigureCollection`;
    const url = new URL("https://www.google.com/search");
    url.searchParams.set("q", query);
    chrome.tabs.create({ url: url.toString() });
    return;
  }

  if (info.menuItemId === IMAGE_MENU_ID && info.srcUrl) {
    const url = new URL("https://lens.google.com/uploadbyurl");
    url.searchParams.set("url", info.srcUrl);
    url.searchParams.set("q", "MyFigureCollection");
    chrome.tabs.create({ url: url.toString() });
  }
});
