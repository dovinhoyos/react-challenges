export const Posts = () => {
    function traerDatos(){
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data));
    } 
  return (
    <button
      onClick={traerDatos}
    >
      zertcho!
    </button>
  );
};
