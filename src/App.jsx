import { ShowHideTitle } from "./react-challenges/ShowHideTitle";
import { TodoList } from "./react-challenges/TodoList";

export const App = () => {
  return (
    <>
      <ShowHideTitle />
      <TodoList>Ingresa una ciudad</TodoList>
    </>
  );
};
