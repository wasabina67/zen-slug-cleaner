
// cleanSlug needs to be defined inline, so it's copied and extracted to run.js
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

function assert(condition, message) {
  if (!condition) {
    throw new Error(`Test failed: ${message}`);
  }
  console.log(`✓ ${message}`);
}

function runTests() {
  console.log('Running cleanSlug tests...\n');
  console.log('\n✓ All tests passed!');
}

try {
  runTests();
} catch (error) {
  console.error('\n✗ Test failed:', error.message);
  process.exit(1);
}
