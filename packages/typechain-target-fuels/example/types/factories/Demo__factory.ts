/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Interface } from "@fuel-ts/abi-coder";
import type { Provider } from "@fuel-ts/providers";
import { Contract } from "@fuel-ts/contract";
import type { Demo, DemoInterface } from "../Demo";
const _abi = [
  {
    inputs: [
      {
        name: "name",
        type: "str[12][2]",
      },
      {
        name: "addresses",
        type: "address[2]",
      },
      {
        name: "foo",
        type: "bool",
      },
    ],
    name: "name",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "person",
        type: "tuple",
        components: [
          {
            name: "name",
            type: "str[20]",
          },
          {
            name: "address",
            type: "address",
          },
        ],
      },
    ],
    name: "tuple_function",
    outputs: [],
    type: "function",
  },
];

export class Demo__factory {
  static readonly abi = _abi;
  static createInterface(): DemoInterface {
    return new Interface(_abi) as DemoInterface;
  }
  static connect(id: string, signerOrProvider: Provider): Demo {
    return new Contract(id, _abi, signerOrProvider) as Demo;
  }
}
