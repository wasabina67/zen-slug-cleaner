
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

  // Basic slug cleaning
  const test1 = cleanSlug('https://example.com/123456789123456789-hello-world');
  assert(test1 === 'https://example.com/123456789123456789', 'Basic slug cleaning');

  // Basic slug cleaning 2
  const test2 = cleanSlug('https://example.com/posts/123456789123456789-hello-world');
  assert(test2 === 'https://example.com/posts/123456789123456789', 'Basic slug cleaning 2');

// Basic slug cleaning 3
  const test3 = cleanSlug('https://example.com/posts/posts/123456789123456789-hello-world');
  assert(test3 === 'https://example.com/posts/posts/123456789123456789', 'Basic slug cleaning 3');

  console.log('\n✓ All tests passed!');
}

try {
  runTests();
} catch (error) {
  console.error('\n✗ Test failed:', error.message);
  process.exit(1);
}
