import { Snippet } from "@/components/Snippet";

const reactTodoListSnippets = [
	{
		name: "App.tsx",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import TodoList from "./TodoList";
import React from "react";

const App = () => {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoList />
    </div>
  );
};`,
	},
	{
		name: "TodoList.tsx",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import TodoListItem from "./TodoListItem";
import React from "react";

const TodoList = () => {
  const [items, setItems] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // On empêche le comportement par défaut du formulaire
    event.preventDefault();

    // On ajoute un nouvel élément à la liste des tâches
    setItems([...items, inputValue]);

    // On réinitialise la valeur de l'input
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todolist-input"></label>

        <input id="todolist-input" type="text" value={inputValue} onChange={handleInputValueChange} />
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <TodoListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;`,
	},
	{
		name: "TodoListItem.tsx",
		codeLanguage: "tsx",
		withLineNumbers: true,
		code: `import React from "react";

interface TodoListItemProps {
  item: string;
}

const TodoListItem = (props: TodoListItemProps) => {
  return <span>{props.item}</span>;
};

export default TodoListItem;`,
	},
];

export default {
	reactTodolist: () => {
		return <Snippet snippets={reactTodoListSnippets} />;
	},
};
