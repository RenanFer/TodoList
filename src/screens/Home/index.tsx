import { useState } from 'react';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TaskCount } from '../../components/TaskCount';

import { Container, ButtonIcon, ButtonAdd, InputContent } from './styles';

export function Home() {
    const { COLORS } = useTheme();

    const [inputBorderColor, setInputBorderColor] = useState(false);
    const [value, setValue] = useState('');

    const [taskCount, setTaskCount] = useState<string[]>(['3', '4']);
    const [completedTasks, setCompletedTasks] = useState<string[]>([]);
    return (
        <Container>
            <Header />
            <InputContent>
                <Input
                    onChangeText={setValue}
                    value={value}
                    placeholder="Adicione uma nova tarefa"
                    style={{
                        borderColor: inputBorderColor
                            ? COLORS.PURPLE_DARK
                            : COLORS.GRAY_700,
                    }}
                    onFocus={() => setInputBorderColor(true)}
                    onBlur={() => setInputBorderColor(false)}
                />
                <ButtonAdd>
                    <ButtonIcon />
                </ButtonAdd>
            </InputContent>
            <TaskCount
                countCreated={taskCount}
                completedTasks={completedTasks}
            />
        </Container>
    );
}
