import { onNewTodo } from "./TodoList.telefunc";
import { createSignal, For, untrack } from "solid-js";

export function TodoList(props: { initialTodoItems: { text: string }[] }) {
  const [todoItems, setTodoItems] = createSignal(props.initialTodoItems);
  const [newTodo, setNewTodo] = createSignal("");
  return (
    <>
      <ul>
        <For each={todoItems()}>{(todoItem) => <li>{todoItem.text}</li>}</For>
      </ul>
      <div>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();

            // Optimistic UI update
            setTodoItems((prev) => [...prev, { text: untrack(newTodo) }]);
            try {
              await onNewTodo({ text: untrack(newTodo) });
              setNewTodo("");
            } catch (e) {
              console.error(e);
              // rollback
              setTodoItems((prev) => prev.slice(0, -1));
            }
          }}
        >
          <input
            type="text"
            onChange={(ev) => setNewTodo(ev.target.value)}
            value={newTodo()}
            class={
              "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto p-2 mr-1 mb-1"
            }
          />
          <button
            type="submit"
            class={
              "text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-hidden focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto p-2"
            }
          >
            Add to-do
          </button>
        </form>
      </div>
    </>
  );
}
