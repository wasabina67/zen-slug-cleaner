chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "zen-slug-cleaner",
    title: "ZenSlugCleaner",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "zen-slug-cleaner" && tab.id) {}
});
