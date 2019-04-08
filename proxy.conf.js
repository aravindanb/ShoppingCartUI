
const BASE_URL = "http://localhost:3000";

const PROXY_CONFIG = [
  {
    "/orders/*": {
      "target": BASE_URL,
      "secure": false,
      "pathRewrite": {"^/orders" : ""}
    }
  }
]


module.exports = PROXY_CONFIG;

