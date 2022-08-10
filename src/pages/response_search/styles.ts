import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FlatList, FlatListProps, TouchableOpacity, ScrollView } from "react-native";
import {  AntDesign } from "@expo/vector-icons";

import { QuestionPros } from "."

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
background-color: ${({theme}) => theme.colors.primary};
margin-top: ${RFPercentage(4)}px;
width: 100%;
height: ${RFPercentage(13)}px;
align-items: center;
flex-direction: row;
padding-bottom: 19px;
`;

export const ButtonBackHeader = styled(TouchableOpacity)`
width: 10%;
height: ${RFValue(60)}px;
flex-direction: row;
align-items: center;
border: 0px solid ${({theme}) => theme.colors.text};
border-radius: ${RFValue(6)}px;
justify-content: flex-start;
`;

export const IconHeader = styled(AntDesign)`
font-size: ${RFValue(30)}px;
color: ${({theme}) => theme.colors.text};
margin-left: ${RFValue(10)}px;
`;

export const HeaderTitle = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
color: ${({theme}) => theme.colors.text};
font-size: ${RFValue(22)}px;
margin-left: ${RFValue(10)}px;

`;

export const OptionsContainer = styled.View`
background-color: ${({theme}) => theme.colors.background};
height: 70%;

`;
export const QuestionContainer = styled.View`
background-color: ${({theme}) => theme.colors.background};
padding: 0 24px;
height: 55%;
flex: 1;
`;

export const TextLabel = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(19)}px;
`;

export const Option = styled.View`
width: 100%;
height: ${RFValue(60)}px;
background-color: ${({theme}) => theme.colors.background};
`;

export const BodyLabel = styled.View`
padding: 0 5px;
background-color: ${({theme}) => theme.colors.background};

`;

export const ListOption = styled(
    FlatList as new ( props: FlatListProps<QuestionPros>) => FlatList<QuestionPros>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 2
        }
        })`
`;

export const ButtonFooter = styled.View`
flex-direction: row;
position: static;
justify-content: space-between;
background-color: ${({theme}) => theme.colors.background};
height: ${RFValue(60)}px;
`;

export const ButtonNext = styled(TouchableOpacity)`
width: 48%;
height: ${RFValue(60)}px;
align-items: center;
border: 0px solid ${({theme}) => theme.colors.text};
border-radius: ${RFValue(6)}px;
padding: 10px;
flex-direction: row;
justify-content: center;
`;

export const ButtonBack = styled(TouchableOpacity)`
width: 48%;
flex-direction: block;
height: ${RFValue(60)}px;
flex-direction: row;
align-items: center;
border: 0px solid ${({theme}) => theme.colors.text};
border-radius: ${RFValue(6)}px;
padding: 10px;
justify-content: center;
`;

export const Icon = styled(AntDesign)`
font-size: ${RFValue(24)}px;
margin-right: ${RFValue(10)}px;
`;

export const BoxQuestion = styled.View`
height: ${RFValue(80)}px;
width: 100%;
padding-bottom: 50px;
`;

export const BoxQuestionCheck = styled.View`
height: ${RFValue(80)}px;
width: 100%;
padding-bottom: 50px;
flex-direction: row;
align-items: center;
`;

export const InputResponse = styled.TextInput`
flex: 1;
`;

export const ScrollViewDisplay = styled.ScrollView`
    background-color: ${({theme}) => theme.colors.background};
`;

export const ListSearch = styled(
    FlatList as new ( props: FlatListProps<SearchProps>) => FlatList<SearchProps>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20
        }
        })`
`;
