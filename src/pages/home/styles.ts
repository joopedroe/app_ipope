import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { SearchProps} from ".";

export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
width: 100%;
height: ${RFPercentage(22)}px;
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
