const pagination = require("express-paginate");
const log = require("log4js").getLogger("utils:paginate");
log.level = "info";

async function paginate(options) {
  try {
    const { length, limit, page, req } = options;
    const totalPage = Math.ceil(length / limit);
    let currentPage = parseInt(page) || 1;
    if (currentPage > totalPage) {
      currentPage = totalPage;
    }
    const nextPage = pagination.hasNextPages(req)(totalPage);
    return { totalPage, currentPage, nextPage };
  } catch (err) {
    log.error(err);
    return;
  }
}

module.exports = { paginate };
