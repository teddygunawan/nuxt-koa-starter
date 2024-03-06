"use strict";

import Koa from "koa";
import cors from "@koa/cors";

const app = new Koa();
app.use(cors());

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(3001);

export default app;
