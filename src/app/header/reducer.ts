import * as ActionNames from './action-names'
import { HeaderState, StakingActions} from './types'

const initialState: HeaderState = {
  walletStakingInfo: {
    networkWeight: undefined,
    nextRewardIn: undefined,
    staking: undefined,
    weight: undefined
  }
}

export default function(state: HeaderState = initialState, action: StakingActions): any {
  switch (action.type) {
    case ActionNames.GET_STAKING_INFO_SUCCESS: {
      const { networkWeight, nextRewardIn, weight, staking } = action.payload

      return {
        walletStakingInfo: {
        networkWeight,
        nextRewardIn,
        staking,
        weight
        }
      }
    }
    case ActionNames.GET_STAKING_INFO_FAIL: {
      return {
        ...state,
      }
    }
    default: return state
  }
}
