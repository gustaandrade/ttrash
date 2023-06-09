import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

import Input from '../input';
import Button from '../button';

import splash3 from '../../../assets/splash3.png';

export default function Form(props) {
  return (
    <View style={styles.container}>
      {props.type == 'login' && (
        <View style={styles.innerContainer}>
          <Input label='E-mail' placeholder='E-mail' type='email' />
          <Input label='Senha' placeholder='Senha' type='password' />

          <View style={styles.buttonArea}>
            <Button text='Entrar' onPress={() => props.changeScreenTo(0)} />
          </View>

          <Text style={styles.description}>
            Entrando com uma conta, você concorda com nossos Termos de Uso e
            Política de Privacidade
          </Text>

          <Text style={styles.description}>
            Não tem uma conta?{' '}
            <Text
              style={styles.descriptionUrl}
              onPress={() => props.changeScreenTo(2)}
            >
              Cadastre-se
            </Text>
          </Text>
        </View>
      )}

      {props.type == 'register' && (
        <View style={styles.innerContainer}>
          <Input label='Nome' placeholder='Nome' type='none' />
          <Input label='E-mail' placeholder='E-mail' type='email' />
          <Input label='Senha' placeholder='Senha' type='password' />

          <View style={styles.buttonArea}>
            <Button text='Cadastrar' onPress={() => props.changeScreenTo(0)} />
          </View>

          <Text style={styles.description}>
            Criando uma conta, você concorda com nossos Termos de Uso e Política
            de Privacidade
          </Text>

          <Text style={styles.description}>
            Já possui uma conta?{' '}
            <Text
              style={styles.descriptionUrl}
              onPress={() => props.changeScreenTo(1)}
            >
              Entre
            </Text>
          </Text>
        </View>
      )}

      {props.type == 'profile' && (
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.pointsOpacity}
            onPress={() => {
              props.changeScreenTo(4);
            }}
          >
            <Text style={styles.pointsText}>Pontos Totais</Text>
            <Text style={styles.pointsValue}>0</Text>
          </TouchableOpacity>

          <Input label='Nome' placeholder='Nome' type='none' />
          <Input label='E-mail' placeholder='E-mail' type='email' />
          <Input label='Senha' placeholder='Senha' type='password' />

          <View style={styles.buttonArea}>
            <Button text='Atualizar' onPress={() => props.changeScreenTo(0)} />
          </View>
        </View>
      )}

      {props.type == 'points' && (
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.pointsOpacity} onPress={() => {}}>
            <Text style={styles.pointsText}>Pontos Totais</Text>
            <Text style={styles.pointsValue}>0</Text>
          </TouchableOpacity>

          <Text style={styles.description}>
            Ao realizar entrega de materiais em pontos de coleta cadastrados no
            aplicativo, você recebe pontos que podem ser usados em diferentes
            vantagens!
          </Text>

          <TouchableOpacity style={styles.pointsOpacity} onPress={() => {}}>
            <Text style={styles.pointsText}>Cupom 20% Amazon</Text>
            <Text style={styles.pointsValue}>120</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pointsOpacity} onPress={() => {}}>
            <Text style={styles.pointsText}>Cupom 10% Zé Delivery</Text>
            <Text style={styles.pointsValue}>250</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pointsOpacity} onPress={() => {}}>
            <Text style={styles.pointsText}>Cupom 5% Mercado Livre</Text>
            <Text style={styles.pointsValue}>500</Text>
          </TouchableOpacity>
        </View>
      )}

      {props.type == 'suggestion' && (
        <View style={styles.innerContainer}>
          <Text style={styles.description}>
            Não encontrou um ponto de coleta próximo a sua região? Nos diga a
            sua área para que possamos estudar a disponibilidade com órgãos
            locais quando possível.
          </Text>

          <Input label='Estado' placeholder='Estado' type='none' />
          <Input label='Cidade' placeholder='Cidade' type='none' />
          <Input label='Bairro' placeholder='Bairro' type='none' />

          <View style={styles.buttonArea}>
            <Button text='Enviar' onPress={() => props.changeScreenTo(0)} />
          </View>
        </View>
      )}

      {props.type == 'place' && (
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Edifício Ramos</Text>

          <Text style={styles.description}>
            Endereço: Avenida Almeida, 258 - São Paulo, SP - 03001-034 {'\n'}
            Funcionamento: das 8h as 20h
          </Text>

          <Image
            style={styles.image}
            source={splash3}
            alt='Foto do estabelecimento'
          />

          <View style={styles.buttonArea}>
            <Button
              text='Ver produtos aceitos'
              onPress={() => props.changeScreenTo(0)}
            />
          </View>

          <View style={styles.buttonArea}>
            <Button
              text='Ver empresa parceira'
              onPress={() => props.changeScreenTo(0)}
            />
          </View>

          <View style={styles.buttonArea}>
            <Button
              text='Abrir no mapa'
              onPress={() => props.changeScreenTo(0)}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033D6A',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  innerContainer: {
    width: '100%',
    padding: 32,
    marginBottom: 240
  },
  pointsOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#ffffff',
    border: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 5,
    marginVertical: 16
  },
  pointsText: {
    color: '#033D6A',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  pointsValue: {
    color: '#033D6A',
    fontSize: 40,
    fontWeight: 'bold'
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 5,
    fontSize: 16,
    height: 40
  },
  label: {
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  title: {
    paddingVertical: 5,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  textError: {
    color: '#fc6d47',
    fontSize: 14
  },
  buttonArea: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 32
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 12
  },
  descriptionUrl: {
    color: '#009CFF',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  image: {
    width: 128,
    height: 128,
    alignSelf: 'center',
    marginVertical: 16
  }
});
