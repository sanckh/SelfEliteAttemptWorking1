import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "./store";
import _ from "lodash";

type AchievementCategory = "Sleep" | "Health" | "Exercise" | "Challenge" | "Other" | "Social"

interface Achievement {
    category: AchievementCategory
    description: string
    icon: string
    title: string
}

export interface AchievementPayload {
    id: string
    value: Achievement
}

interface AchievementState {
    value: {[key: string]: Achievement}
}

const initialState: AchievementState = {
    value: {}
}

export const achievementSlice = createSlice({
    name: 'achievements',
    initialState,
    reducers: {
        getFromWeb: (state) => {

        },
        addAchievement: (state, action: PayloadAction<AchievementPayload>) => {
            let newState = state.value
            _.set(newState, action.payload.id, action.payload.value)
            state.value = newState
        },
        removeAchievement: (state, action: PayloadAction<string>) => {
            let newState: typeof state.value = {}
            let keySet = new Set(_.keys(newState))
            keySet.delete(action.payload)
            keySet.forEach((v, vv, vvv) => {
                _.set(newState, v, _.get(state, 'v'))
            })
            state.value = newState
        }
    }
})

export const {getFromWeb, addAchievement} = achievementSlice.actions
export default achievementSlice.reducer