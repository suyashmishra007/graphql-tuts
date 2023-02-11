import { graphql, buildSchema } from "graphql";
import resolver from "./resolvers.js";
import courseSchema from "./schema.js";
graphql({
  schema: courseSchema,
  source: "{ hello }",
  graphiql: true,
  resolver,
}).then((response) => {
  console.log(response);
});
