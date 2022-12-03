import { Component } from "@angular/core";

// EXPLICITLY IMPORT ZingChart MODULE
// import chart modules used on that page
import "zingchart/modules-es6/zingchart-maps.min.js";
import "zingchart/modules-es6/zingchart-maps-usa.min.js";

@Component({
  selector: "app-module-chart",
  templateUrl: "./moduleChart.component.html",
  styleUrls: ["./moduleChart.component.scss"]
})
export class ModuleChartComponent {
  config: zingchart.graphset = {
    shapes: [
      {
        type: "zingchart.maps",
        options: {
          name: "usa",
          ignore: ["AK", "HI"]
        }
      }
    ]
  };
}
