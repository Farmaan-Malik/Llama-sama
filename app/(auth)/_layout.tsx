import { Stack } from "expo-router";
import React from 'react';

const _Layout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name={"index"}/>
            <Stack.Screen name={"signup"}/>
            <Stack.Screen name={"login"}/>
        </Stack>
    )
}
export default _Layout
