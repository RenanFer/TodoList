import { Container } from './styles';
import { useTheme } from 'styled-components/native';

type Props = {
    input: string;
};

export function Input({ input }: Props) {
    const { COLORS } = useTheme();
    return (
        <Container placeholder={input} placeholderTextColor={COLORS.GRAY_100} />
    );
}
