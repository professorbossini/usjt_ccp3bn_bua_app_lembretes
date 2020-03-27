import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import LembreteItem  from './components/LembreteItem';
import LembreteInput from './components/LembreteInput'

export default function App() {
  const[lembretes, setLembretes] = useState ([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  

  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      console.log(lembretes);
      setContadorLembretes(contadorLembretes + 1);  
      return [{key: contadorLembretes.toString(), value: lembrete}, ...lembretes];
    })
    //console.log (lembrete);
  };

  const removerLembrete = (keyASerRemovida) => {
    setLembretes (lembretes => {
      return lembretes.filter ((lembrete) => {
        lembrete.key !== keyASerRemovida
      });
    });
  };
  
  return (
   <View style={styles.telaPrincipalView}>
     
    <LembreteInput onAdicionarLembrete={adicionarLembrete}/>

    <FlatList
      data={lembretes}
      renderItem={
        lembrete => (
          <LembreteItem
            chave={lembrete.item.key} 
            lembrete={lembrete.item.value}
            onDelete={removerLembrete}
          />
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
    }
  }
);
