import { ponder } from "@/generated";

ponder.on("RamsesV2Gauge:ClaimRewards", async ({ event, context }) => {
  const { User } = context.db
  
  // Update user's points on Arbitrum.
  User.upsert({
    id: event.args.receiver.toString(),
    create: {
      ramsesPoints: event.args.amount,
      nilePoints: 0n
    },
    update: ({current}) => ({
      ramsesPoints: current.ramsesPoints + event.args.amount,
    })
  })
})

ponder.on("NileV2Gauge:ClaimRewards", async ({ event, context }) => {
    const { User } = context.db

    // Update user's points on Linea.
    User.upsert({
      id: event.args.receiver.toString(),
      create: {
        ramsesPoints: 0n,
        nilePoints: event.args.amount
      },
      update: ({current}) => ({
        nilePoints: current.nilePoints + event.args.amount,
      })
    })
})
