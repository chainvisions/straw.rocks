import { createConfig } from "@ponder/core";
import { http, parseAbiItem } from "viem";

import { RamsesV2GaugeFactoryABI } from "./abis/RamsesV2GaugeFactoryAbi";
import { RamsesV2GaugeABI } from "./abis/RamsesV2GaugeABI";
import { RamsesLegacyGaugeFactoryABI } from "./abis/RamsesLegacyGaugeFactoryABI";
import { RamsesLegacyGaugeABI } from "./abis/RamsesLegacyGaugeABI";

const v2GaugeCreateEvent = parseAbiItem(
  "event GaugeCreated(address indexed pool,address gauge)"
)

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http("hell naw dawg"),
    },
    linea: {
      chainId: 59144,
      transport: http("https://rpc.linea.build")
    }
  },
  contracts: {
    RamsesV2GaugeFactory: {
      abi: RamsesV2GaugeFactoryABI,
      address: "0xaa2fbd0c9393964af7c66c1513e44a8caaae4fda",
      network: "arbitrum",
      startBlock: 90593047,
    },
    RamsesV2Gauge: {
      abi: RamsesV2GaugeABI,
      network: "arbitrum",
      factory: {
        address: "0xaa2fbd0c9393964af7c66c1513e44a8caaae4fda",
        event: v2GaugeCreateEvent,
        parameter: "gauge"
      }
    },
    NileV2GaugeFactory: {
      abi: RamsesV2GaugeFactoryABI,
      address: "0xAAA2D4987EEd427Ba5E2c933EeFCD75C84b446B7",
      network: "arbitrum",
      startBlock: 1768866
    },
    NileV2Gauge: {
      abi: RamsesV2GaugeABI,
      network: "linea",
      factory: {
        address: "0xAAA2D4987EEd427Ba5E2c933EeFCD75C84b446B7",
        event: v2GaugeCreateEvent,
        parameter: "gauge"
      }
    }
  },
});
