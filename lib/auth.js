const jwt = require('jsonwebtoken'); module.exports.decodeJWT = (token) => jwt.decode(token, { complete: true });
