import "bulma";
import "./src/styles/styles.scss";
import uuidv1 from "uuid/v1";
import Card from "./src/components/Card";
import {
  deleteAllNotes,
  postData,
  getAllNotes
  // deleteOne
} from "./src/api";

let initObj = {
  id: "",
  userName: "",
  userEmail: "",
  title: "",
  noteData: "",
  date: null
};

let obj = { ...initObj };
const inputs = [...document.getElementsByClassName("input")];
const buttonAdd = document.getElementsByClassName("button is-primary")[0];
const buttonDelAll = document.getElementsByClassName("button is-danger")[0];
const notesContainer = document.getElementsByClassName("notes")[0];
buttonAdd.setAttribute("disabled", "disabled");

const app = async () => {
  inputs.forEach(item => {
    item.onchange = ev => {
      if (ev.currentTarget.value.trim()) {
        obj[ev.currentTarget.id] = ev.currentTarget.value.trim();
        if (obj.title && obj.userName && obj.userEmail && obj.noteData) {
          buttonAdd.removeAttribute("disabled");
        }
      } else {
        buttonAdd.setAttribute("disabled", "disabled");
      }
    };
  });

  const dataNotes = await getAllNotes();
  checkData();
  function checkData() {
    if (dataNotes.length === 0) {
      notesContainer.innerHTML = `<h3 id="empty" class="title">Sorry, now database is empty</h3>`;
    }
    dataNotes.forEach(noteItem => {
      notesContainer.innerHTML += Card(noteItem);
    });
  }
  // if (dataNotes.length > 0) {
  //   //   const buttonDelOne = document.getElementsByClassName("card-footer")[0];
  //   //   buttonDelOne.onclick = async () => {
  //   //     const card = document.getElementById(buttonDelOne.id);
  //   //     const data = await deleteOne(`${card.id}`);
  //   //     console.log(data);
  //   //     if (data === "ok") {
  //   //       card.remove();
  //   //     }
  //   //   };
  //   // }
  buttonAdd.onclick = async () => {
    inputs.forEach(item => {
      item.value = "";
    });
    obj.id = uuidv1();
    obj.date = +(Date.now() / 1000).toFixed();
    const dataResult = await postData(obj);
    obj = Object.assign({}, initObj);
    buttonAdd.setAttribute("disabled", "disabled");
    const title = document.getElementById("empty");
    if (title) {
      title.remove();
    }
    notesContainer.innerHTML += Card(dataResult);
  };

  buttonDelAll.onclick = async () => {
    const data = await deleteAllNotes();
    if (data.length === 0) {
      while (notesContainer.firstChild) {
        notesContainer.removeChild(notesContainer.firstChild);
      }
      notesContainer.innerHTML = `<h3 id="empty" class="title">Sorry, now database is empty</h3>`;
    }
  };
};

(function() {
  app();
})();
