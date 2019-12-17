/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let who = ["My dog", "My friend", "My parents", "My girlfriend"];
  let what = ["eat", "pissed", "crushed", "broked"];

  let when = [
    "before the class",
    "right in time",
    "when i finished",
    "during my lunch",
    "when i was praying"
  ];
  let excuse = document.querySelector("#excuse");
  excuse.innerHTML =
    who[rand(who.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    when[rand(what.length)];
};

function rand(arrayLength) {
  return Math.floor(Math.random() * (arrayLength - 1) + 0);
}
