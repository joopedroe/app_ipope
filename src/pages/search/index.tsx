import React, { useEffect } from "react";
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from "native-base";
import { Alert } from 'react-native';

import { SearchCardOpen } from "../../components/SearchCardOpen";
import { ButtonCard } from "../../components/Form/ButtonCard";
import { useState } from "react";
import SearchPresenter from "../../presenter/search-presenter";
import AsyncStorage from "@react-native-async-storage/async-storage";


import { 
    Container,
    Header,
    HeaderTitle,
    ButtonBack,
    Icon,
    Title,
    Subtitle
  } from "./styles";


export function Search({ navigation }: any) {
    const [showModal, setShowModal] = useState(false);
    const dataKey = '@ResponseSearch:key';
    const dataName = '@ResponseSearch:name';
    const dataSearch = '@ResponseSearch:search';
    const [responseSearch, setResponseSearch] = React.useState({});
    const [responsesQuest, setResponseQuest] = React.useState([]);
    const [user_name, setUserName] = React.useState('');

    useEffect(() => {
        async function handleResponseApi(){
            await AsyncStorage.getItem(dataSearch).then( (responses) => {
                const response = responses ? JSON.parse(responses) : null;
                if(response){
                    setResponseSearch(response);
                }
            }).catch( (error) => {
                console.log(error);
            } );
        }

        async function handleUserName(){
            await AsyncStorage.getItem(dataName).then( (response) => {
                setUserName(response);
            }).catch( (error) => {
                console.log(error);
            } );
        }
        handleUserName();
        handleResponseApi();
    } , []);

    async function handleResponse(){
        try{
          const responses = await AsyncStorage.getItem(dataKey);
          const curret_responses = responses ? JSON.parse(responses!) : [];
          return curret_responses;
        
        }
        catch(error){
          Alert.alert("Erro", "Erro ao responder pesquisa");
          return [];
        }
      }

    async function postSearchApi() {
        try{
            if(responsesQuest.length = 0){
                Alert.alert('Oops!', 'Sem respostas!');
            }
            if(!responseSearch["code"]){
                Alert.alert('Oops!', 'Sem pesquisas cadastradas!');
            }
            handleResponse().then(data => {
                const params = {
                    "username": user_name,
                    "data": data,
                }
                if(responseSearch["code"]&& data.length > 0){
                    const code = responseSearch["id"];
                    SearchPresenter.postResponses(code, params).then(res => {
                        //if(!res){
                        //    Alert.alert('Oops!', 'Não foi possível enviar a pesquisa, verifique a internet e tente novamente!');
                        //}
                        //else{
                        AsyncStorage.removeItem(dataKey);
                        AsyncStorage.removeItem(dataSearch);
                        Alert.alert('Sucesso!', 'Pesquisa enviada com sucesso!');
                        navigation.push('Home')
                        //}
                    }).catch(err => {
                        Alert.alert('Oops!', 'Não foi possível buscar a pesquisa, verifique o código e tente novamente!2');
                    }).finally(() => {
                        setShowModal(false);
                    });
                }
                else{
                    Alert.alert('Oops!', 'Pesquisa não possui respostas!');
                }
            });
        }catch(error){
            console.log(error);
        }
    }

    const DialogSearchUpload = () => {
        return <Center>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content maxWidth="500px">
                <Modal.CloseButton />
                <Modal.Header>Enviar Pesquisa</Modal.Header>
                <Modal.Body>
                    <Title>Tem certeza que deseja enviar as respostas?</Title>
                    <Subtitle>Verifique se está conectado a internet</Subtitle>
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                    setShowModal(false);
                  }}>
                      Cancelar
                    </Button>
                    <Button onPress={() => {
                        postSearchApi()
                  }}>
                      Enviar
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Center>;
      };

    return (
        <Container>
            <Header>
                <ButtonBack onPress={()=> navigation.push('Home')}>
                    <Icon name="arrowleft"/>
              </ButtonBack>
                <HeaderTitle>
                    IPOPE Pesquisas
                </HeaderTitle>
            </Header>
            <SearchCardOpen data={responseSearch} />
            <ButtonCard title="Responder" type="response" onPress={()=> navigation.push('ResponseSearch')} />
            <DialogSearchUpload />
            <ButtonCard title="Finalizar" type="finish" onPress={() => setShowModal(true)} />
        </Container>
    )
}