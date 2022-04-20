import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

type ChainAddress = {
  [chainId in ChainId]: string
}
export const FACTORY_ADDRESS: ChainAddress = {
  [ChainId.MAINNET]: "0xC82E083870C4c0117395ea89E5eC188D9F84f61D",
  [ChainId.TESTNET]: "0xC82E083870C4c0117395ea89E5eC188D9F84f61D"
}

export const INIT_CODE_HASH: ChainAddress = {
  [ChainId.MAINNET]: "0xe4d235c1e189c20bf7b41f79f589e1646b3b97d8f73f7494b4af46dd45a117ee",
  [ChainId.TESTNET]: '0xe4d235c1e189c20bf7b41f79f589e1646b3b97d8f73f7494b4af46dd45a117ee'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _8575 = JSBI.BigInt(8575)
export const _10000 = JSBI.BigInt(10000)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
