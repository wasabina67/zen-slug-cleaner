
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

  // Slug cleaning with single path segment
  const test2 = cleanSlug('https://example.com/posts/123456789123456789-hello-world');
  assert(test2 === 'https://example.com/posts/123456789123456789', 'Slug cleaning with single path segment');

  // Slug cleaning with multiple path segments
  const test3 = cleanSlug('https://example.com/posts/posts/123456789123456789-hello-world');
  assert(test3 === 'https://example.com/posts/posts/123456789123456789', 'Slug cleaning with multiple path segments');

  // Test with different number formats
  const test4 = cleanSlug('https://example.com/42-article-title');
  assert(test4 === 'https://example.com/42', 'Short number slug cleaning');

  // Test with longer numbers
  const test5 = cleanSlug('https://example.com/987654321987654321-very-long-article-title');
  assert(test5 === 'https://example.com/987654321987654321', 'Long number slug cleaning');

  // Test with query parameters
  const test6 = cleanSlug('https://example.com/123-article?param=value&other=test');
  assert(test6 === 'https://example.com/123?param=value&other=test', 'Slug cleaning with query parameters');

  // Test with fragment
  const test7 = cleanSlug('https://example.com/456-title#section1');
  assert(test7 === 'https://example.com/456#section1', 'Slug cleaning with fragment');

  // Test with both query and fragment
  const test8 = cleanSlug('https://example.com/789-complex-title?q=search#results');
  assert(test8 === 'https://example.com/789?q=search#results', 'Slug cleaning with query and fragment');

  // Test URLs without slug pattern (should remain unchanged)
  const test9 = cleanSlug('https://example.com/regular-path');
  assert(test9 === 'https://example.com/regular-path', 'URL without number-slug pattern');

  // Test with numbers at beginning but no hyphen
  const test10 = cleanSlug('https://example.com/123abc');
  assert(test10 === 'https://example.com/123abc', 'URL with numbers but no hyphen');

  // Test with hyphen but no numbers at start
  const test11 = cleanSlug('https://example.com/abc-def-ghi');
  assert(test11 === 'https://example.com/abc-def-ghi', 'URL with hyphens but no leading numbers');

  // Test with different domains
  const test12 = cleanSlug('https://blog.example.com/articles/555-my-blog-post');
  assert(test12 === 'https://blog.example.com/articles/555', 'Different domain with slug');

  // Test with HTTPS and different ports
  const test13 = cleanSlug('http://localhost:3000/posts/777-local-development');
  assert(test13 === 'http://localhost:3000/posts/777', 'Local development URL with slug');

  // Test with deep nested paths
  const test14 = cleanSlug('https://example.com/category/subcategory/posts/999-nested-article');
  assert(test14 === 'https://example.com/category/subcategory/posts/999', 'Deep nested path with slug');

  // Test with zero-padded numbers
  const test15 = cleanSlug('https://example.com/000123-padded-number');
  assert(test15 === 'https://example.com/000123', 'Zero-padded number slug');

  // Test empty path
  const test16 = cleanSlug('https://example.com/');
  assert(test16 === 'https://example.com/', 'Empty path URL');

  // Test root domain
  const test17 = cleanSlug('https://example.com');
  assert(test17 === 'https://example.com/', 'Root domain URL');

  console.log('\n✓ All tests passed!');
}

try {
  runTests();
} catch (error) {
  console.error('\n✗ Test failed:', error.message);
  process.exit(1);
}
