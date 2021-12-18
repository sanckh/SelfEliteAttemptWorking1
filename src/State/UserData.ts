import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './store'
import { CloudSettings } from "@ionic-native/cloud-settings";

type GenderType = 'Male' | 'Female' | 'Non Binary' | 'Unspecified'

interface UserState {
    name: string
    email: string
    gender: GenderType
    birthday: Date
}

const getInitialState = () => {
    let state: UserState = {
        name: '',
        email: '',
        gender: 'Unspecified',
        birthday: new Date()
    }
    return state
}

export const userSlice = createSlice({
    name: 'user',
    initialState: getInitialState(),
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setGender: (state, action: PayloadAction<GenderType>) => {
            state.gender = action.payload
        },
        setBirthday: (state, action: PayloadAction<Date>) => {
            state.birthday = action.payload
        }
    }
})