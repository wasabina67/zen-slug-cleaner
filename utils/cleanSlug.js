function cleanSlug(url) {
  try {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/').filter(segment => segment);
    // Check the last path segment for the number-SEO-slug pattern
    if (pathSegments.length > 0) {
      const lastSegment = pathSegments[pathSegments.length - 1];
      const match = lastSegment.match(/^(\d+)-(.+)$/);
      if (match) {
        pathSegments[pathSegments.length - 1] = match[1];
      }
    }
    urlObj.pathname = '/' + pathSegments.join('/');

    return urlObj.toString();
  } catch (error) {
    console.error('URL parsing error:', error);
    return url;
  }
}

if (typeof window !== 'undefined') {
  window.cleanSlug = cleanSlug;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { cleanSlug };
}
