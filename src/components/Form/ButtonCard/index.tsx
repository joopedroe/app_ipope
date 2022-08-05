import React from "react";

import { TouchableOpacityProps } from "react-native";

import {
    Container,
    Title,
} from "./styles";

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'response' | 'finish';
}

export function ButtonCard({ title, type, ...rest }: Props) {
    return (
        <Container {...rest} type={type}>
            <Title>{title}</Title>
        </Container>
    );
}