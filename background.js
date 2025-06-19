chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "zen-slug-cleaner",
    title: "ZenSlugCleaner",
    contexts: ["all"],
  });
});
