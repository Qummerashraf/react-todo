import { useEffect, useState } from "react";
import Add from "./additem/Add";
import Show from "./show/Show";

const getLocalItems = () => {

  let list = localStorage.getItem('lists');
  if (list===undefined) {
    return [];
  }
  else {
    return (list = JSON.parse(localStorage.getItem('lists')));
  }
}

function App() {

  const [input, setInput] = useState(' ');
  const [list, setList] = useState(getLocalItems())
  const [editItem, setEditItem] = useState(null);
  const [toggleSubmit, settoggleSubmit] = useState(true);
  const [bg, setbg] = useState("aliceblue");
  const [color, setColor] = useState("black");

  const handleWrite = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!input) {

    }
    else if (input && !toggleSubmit) {
      setList(
        list.map((ele) => {
          if (ele.id === editItem) {
            return { ...ele, name: input }
          }
          return ele;
        })
      );
      settoggleSubmit(true);
      setInput(" ");
      setEditItem(null);
    }
    else {
      const allinput = { id: new Date().getTime().toString(), name: input }
      setList([...list, allinput]);
      setInput(" ")
    }
  }

  const delItem = (index) => {
    const updateItem = list.filter((ele) => {
      return index !== ele.id;
    })
    setList(updateItem)
  }

  const updateItem = (id) => {
    let newEditItems = list.find((elem) => {
      return elem.id === id;
    });
    settoggleSubmit(false);
    setInput(newEditItems.name);
    setEditItem(id);
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(list))
  }, [list]);


  const handlemode = () => {
    if (bg === "aliceblue") {
      setbg("#333");
      setColor("white");
    } else {
      setbg("aliceblue");
      setColor("black");
    }
  };

  return (
    <>
      <Add input={input} handleWrite={handleWrite} handleSubmit={handleSubmit} handlemode={handlemode} bg={bg} toggleSubmit={toggleSubmit} />
      <Show list={list} delItem={delItem} updateItem={updateItem} bg={bg} color={color} />
    </>
  );
}

export default App;
