import { parseUrl } from "../../scripts/utils";
import template from "./score.component.html";
import { Component } from "../../scripts/component";
import "./score.component.css";

/* class ScoreComponent */
export class ScoreComponent extends Component {
  constructor(){
    super(template)

    let params = parseUrl();

    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }


  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  }
}



