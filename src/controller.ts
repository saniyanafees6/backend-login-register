import { RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export const Register = ({ response }: RouterContext) => {
  response.body = "Register";
};
