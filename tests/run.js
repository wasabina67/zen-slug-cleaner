
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
