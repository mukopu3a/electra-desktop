import * as ActionNames from './action-names'
import { SendEca, SetAmount, SetToAddress  } from './types'

export function sendEca(): SendEca {
    return {
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