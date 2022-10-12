require("pretty-error").start();
const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const PORT = 3000;
const morgan = require("morgan");
const paginate = require("express-paginate");
const userRoutes = require("./routes/user");
// const itemRoutes = require("./routes/item");
// const tripRoutes = require("./routes/trip");
const log4js = require("log4js");
const log = log4js.getLogger("entrypoint");
log.level = "info";

// * Main & Log
app.use(morgan("dev"));
app.use(express.json());

// * Paginate
app.use(paginate.middleware(10, 30));

// * Routes
app.get("/", (req, res, next) => {
  res.status(200).json({ success: true, message: "Express Up & Running" });
});
app.use(userRoutes);
// app.use(itemRoutes);
// app.use(tripRoutes);

// * database
async function prismaConn() {
  await prisma.user.findFirst();
}

prismaConn()
  .then(async () => {
    log.info("Prisma Connected ✅");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    log.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// * server listen
app.listen(PORT, (err) => {
  if (err) {
    log.error("Error:", err);
  } else {
    log.info("Running on port: " + PORT);
  }
});
