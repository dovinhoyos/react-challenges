import "./task.css";

export const TaskCard = ({ ready }) => {
  return (
    <div className="card">
      <h1>Tareas</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
};
