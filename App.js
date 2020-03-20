import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [lembrete, setLembrete] = useState ('');
  const[lembretes, setLembretes] = useState ([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  const capturarLembrete = (lembrete) => {
    setLembrete (lembrete);
  };

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      console.log(lembretes);
      setContadorLembretes(contadorLembretes + 1);  
      return [{key: contadorLembretes.toString(), value: lembrete}, ...lembretes];
    })
    //console.log (lembrete);
  };

  return (
   <View style={styles.telaPrincipalView}>
     
     <View style={styles.lembreteView}>
      {/* usuário irá inserir lembretes aqui*/}
      <TextInput 
        placeholder="Lembrar..." 
        style={styles.lembreteInputText}
        onChangeText={capturarLembrete}
        value={lembrete}
      />
      <Button 
        title="+"
        onPress={adicionarLembrete}
      />
     </View>

    {
      /* 
      <ScrollView>
        {Aqui será exibida a lista de lembretes }
        {
          lembretes.map((lembrete) => <View key={lembrete} style={styles.itemNaLista}><Text>{lembrete}</Text></View>)
        }
      </ScrollView>
      */
    }

    <FlatList
      data={lembretes}
      renderItem={
        lembrete => (
          <View style={styles.itemNaLista}>
            <Text>{lembrete.item.value}</Text>
          </View>
        )
      }
    />
    

   </View>
  );
}

const styles = StyleSheet.create(
  {
    telaPrincipalView: {
      padding: 50
    },
    lembreteView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    },
    lembreteInputText: {
      width: '80%',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      padding: 2
    },
    itemNaLista: {
      padding: 12,
      backgroundColor: '#CCC',
      borderBottomColor: '#000',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 8
    }
  }
);
