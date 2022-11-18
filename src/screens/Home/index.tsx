import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Container, ButtonIcon, ButtonAdd, InputContent } from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            <InputContent>
                <Input input="Adicione uma nova tarefa" />
                <ButtonAdd>
                    <ButtonIcon />
                </ButtonAdd>
            </InputContent>
        </Container>
    );
}
