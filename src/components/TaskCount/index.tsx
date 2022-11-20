import {
    Container,
    TaskCreated,
    TitleTasksCreated,
    CountCreatedTask,
    CompletedTasks,
    TitleCompletedTasks,
    CountCompletedTask,
} from './styles';

type TasksProps = {
    countCreated: string[];
    completedTasks: string[];
};

export function TaskCount({ countCreated, completedTasks }: TasksProps) {
    return (
        <Container>
            <TaskCreated>
                <TitleTasksCreated>Criadas</TitleTasksCreated>
                <CountCreatedTask>{countCreated.length}</CountCreatedTask>
            </TaskCreated>
            <CompletedTasks>
                <TitleCompletedTasks>Concluídas</TitleCompletedTasks>
                <CountCompletedTask>{completedTasks.length}</CountCompletedTask>
            </CompletedTasks>
        </Container>
    );
}
