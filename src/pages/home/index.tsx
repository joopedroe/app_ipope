import React from "react";
import { SearchCard, SearchCardProps } from "../../components/SearchCard";

import { Container, Header, HeaderTitle, ListSearch, ListSearchItem, SearchContainer  } from "./styles";

export interface SearchProps extends SearchCardProps {
    id: string;
}
export function Home({ navigation }: any) {
    const data_search: SearchProps[] = [
        {
            id: '1',
            subtitle: "Avaliação política",
            title: "Questionário de pesquisa semi-quantitativa de avaliação nas regiões sul e sudeste do estado do Tocantins nas eleições de 2022",
            category: "Em andamento",
            date: "07/08/2022"
        }
    ]
      
    function openSearch() {
        console.log("openSearch");
        navigation.navigate('Search');
    }
    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Pesquisas diponíveis
                </HeaderTitle>
            </Header>
            <SearchContainer>
                <ListSearch
                    data={data_search}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <SearchCard data={item} />}
                />
            </SearchContainer>
        </Container>
    )
}
