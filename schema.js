import { graphql, buildSchema } from "graphql";

var courseSchema = buildSchema(`
type Query {
  hello: String
}
`);

export default courseSchema;
