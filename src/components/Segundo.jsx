import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";

export default () => {
    return(
        <View style={[segundoEstilo.bFundo, segundoEstilo.FGrande]}>
            <Text>Teste 1 - Segundo</Text>
            <Text>Teste 2 - Segundo</Text>
            <Text>Teste 3 - Segundo</Text>
        </View>

    )
}

const segundoEstilo = StyleSheet.create(
    {bFundo: {backgroundColor: '#00FFFF',}},
    {FGrande:{fontSize: 50,}},
)