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
        title: string;
        subtitle: string;
        category: string;
        date: string;
 }
 interface Props {
    data: SearchCardProps
}
export function SearchCard({data} : Props) {
    const navigation = useNavigation();
    return (
        <Container onPress={()=> navigation.navigate('Search')} >
            <Title>{data.title}</Title>
            <Subtitle>{data.subtitle}</Subtitle>
            <Footer>
                <Category>
                    <CategoryTitle>{data.category}</CategoryTitle>
                </Category>
                <Date>{data.date}</Date>

            </Footer>
        </Container>
    );
}