import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 24px;
`;

export const TaskCreated = styled.View`
    flex-direction: row;
`;

export const TitleTasksCreated = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.BLUE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
export const CountCreatedTask = styled.Text`
    margin-left: 8px;
    min-width: 25px;
    min-height: 19px;

    border-radius: 999px;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        background-color: ${theme.COLORS.GRAY_400};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const CompletedTasks = styled.View`
    flex-direction: row;
`;

export const TitleCompletedTasks = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.PURPLE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
export const CountCompletedTask = styled.Text`
    margin-left: 8px;
    min-width: 25px;
    min-height: 19px;

    border-radius: 999px;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        background-color: ${theme.COLORS.GRAY_400};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
