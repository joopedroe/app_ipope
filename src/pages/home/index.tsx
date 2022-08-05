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
            subtitle: "Inteção de votos",
            title: "Pesquisa em Lavandeira",
            category: "Em andamento",
            date: "07/06/2022"
        },
        {
            id: '2',
            subtitle: "Inteção de votos",
            title: "Pesquisa em Lavandeira",
            category: "Em andamento",
            date: "07/06/2022"
        },
        {
            id:'3',
            subtitle: "Inteção de votos",
            title: "Pesquisa em Lavandeira",
            category: "Em andamento",
            date: "07/06/2022"
        },
        {
            id: '4',
            subtitle: "Inteção de votos",
            title: "Pesquisa em Lavandeira",
            category: "Em andamento",
            date: "07/06/2022"
        },
        {
            id: '5',
            subtitle: "Inteção de votos",
            title: "Pesquisa em Lavandeira",
            category: "Em andamento",
            date: "07/06/2022"
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
