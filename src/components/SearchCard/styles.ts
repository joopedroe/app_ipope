import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    background-color: ${({theme}) => theme.colors.background};
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
    margin-top: 10px;
`;
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const CategoryTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    margin-left: 17px;
`;
export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`;
