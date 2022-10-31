const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns hash when received an input", () => {
    const trivialKey = deterministicPartitionKey("this is a test string");
    expect(trivialKey).toBe("6d84dd48ec41e2d69d878729ada046b961aefed53da07693932acb847606541d11879524ef29b36ef948e71c8cf77895265403dd8e3e57a2fa7f4fccbfd08e4f")
  })
});

describe("deterministicPartitionKey", () => {
  it("Return has when received an integer input", () => {
    const trivialKey = deterministicPartitionKey(123456);
    expect(trivialKey).toBe("64d09d9930c8ecf79e513167a588cb75439b762ce8f9b22ea59765f32aa74ca19d2f1e97dc922a3d4954594a05062917fb24d1f8e72f2ed02a58ed7534f94d27")
  })
});

describe("deterministicPartitionKey", () => {
  it("Return value of partitionKey when presented", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "I am a partition key"});
    expect(trivialKey).toBe("I am a partition key")
  })
});

describe("deterministicPartitionKey", () => {
  it("Return hash less than length?", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: "I am an extra extra long string to test the hash the maximum partition key length and see if it shortens or not.I am an extra extra long string to test the hash the maximum partition key length and see if it shortens or not.I am an extra extra long string to test the hash the maximum partition key length and see if it shortens or not.I am an extra extra long string to test the hash the maximum partition key length and see if it shortens or not.I am an extra extra long string to test the hash the maximum partition key length and see if it shortens or not.I am an extra extra long string to test the hash the maximum partition key length and see if it shortens or not."});
    expect(trivialKey.length).toBe(128)
  })
})