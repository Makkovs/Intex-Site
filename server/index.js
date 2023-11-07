require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path")
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const sequelize = require("./db");

const host = '0.0.0.0';
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use("/api", router);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, host, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    };
};

startServer();