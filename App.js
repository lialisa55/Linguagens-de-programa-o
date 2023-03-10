import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nabla_400Regular,
  FragmentMono_400Regular,
  FragmentMono_400Regular_Italic,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nabla_400Regular,
    FragmentMono_400Regular,
    FragmentMono_400Regular_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Linguagens de programação</Text>
        <Text style={styles.subTitle}>-- JavaScript --</Text>
        <Text style={styles.paragraph}>
          JavaScript é uma linguagem de programação interpretada estruturada, de
          script em alto nível com tipagem dinâmica fraca e multiparadigma.
          Juntamente com HTML e CSS, o JavaScript é uma das três principais
          tecnologias da World Wide Web.
        </Text>
        <Text style={styles.subTitle}>-- C++ --</Text>
        <Text style={styles.paragraph}>
          C++ é uma linguagem de programação compilada multi-paradigma e de uso
          geral. Desde os anos 1990 é uma das linguagens comerciais mais
          populares, sendo bastante usada também na academia por seu grande
          desempenho e base de utilizadores.
        </Text>
        <Text style={styles.subTitle}>-- Java --</Text>
        <Text style={styles.paragraph}>
          Java é uma linguagem de programação e plataforma de computação
          liberada pela primeira vez pela Sun Microsystems em 1995. De um início
          humilde, ela evoluiu para uma grande participação no mundo digital dos
          dias atuais, oferecendo a plataforma confiável na qual muitos serviços
          e aplicativos são desenvolvidos.
        </Text>
        <FlatList
          data={arrayConsole}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.console}>
                {item.lang} {item.ano} {item.framework}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9EBFF',
    padding: 8,
  },
  title: {
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Nabla_400Regular',
    color: 'black',
  },
  subTitle: {
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'FragmentMono_400Regular',
    color: 'white',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'FragmentMono_400Regular',
    color: 'white',
  },
});

const arrayConsole = [
  { lang: 'C#', ano: '200', framework: '.NET' },
  { lang: 'Java', ano: '1991', framework: 'Spring' },
  { lang: 'C++', ano: '1971', framework: 'Gtkmm' },
];
