const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';  // process.env.SECRET
const expiration = '2h'; 

module.exports = {
  authMiddleware: ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;
    console.log(1, token);
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    console.log(2);
    if (!token) return req;
    console.log(3);
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    console.log(4);
    return req;
  },
  signToken: ({ email, username, _id }) => {

    const payload = { email, username, _id };
    console.log(payload);
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};