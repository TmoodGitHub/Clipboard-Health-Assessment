const crypto = require("crypto");

exports.deterministicPartitionKey = (key) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let hashKey;

  if (key) {
    if (key.partitionKey) {
      hashKey = key.partitionKey;
    } else {
      const data = convertToString(key);
      hashKey = convertToHash(data);
    }
  }

  if (hashKey) {
    if (typeof hashKey !== "string") {
      hashKey = convertToString(hashKey);
    }
  } else {
    hashKey = TRIVIAL_PARTITION_KEY;
  }

  if (hashKey.length > MAX_PARTITION_KEY_LENGTH) {
    hashKey = convertToHash(hashKey);
  }

  return hashKey;
};

const convertToString = (data) => JSON.stringify(data);

const convertToHash = (hashKey) => crypto.createHash("sha3-512").update(hashKey).digest("hex");