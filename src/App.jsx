import React from "react";
import { Text, View } from "react-native";

import Terceiro from "./components/Terceiro";
import Segundo from "./components/Segundo";
import Janela from "./components/Janela";
import estilo from "./components/estilo";

export default () => {
    return (
        <View >
            <Terceiro/>
            <Segundo/>
            <Janela/>
        </View>
    )
}