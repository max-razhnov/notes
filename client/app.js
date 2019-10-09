import "bulma";
import "./src/styles/styles.scss";
import uuidv1 from "uuid/v1";
import axios from "axios";
import Card from "./src/components/Card";

let initObj = {
  id: "",
  name: "",
  email: "",
  title: "",
  noteData: "",
  date: null
};

const obj = { ...initObj };
const inputs = [...document.getElementsByClassName("input")];
const buttonAdd = document.getElementsByClassName("button is-primary")[0];
buttonAdd.setAttribute("disabled", "disabled");
const mainField = document.getElementsByClassName("field")[0];

(function() {
  inputs.forEach(item => {
    item.onchange = ev => {
      if (ev.currentTarget.value.trim()) {
        obj[ev.currentTarget.id] = ev.currentTarget.value.trim();
        if (obj.title && obj.name && obj.email && obj.noteData) {
          buttonAdd.removeAttribute("disabled");
        }
      } else {
        buttonAdd.setAttribute("disabled", "disabled");
      }
    };
  });

  buttonAdd.onclick = () => {
    inputs.forEach(item => {
      item.value = "";
    });
    obj.id = uuidv1();
    obj.date = +(Date.now() / 1000).toFixed();
    console.log(obj);
    mainField.insertAdjacentHTML("beforeend", Card(obj));
    //    query to API

    const query = axios
      .post(`/submit?${obj.id}`)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };
})();
