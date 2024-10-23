const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const routes = require("./src/routes/ApiRoutes");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server berjalan di port http://localhost:${PORT}`);
});
