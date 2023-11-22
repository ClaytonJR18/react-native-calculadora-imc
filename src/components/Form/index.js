import ResultImc from "./ResultImc";
import React, { useState } from "react";
import {TextInput, Text, View, TouchableOpacity} from "react-native";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = useState("insere a altura e o peso");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function calcularImc(){
        return setImc((weight/ (height*height)).toFixed(2));

    }

    function validationImc(){
        if (weight != null && height != null){
            calcularImc()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Insere a altura e o peso")
    }

    return(
        <View style={styles.formContent}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder="Entre com a sua altura Ex: 1.75"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Entre com o seu peso em KG"
                keyboardType="numeric"/>

                <TouchableOpacity
                style={styles.buttonCalcular}
                onPress={() => {validationImc()}} >
                    
                    <Text style={styles.textButtonCalcular}>{textButton}</Text>
                
                </TouchableOpacity>
                
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}