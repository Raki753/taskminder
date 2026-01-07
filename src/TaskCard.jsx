export default function TaskCard({ task, onEdit, onDelete, disableEdit }) {
  return (
    <div className="task-card">
      <img
        src={`https://i.pravatar.cc/40?u=${task.id}`}
        alt="avatar"
      />

      <p>{task.text}</p>

      <div className="actions">
        {!disableEdit && (
          <button onClick={() => onEdit(task.id)}>✏️</button>
        )}
        <button onClick={() => onDelete(task.id)}>🗑️</button>
      </div>
    </div>
  );
}
