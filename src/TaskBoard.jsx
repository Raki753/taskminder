import { useState } from "react";
import Column from "./Column";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        status: "todo",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]);
  };

  const moveTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id !== id) return task;

      if (task.status === "todo") return { ...task, status: "progress" };
      if (task.status === "progress") return { ...task, status: "done" };
      return task;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <section className="task-section">
      <div className="task-header">
        <h1>Tasks</h1>
        <button className="new-task" onClick={addTask}>
          New task +
        </button>
      </div>

      <div className="columns">
        <Column
          title="To do"
          color="blue"
          tasks={tasks.filter(t => t.status === "todo")}
          onEdit={moveTask}
          onDelete={deleteTask}
        />
        <Column
          title="In progress"
          color="orange"
          tasks={tasks.filter(t => t.status === "progress")}
          onEdit={moveTask}
          onDelete={deleteTask}
        />
        <Column
          title="Done"
          color="red"
          tasks={tasks.filter(t => t.status === "done")}
          onEdit={moveTask}
          onDelete={deleteTask}
          disableEdit
        />
      </div>
    </section>
  );
}
