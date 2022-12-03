import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-methods",
  templateUrl: "./methods.component.html"
})
export class MethodsComponent {
  constructor(private router: Router) {}

  config: zingchart.graphset = {
    type: "bar",
    title: {
      text: "API Methods"
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11, 12]
      }
    ]
  };

  addPlot(chartContext) {
    chartContext.addplot({
      data: {
        values: this._randomData(10),
        text: "My new plot"
      }
    });
  }

  // Random numbers from 0-100
  _randomData(count) {
    return Array.from(new Array(count)).map(() => {
      return Math.floor(Math.random() * 10);
    });
  }
}
