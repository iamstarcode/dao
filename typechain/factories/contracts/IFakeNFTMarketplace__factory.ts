/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFakeNFTMarketplace,
  IFakeNFTMarketplaceInterface,
} from "../../contracts/IFakeNFTMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IFakeNFTMarketplace__factory {
  static readonly abi = _abi;
  static createInterface(): IFakeNFTMarketplaceInterface {
    return new utils.Interface(_abi) as IFakeNFTMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFakeNFTMarketplace {
    return new Contract(address, _abi, signerOrProvider) as IFakeNFTMarketplace;
  }
}
