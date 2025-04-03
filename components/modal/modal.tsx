import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

export function ModalPassword({ senha, handleClose }: { senha: string; handleClose: () => void }) {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.senhaGerada}>
                    <Text style={styles.senhaGeradaTexto}>{senha}</Text>
                </Pressable>

                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content:{
        backgroundColor: "#000",
        width: "80%",
        paddingTop:12,
        paddingBottom:12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 14
    },
    senhaGerada:{
        backgroundColor:"#FFF",
        width:"90%",
        padding:14,
        borderRadius: 8
    },
    senhaGeradaTexto:{
        color:"#000",
        textAlign: "center",
    },
    button:{
        backgroundColor: "cyan",
        width: "90%",
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginTop: 10
    },
    buttonText:{
        color: "#000",
        fontSize: 10,
        textAlign: "center",
    }
});