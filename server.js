import express from "express";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers.js";
import courseSchema from "./schema.js";

const PORT = 8000;
const app = express();
const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: courseSchema,
    rootValue: root,
    graphiql: true,
  })
);

app.use("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(PORT, () => console.log(`Port: ${PORT}`));
