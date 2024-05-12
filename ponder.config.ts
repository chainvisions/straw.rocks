import { createConfig, mergeAbis } from "@ponder/core";
import { http } from "viem";

import { RamsesTransparentUpgradeableProxyAbi } from "./abis/RamsesTransparentUpgradeableProxyAbi";
import { RamsesV2GaugeFactory_0x2b26Abi } from "./abis/RamsesV2GaugeFactory_0x2b26Abi";
import { RamsesV2GaugeFactory_0x8a5dAbi } from "./abis/RamsesV2GaugeFactory_0x8a5dAbi";

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
    },
  },
  contracts: {
    RamsesV2GaugeFactory: {
      abi: mergeAbis([
        RamsesTransparentUpgradeableProxyAbi,
        RamsesV2GaugeFactory_0x2b26Abi,
        RamsesV2GaugeFactory_0x8a5dAbi,
      ]),
      address: "0xaa2fbd0c9393964af7c66c1513e44a8caaae4fda",
      network: "arbitrum",
      startBlock: 90593047,
    },
  },
});
