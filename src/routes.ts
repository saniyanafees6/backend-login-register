import { Router, RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { Register } from "./controller.ts";

const router = new Router();

router.post("/api/register", Register);

export default router;
