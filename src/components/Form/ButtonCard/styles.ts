import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonCardProps {
    type: "response" | "finish";
}

export const Container = styled(TouchableOpacity)<ButtonCardProps>`
margin-top: ${RFValue(10)}px;
width: 100%;
background-color: ${({ theme, type }) => type === 'response' ? theme.colors.success : theme.colors.secondary};
border-radius: 7px;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
font-size: ${RFValue(18)}px;
color: ${({ theme }) => theme.colors.shape};
padding: 18px;


`;