import { WalletAddressCategory, WalletBalance, WalletTransaction } from 'electra-js'

import { ActionBaseWithPayload, ActionListGenerator } from '../types'

/*
 * State
 */
export interface State {
  currentPriceBTC: number
  currentPriceUSD: number
  confirmedBalance: number
  isLoading: boolean
  transactions: WalletTransaction[]
  unconfirmedBalance: number
}

/*
 * Dispatchers
 */
export interface Dispatchers {
  getBalanceAndTransactions(category: AccountCategory): ActionList['GET_BALANCE_AND_TRANSACTIONS']
  resetAccountState(category: AccountCategory): ActionList['RESET_ACCOUNT_STATE']
}

/**
 * Properties
 */
export interface OwnProps {
  category: AccountCategory
}

/*
 * Actions
 */
export enum ActionType {
  GET_BALANCE_AND_TRANSACTIONS = 'GET_BALANCE_AND_TRANSACTIONS',
  GET_BALANCE_AND_TRANSACTIONS_ERROR = 'GET_BALANCE_AND_TRANSACTIONS_ERROR',
  GET_BALANCE_AND_TRANSACTIONS_LOOP = 'GET_BALANCE_AND_TRANSACTIONS_LOOP',
  GET_BALANCE_AND_TRANSACTIONS_SUCCESS = 'GET_BALANCE_AND_TRANSACTIONS_SUCCESS',
  RESET_ACCOUNT_STATE = 'RESET_ACCOUNT_STATE',
}

export type ActionList = ActionListGenerator<ActionType, {
  GET_BALANCE_AND_TRANSACTIONS: ActionBaseWithPayload<ActionType.GET_BALANCE_AND_TRANSACTIONS, AccountCategory>
  GET_BALANCE_AND_TRANSACTIONS_LOOP: ActionBaseWithPayload<
    ActionType.GET_BALANCE_AND_TRANSACTIONS_LOOP,
    AccountCategory
  >
  GET_BALANCE_AND_TRANSACTIONS_SUCCESS: ActionBaseWithPayload<
    ActionType.GET_BALANCE_AND_TRANSACTIONS_SUCCESS,
    {
      balance: WalletBalance
      category: AccountCategory
      currentPriceBTC: number
      currentPriceUSD: number
      transactions: WalletTransaction[]
    }
  >
  RESET_ACCOUNT_STATE: ActionBaseWithPayload<ActionType.RESET_ACCOUNT_STATE, AccountCategory>
}>

/*
 * Custom types
 */

export type AccountCategory = WalletAddressCategory | null
