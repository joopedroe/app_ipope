import React from "react";
import { Alert } from 'react-native';
import { SearchCard, SearchCardProps } from "../../components/SearchCard";
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from "native-base";
import SearchPresenter from "../../presenter/search-presenter";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Container, Header, HeaderTitle, ListSearch, ListSearchItem, SearchContainer, ButtonBack, Icon, TextLabel  } from "./styles";

export interface SearchProps extends SearchCardProps {
    id: string;
}
export function Home({ navigation }: any) {
    const dataName = '@ResponseSearch:name';
    const dataSearch = '@ResponseSearch:search';
    const [responseSearch, setResponseSearch] = React.useState([]);

    useEffect(() => {
        async function handleResponseApi(){
            await AsyncStorage.getItem(dataSearch).then( (responses) => {
                const response = responses ? JSON.parse(responses) : null;
                if(response){
                    setResponseSearch([response]);
                }
                else{
                    setResponseSearch([]);
                }
            }).catch( (error) => {
                console.log(error);
            } );
        }
        handleResponseApi();
      },[]);
      
    function openSearch() {
        navigation.navigate('Search');
    }

    function updateSearch() {
     setResponseSearch([]);
    }

    async function getSearchApi(name: string, code: string) {
        SearchPresenter.getSearch(code).then(res => {
            if(!res){
                Alert.alert('Oops!', 'Não foi possível buscar a pesquisa, verifique o código e tente novamente!');
            }
            else{
                 AsyncStorage.setItem(dataName, name);
                 AsyncStorage.setItem(dataSearch, JSON.stringify(res));
                 setResponseSearch([res]);
            }
        }).catch(err => {
            Alert.alert('Oops!', 'Não foi possível buscar a pesquisa, verifique o código e tente novamente!2');
        }).finally(() => {
            console.log("finally");
        });
    }

const DialogSearch = () => {
  const [showModal, setShowModal] = useState(false);
  const [nameUser, setNameUser] = useState('');
  const [codSearch, setCodSearch] = useState('');
  const [errors, setErrors] = React.useState({});
  const handleChangeName = text => setNameUser(text);
  const handleChangeCod = text => setCodSearch(text);

  const validate = () => {
    if (nameUser === '') {
      setErrors({ ...errors,
        name: 'Nome é obrigatório'
      });
      return false;
    } else if (codSearch === '') {
      setErrors({ ...errors,
        cod: 'Códido é obrigatório'
      });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    validate() ? getSearchApi(nameUser, codSearch) : console.log('Validation Failed');
  };

  return <Center>
    <ButtonBack onPress={() => setShowModal(true)}>
                <Icon name="pluscircleo"/>
                <TextLabel>Adicionar</TextLabel>
              </ButtonBack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Adicionar Pesquisa</Modal.Header>
          <Modal.Body>
            <FormControl isRequired isInvalid={'name' in errors}>
              <FormControl.Label>Nome usuário</FormControl.Label>
              <Input value={nameUser} onChangeText={handleChangeName} />
            </FormControl>
            <FormControl mt="1" isRequired isInvalid={'cod' in errors}>
              <FormControl.Label>Código da pesquisa</FormControl.Label>
              <Input value={codSearch} onChangeText={handleChangeCod} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancelar
              </Button>
              <Button onPress={() => {
              onSubmit();
            }}>
                Adicionar
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
                <HeaderTitle>
                    Pesquisas diponíveis
                </HeaderTitle>
                <NativeBaseProvider>
            <Center flex={1} px="3">
                <DialogSearch  />
            </Center>
          </NativeBaseProvider>
            </Header>
            <SearchContainer>
                <ListSearch
                    data={responseSearch}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <SearchCard data={item} />}
                />
            </SearchContainer>
        </Container>
    )
}
