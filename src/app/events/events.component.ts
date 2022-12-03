import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html"
})
export class EventsComponent {
  constructor(private router: Router) {}

  config: zingchart.graphset = {
    type: "bar",
    title: {
      text: "API Events"
    },
    subtitle: {
      text: "Click on nodes and check the console!"
    },
    series: [
      {
        values: [4, 5, 3, 4, 5, 3, 5, 4, 11]
      }
    ]
  };

  onComplete(event) {
    console.log("zingchart on complete fired!", event);
  }

  nodeClick(event) {
    console.log("node clicked fired!", event);
  }
}
