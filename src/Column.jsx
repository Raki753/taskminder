import TaskCard from "./TaskCard";

export default function Column({
  title,
  color,
  tasks,
  onEdit,
  onDelete,
  disableEdit
}) {
  return (
    <div className={`column ${color}`}>
      <div className="column-header">
        <span className="checkbox" />
        <h3>{title}</h3>
      </div>

      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          disableEdit={disableEdit}
        />
      ))}
    </div>
  );
}
