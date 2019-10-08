import "bulma";
import uuidv1 from "uuid/v1";

const objectToServer = {
  id: "123",
  name: "Max Razhnov",
  email: "shahteryshka@gmail.com",
  title: "Title",
  noteData: "dsfsdfsfsfsdf",
  date: "4545454545"
};

let initObj = {
  id: "1",
  name: "",
  email: "",
  title: "",
  noteData: "",
  date: null
};
let flag = false;
const obj = { ...initObj };
const inputs = [...document.getElementsByClassName("input")];
const buttonAdd = document.getElementsByClassName("button is-primary")[0];

(function() {
  inputs.forEach(item => {
    item.onchange = ev => {
      if (ev.currentTarget.value.trim()) {
        obj[ev.currentTarget.id] = ev.currentTarget.value.trim();
      }
    };
  });
  buttonAdd.onclick = () => {
    obj.id = uuidv1();
    obj.date = +(Date.now() / 1000).toFixed();
    console.log(obj);
    //    query to API
  };
})();

// buttonAdd.setAttribute("disabled", "disabled");
