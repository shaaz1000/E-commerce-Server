import express from "express";

const app = express();

const Port = 8000;

app.listen(Port, () => console.log(`listening on port ${Port}`));
