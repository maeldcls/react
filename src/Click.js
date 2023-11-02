import { useState } from "react"

function Click() {
    const[count, setCount] = useState(0);

    function addOne(){
        setCount(count+1);
    }
    function removeOne(){
        setCount(count-1);
    }
    function mutiplyTwo(){
        setCount(count*2);
    }

  return (
    <>
    <p>T'as cliqué {count} fois</p>
    <button onClick={addOne}>Ajouter 1</button>
    <button onClick={removeOne}>enlever 1</button>
    <button onClick={mutiplyTwo}>x2</button>
    </>
  );
}

export default Click;