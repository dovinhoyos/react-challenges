export const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviando...");
      }}
    >
      <input onChange={(e) => console.log(e.target.value)} />
      <button onClick={() => console.log("zertcho")}>send</button>
    </form>
  );
};
