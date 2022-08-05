import React, { useEffect } from "react";

import { SearchCardOpen } from "../../components/SearchCardOpen";
import { ButtonCard } from "../../components/Form/ButtonCard";

import { 
    Container,
    Header,
    HeaderTitle,
    ButtonBack,
    Icon
  } from "./styles";

  const data_search ={
        id: '1',
        subtitle: "Inteção de votos",
        title: "Pesquisa em Lavandeira",
        category: "Em andamento",
        date: "07/06/2022"
    }

export function Search({ navigation }: any) {
    return (
        <Container>
            <Header>
                <ButtonBack onPress={()=> navigation.navigate('Home')}>
                    <Icon name="arrowleft"/>
              </ButtonBack>
                <HeaderTitle>
                    Pesquisa X
                </HeaderTitle>
            </Header>
            <SearchCardOpen data={data_search} cont={22}/>
            <ButtonCard title="Responder" type="response" onPress={()=> navigation.navigate('ResponseSearch')} />
            <ButtonCard title="Finalizar" type="finish" />
        </Container>
    )
}