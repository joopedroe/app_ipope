import styled from "styled-components/native";
import { FlatList, FlatListProps, TouchableOpacity } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { SearchProps} from ".";
import {  AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
width: 100%;
margin-top: ${RFPercentage(4)}px;
height: ${RFPercentage(20)}px;
background-color: ${({theme}) => theme.colors.primary};
justify-content: center;
align-items: center;
`;

export const HeaderTitle = styled.Text`
color: ${({theme}) => theme.colors.text};
font-size: ${RFPercentage(3.5)}px;
font-family: ${({theme}) => theme.fonts.medium};
margin-top: ${RFPercentage(4)}px;
`;

export const SearchContainer = styled.View`
    flex: 1%;
    padding: 0 24px;
`;

export const ListSearch = styled(
    FlatList as new ( props: FlatListProps<SearchProps>) => FlatList<SearchProps>).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 20
        }
        })`
`;

export const ListSearchItem = styled.TouchableOpacity`
width: 100%;
height: ${RFPercentage(20)}px;
background-color: ${({theme}) => theme.colors.primary};
justify-content: center;
align-items: center;
`;

export const ListSearchItemText = styled.Text`
`;

export const ButtonBack = styled(TouchableOpacity)`
width: ${RFValue(200)}px;
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
color: ${({theme}) => theme.colors.text};
font-size: ${RFValue(24)}px;
margin-right: ${RFValue(10)}px;
`;

export const TextLabel = styled.Text`
color: ${({theme}) => theme.colors.text};
font-family: ${({theme}) => theme.fonts.regular};
font-size: ${RFValue(19)}px;
`;
