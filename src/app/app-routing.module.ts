import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ModuleChartComponent } from "./module-chart/moduleChart.component";
import { GraphsetComponent } from "./graphset/graphset.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { EventsComponent } from "./events/events.component";
import { MethodsComponent } from "./methods/methods.component";
import { LicensingComponent } from "./licensing/licensing.component";
import { AjaxComponent } from "./ajax/ajax.component";

// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "module-chart", component: ModuleChartComponent },
  { path: "graphset", component: GraphsetComponent },
  { path: "dynamic", component: DynamicComponent },
  { path: "events", component: EventsComponent },
  { path: "methods", component: MethodsComponent },
  { path: "licensing", component: LicensingComponent },
  { path: "ajax-performance", component: AjaxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
