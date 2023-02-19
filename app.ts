import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import router from "./src/routes.ts";

const port = 8000;
const app = new Application();

app.use(router.allowedMethods());
app.use(router.routes());

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port });
