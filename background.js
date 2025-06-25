chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "zen-slug-cleaner",
    title: "ZenSlugCleaner",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "zen-slug-cleaner" && tab.id) {
    if (tab.url && tab.url.startsWith("chrome://")) return;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const currentUrl = window.location.href;

        function cleanSlug(url) {
          return url;
        }

        const cleanedUrl = cleanSlug(currentUrl);
      },
    }).catch(err => console.error(err.message));
  }
});
