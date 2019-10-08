import * as PIXI from "pixi.js";
import door from "./door.png";
import explorer from "./explorer.png";
import { fromEvent, from, of } from "rxjs";
import {
  debounceTime,
  map,
  filter,
  distinctUntilChanged,
  mergeMap,
  catchError
} from "rxjs/operators";
// import "./src/styles/styles.scss";
import "bulma";

// const appBlock = document.getElementById("app");
// const app = new PIXI.Application({
//   width: 800,
//   height: 600,
//   backgroundColor: 0x1099bb,
//   resolution: window.devicePixelRatio || 1
// });
// appBlock.appendChild(app.view);
// const container = new PIXI.Container();

// app.stage.addChild(container);

// const texture = PIXI.Texture.from(explorer);
// const man = new PIXI.Sprite(texture);
// container.x = app.screen.width / 2;
// container.y = app.screen.height / 2;

// man.anchor.set(0.5);
// man.x = Math.floor(Math.random() * 20);
// man.y = Math.floor(Math.random() * 20);
// container.addChild(man);
// container.pivot.x = container.width / 2;
// container.pivot.y = container.height / 2;
// man.interactive = true;
// man.buttonMode = true;
// man.on("pointerdown", onClick);
// man.on("pointermove", onOut);
// function onClick() {
//   if (man.scale.x <= 10 && man.scale.y <= 10) {
//     man.scale.x *= 1.25;
//     man.scale.y *= 1.25;
//   }
// }
// function onOut() {
//   if (man.scale.x > 1 && man.scale.y > 1) {
//     man.scale.x /= 1.25;
//     man.scale.y /= 1.25;
//   } else {
//     man.scale.x = man.scale.y = 1;
//   }
// }

// const observable = new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.complete();
// });
const observer = {
  next: value => {
    console.log("next " + value);
  },
  error: er => console.log(er),
  complete: () => console.log("completed")
};
// const observable = of(1, 2, 3);
// observable.subscribe(observer);

of(1, 2, 6)
  .pipe(
    filter(item => item % 2 == 0),
    map(item => item * item)
  )
  .subscribe({ next: console.log });
