import React from "react";
import { Container, Title } from "./styles";

interface Props {
    title: string;
    id: string;
}

export function TitleSearch({ title, id }: Props) {
    return (
        <Container>
            <Title>
                {`${id} - ${title}`}
            </Title>
        </Container>
    )
    }