import styled from 'styled-components/native';
import { PlusCircle } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #1a1a1a;
`;

export const InputContent = styled.View`
    margin: -30px 0 0;
    flex-direction: row;

    justify-content: center;
`;

export const ButtonAdd = styled(TouchableOpacity)`
    margin-left: 4px;

    width: 52px;
    height: 52px;

    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const ButtonIcon = styled(PlusCircle).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_100,
    size: 16,
}))``;
