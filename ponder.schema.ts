import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  User: p.createTable({
    id: p.string(),
    ramsesPoints: p.bigint(),
    nilePoints: p.bigint()
  })
}));
