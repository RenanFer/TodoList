import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
    width: 270px;
    height: 54px;

    border-radius: 6px;
    border: 1px solid;

    padding: 16px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_500};
        color: ${theme.COLORS.GRAY_100};

        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
    `};
`;
