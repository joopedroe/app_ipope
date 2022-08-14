import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';

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
export function SearchCardOpen({data} : Props) {
    const [cont, setCont] = React.useState(0);
    const dataKey = '@ResponseSearch:key';

    useFocusEffect(
        React.useCallback(() => {
            async function handleResponse(){
                const responses = await AsyncStorage.getItem(dataKey)
                const quant_response = responses ? JSON.parse(responses) : [];
                setCont(quant_response.length);
            }
            handleResponse();
        }, [])
      );
    useEffect(() => {
        
    } , []);
    return (
        <Container>
            <Subtitle>{data.name}</Subtitle>
            <Title>{data.description}</Title>
            <Title>Cidade: {data.city}</Title>
            <Footer>
                <Category>
                    <CategoryTitle>Em andamento</CategoryTitle>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
            <Subtitle>Quant. de respostas: {cont}</Subtitle>
        </Container>
    );
}