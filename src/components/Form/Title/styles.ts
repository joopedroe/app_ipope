import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    padding: 15px 10px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;