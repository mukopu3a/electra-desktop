import * as ActionNames from './action-names'
import { ClearSendCardFields, GetAddresses, SendEca, SetAmount, SetToAddress } from './types'

export function sendEca(amount: number, to: string): SendEca {
  return {
    payload: { amount, to },
    type: ActionNames.SEND_ECA
  }
}

export function setAmount(payload: number): SetAmount {
  return {
    payload,
    type: ActionNames.SET_AMOUNT
  }
}

export function setToAddress(payload: string): SetToAddress {
  return {
    payload,
    type: ActionNames.SET_TO_ADDRESS
  }
}

export function clearSendCardFields(): ClearSendCardFields {
  return {
    type: ActionNames.CLEAR_SEND_CARD_FIELDS
  }
}

export function getAddresses(): GetAddresses {
  return {
    type: ActionNames.GET_ADDRESSES
  }
}