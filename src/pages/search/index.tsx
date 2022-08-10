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
        subtitle: "Avaliação política",
        title: "Questionário de pesquisa semi-quantitativa de avaliação nas regiões sul e sudeste do estado do Tocantins nas eleições de 2022",
        category: "Em andamento",
        date: "07/08/2022"
    }

export function Search({ navigation }: any) {

    useEffect(() => {
        console.log("Search-----------");
    } , []);

    return (
        <Container>
            <Header>
                <ButtonBack onPress={()=> navigation.navigate('Home')}>
                    <Icon name="arrowleft"/>
              </ButtonBack>
                <HeaderTitle>
                    IPOPE Pesquisas
                </HeaderTitle>
            </Header>
            <SearchCardOpen data={data_search} />
            <ButtonCard title="Responder" type="response" onPress={()=> navigation.push('ResponseSearch')} />
            <ButtonCard title="Finalizar" type="finish" />
        </Container>
    )
}