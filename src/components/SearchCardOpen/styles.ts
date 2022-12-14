import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    height: ${RFValue(250)}px;
    border-radius: 7px;
    padding: 17px 24px;
    margin-top: ${RFValue(10)}px;
`;
export const Title = styled.Text`
font-size: ${RFValue(14)}px; ;
font-family: ${({theme}) => theme.fonts.regular};
`;

export const Subtitle = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({theme}) => theme.fonts.regular};
margin-top: 2px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 15px 0px 0px;
`;
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const CategoryTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    margin-left: 1px;
`;
export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`;
