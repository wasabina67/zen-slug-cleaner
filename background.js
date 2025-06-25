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
          try {
            const urlObj = new URL(url);

            return urlObj.toString();
          } catch (error) {
            console.error('URL parsing error:', error);
            return url;
          }
        }

        const cleanedUrl = cleanSlug(currentUrl);
        navigator.clipboard.writeText(cleanedUrl)
          .then(() => {
            const notification = document.createElement('div');
            notification.textContent = 'Copied! 😎';
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.background = '#3CD2D2';
            notification.style.color = 'white';
            notification.style.padding = '10px 10px';
            notification.style.borderRadius = '4px';
            notification.style.zIndex = '9999';
            notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            document.body.appendChild(notification);

            setTimeout(() => {
              notification.style.opacity = '0';
              notification.style.transition = 'opacity 0.5s';
              setTimeout(() => notification.remove(), 500);
            }, 3000);
          }).catch(err => console.error(err.message));
      },
    }).catch(err => console.error(err.message));
  }
});
