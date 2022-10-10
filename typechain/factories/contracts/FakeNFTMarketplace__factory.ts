/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FakeNFTMarketplace,
  FakeNFTMarketplaceInterface,
} from "../../contracts/FakeNFTMarketplace";

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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405267016345785d8a000060015534801561001c57600080fd5b5061042c8061002c6000396000f3fe60806040526004361061003f5760003560e01c80634f64b2be1461004457806396e494e81461008157806398d5fdca146100be578063efef39a1146100e9575b600080fd5b34801561005057600080fd5b5061006b6004803603810190610066919061026a565b610105565b60405161007891906102e7565b60405180910390f35b34801561008d57600080fd5b506100a860048036038101906100a3919061026a565b610138565b6040516100b59190610302565b60405180910390f35b3480156100ca57600080fd5b506100d36101b3565b6040516100e0919061033d565b60405180910390f35b61010360048036038101906100fe919061026a565b6101bd565b005b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156101a957600190506101ae565b600090505b919050565b6000600154905090565b6001543414610201576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f89061031d565b60405180910390fd5b3360008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081359050610264816103df565b92915050565b6000602082840312156102805761027f6103b1565b5b600061028e84828501610255565b91505092915050565b6102a081610369565b82525050565b6102af8161037b565b82525050565b60006102c2601883610358565b91506102cd826103b6565b602082019050919050565b6102e1816103a7565b82525050565b60006020820190506102fc6000830184610297565b92915050565b600060208201905061031760008301846102a6565b92915050565b60006020820190508181036000830152610336816102b5565b9050919050565b600060208201905061035260008301846102d8565b92915050565b600082825260208201905092915050565b600061037482610387565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b7f54686973204e465420636f73747320302e312065746865720000000000000000600082015250565b6103e8816103a7565b81146103f357600080fd5b5056fea2646970667358221220e1d9c67d339644b216fb7e4b311544ddb5f1da6d4919ff23f5759b838b19cf5464736f6c63430008070033";

type FakeNFTMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FakeNFTMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FakeNFTMarketplace__factory extends ContractFactory {
  constructor(...args: FakeNFTMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FakeNFTMarketplace> {
    return super.deploy(overrides || {}) as Promise<FakeNFTMarketplace>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FakeNFTMarketplace {
    return super.attach(address) as FakeNFTMarketplace;
  }
  override connect(signer: Signer): FakeNFTMarketplace__factory {
    return super.connect(signer) as FakeNFTMarketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeNFTMarketplaceInterface {
    return new utils.Interface(_abi) as FakeNFTMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeNFTMarketplace {
    return new Contract(address, _abi, signerOrProvider) as FakeNFTMarketplace;
  }
}