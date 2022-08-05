import React, {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
export function SearchCardOpen({data} : Props) {
    const [cont, setCont] = React.useState(0);
    const dataKey = '@ResponseSearch:key';
    useEffect(() => {
        async function handleResponse(){
            const responses = await AsyncStorage.getItem(dataKey)
            const quant_response = responses ? JSON.parse(responses) : [];
            setCont(quant_response.length);
        }
        handleResponse();
    } , []);
    return (
        <Container>
            <Title>{data.title}</Title>
            <Subtitle>{data.subtitle}</Subtitle>
            <Footer>
                <Category>
                    <CategoryTitle>{data.category}</CategoryTitle>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
            <Subtitle>Quest. respostas: {cont}</Subtitle>
        </Container>
    );
}