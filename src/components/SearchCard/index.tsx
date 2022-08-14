import React from "react";
import { useNavigation } from "@react-navigation/native";

import { 
    Container,
    Title,
    Subtitle,
    Footer,
    Category,
    CategoryTitle,
    Date
 } from "./styles";

 export interface SearchCardProps {
        name: string;
        description: string;
        city: string;
        date: string;
 }
 interface Props {
    data: SearchCardProps
}
export function SearchCard({data} : Props) {
    const navigation = useNavigation();
    return (
        <Container onPress={()=> navigation.navigate('Search')} >
            <Subtitle>{data.name}</Subtitle>
            <Title>{data.description}</Title>
            <Title>Cidade: {data.city}</Title>
            <Footer>
                <Category>
                    <CategoryTitle>Em andamento</CategoryTitle>
                </Category>
                <Date>{data.date}</Date>

            </Footer>
        </Container>
    );
}