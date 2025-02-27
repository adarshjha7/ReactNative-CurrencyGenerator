import { View, Text, StyleSheet } from 'react-native'
import React, { JSX } from 'react'
import { PropsWithChildren } from 'react'


type CurrencyButtonProps=PropsWithChildren<{
    name:string;
    flag:string;
}>

const CurrencyButton=(props: CurrencyButtonProps):JSX.Element=>{
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:28,
        color:'rgb(1,2,245)',
        marginBottom:4
    },
    name:{
        fontSize:28,
        color:'rgb(210,2,245)',
        marginBottom:4
    }
})
export default CurrencyButton
