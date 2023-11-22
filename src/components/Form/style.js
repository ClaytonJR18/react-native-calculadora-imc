import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContent:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
        paddingTop:20,
    },
    form:{
        width:"100%",
        height:"auto",
        padding:10,
    },
    formLabel:{
        color:"000000",
        fontSize:18,
        paddingLeft:20,
    },
    formInput:{
        backgroundColor:"#f6f6f6",
        width:"90%",
        borderRadius:50,
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCalcular:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#5a913a",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,

    },
    textButtonCalcular:{
        fontSize:20,
        color:"#ffffff",


    }
    
});

export default styles