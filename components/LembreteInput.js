import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LembreteInput = (props) => {
    const[lembrete, setLembrete] = useState('');
    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);
    }
    return (
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
                onPress={() => {props.onAdicionarLembrete(lembrete)}}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
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
      }
});

export default LembreteInput;