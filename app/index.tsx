import { useState } from "react";
import Slider from "@react-native-community/slider";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { ModalPassword } from "@/components/modal/modal";

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

export default function i() {
  const [size, setSize] = useState(10);
  const [senha, setSenha] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  
  function generatePassword(){
    let password =""
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n)); 
    }
    setSenha(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/react-logo.png")}
        style={styles.logo}
      />
      
      <Text style={styles.title}>{size} caracteres</Text>
      
      <View style={styles.areaSlider}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="cyan"
          maximumTrackTintColor="#FFF"
          thumbTintColor="cyan"
          value={size}
          onValueChange={(value)=>setSize(parseInt(Number(value)))}
        />

      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent>
        <ModalPassword senha={senha} handleClose={ () => setModalVisible(false) } />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  logo:{
    marginBottom:60
  },
  title:{
    fontSize: 30,
    fontWeight: "bold"
  },
  areaSlider:{
    marginTop:14,
    marginBottom:14,
    width: "80%",
    backgroundColor: "#888",
    borderRadius: 8,
    padding: 6
  },
  button:{
    backgroundColor: "cyan",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#000",
    fontSize: 20
  }
});