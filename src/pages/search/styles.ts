import { RFValue,  RFPercentage  } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {  AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100%;
    flex: 1%;
    padding: 0 16px;
`;

export const Header = styled.View`
    margin-top: ${RFPercentage(4)}px;
    background-color: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: ${RFPercentage(13)}px;
    align-items: center;
    flex-direction: row;
`;

export const HeaderTitle = styled.Text`
    justify-content: center;
    margin-left: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(22)}px;
`;

export const ButtonBack = styled(TouchableOpacity)`
width: 10%;
height: ${RFValue(60)}px;
flex-direction: row;
align-items: center;
border: 0px solid ${({theme}) => theme.colors.text};
border-radius: ${RFValue(6)}px;
justify-content: flex-start;
`;

export const Icon = styled(AntDesign)`
font-size: ${RFValue(30)}px;
color: ${({theme}) => theme.colors.text};
margin-left: ${RFValue(10)}px;
`;