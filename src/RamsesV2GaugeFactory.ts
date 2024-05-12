import { ponder } from "@/generated";

ponder.on("RamsesV2GaugeFactory:AdminChanged", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("RamsesV2GaugeFactory:BeaconUpgraded", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("RamsesV2GaugeFactory:Upgraded", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on(
  "RamsesV2GaugeFactory:FeeCollectorChanged",
  async ({ event, context }) => {
    console.log(event.args);
  },
);
