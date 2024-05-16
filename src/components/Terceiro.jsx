import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";

export default () => {
    return(
        <View style={terceiroEstilo.bFundo}>
            <Text>Texto 1 - Terceiro</Text>
            <Text>Texto 2 - Terceiro</Text>
            <Text>Texto 3 - Terceiro</Text>
            <Text>Texto 4 - Terceiro</Text>
        </View>

    )
}

const terceiroEstilo = StyleSheet.create(
    {
        bFundo: {backgroundColor: '#00FFFF',},
    }
)