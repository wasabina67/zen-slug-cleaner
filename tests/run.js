const { cleanSlug } = require('../utils/cleanSlug.js');

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

  // Test with URL-encoded Japanese characters in slug
  const test16 = cleanSlug('https://example.com/123-%E3%83%86%E3%82%B9%E3%83%88%E8%A8%98%E4%BA%8B');
  assert(test16 === 'https://example.com/123', 'URL-encoded Japanese slug cleaning');

  // Test with mixed URL-encoded Japanese and ASCII in slug
  const test17 = cleanSlug('https://example.com/456-hello-%E4%B8%96%E7%95%8C-world');
  assert(test17 === 'https://example.com/456', 'Mixed URL-encoded Japanese and ASCII slug cleaning');

  // Test with URL-encoded Japanese in deep path
  const test18 = cleanSlug('https://blog.example.com/articles/789-%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E8%A8%98%E4%BA%8B');
  assert(test18 === 'https://blog.example.com/articles/789', 'Deep path with URL-encoded Japanese slug');

  // Test with URL-encoded Japanese and query parameters
  const test19 = cleanSlug('https://example.com/101-%E3%83%86%E3%82%B9%E3%83%88?param=%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF');
  assert(test19 === 'https://example.com/101?param=%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF', 'URL-encoded Japanese slug with encoded query parameters');

  // Test empty path
  const test20 = cleanSlug('https://example.com/');
  assert(test20 === 'https://example.com/', 'Empty path URL');

  // Test root domain
  const test21 = cleanSlug('https://example.com');
  assert(test21 === 'https://example.com/', 'Root domain URL');

  console.log('\n✓ All tests passed!');
}

try {
  runTests();
} catch (error) {
  console.error('\n✗ Test failed:', error.message);
  process.exit(1);
}
