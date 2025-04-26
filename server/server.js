require('dotenv').config();

const express = require("express");
const cors = require("cors");
const authRouter = require("./src/routes/authRoute");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/user", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
