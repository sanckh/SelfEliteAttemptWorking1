import {useState} from 'react'
import {useAppSelector, useAppDispatch} from "../State/hooks";
import {decrement, increment} from "../State/kounter";
import {IonButton, IonText} from "@ionic/react";

export function Kounter() {
    const count = useAppSelector(state => state.kounter.value)
    const dispatch = useAppDispatch()

    return (
        <>
            <IonButton onClick={() => dispatch(increment())}>+</IonButton>
            <span>{count}</span>
            <IonButton onClick={() => dispatch(decrement())}>-</IonButton>
        </>
    )
}