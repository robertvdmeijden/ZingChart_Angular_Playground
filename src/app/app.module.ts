import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { ZingchartAngularModule } from "zingchart-angular";
import { HomeComponent } from "./home/home.component";
import { ModuleChartComponent } from "./module-chart/moduleChart.component";
import { GraphsetComponent } from "./graphset/graphset.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { EventsComponent } from "./events/events.component";
import { MethodsComponent } from "./methods/methods.component";
import { LicensingComponent } from "./licensing/licensing.component";
import { AjaxComponent } from "./ajax/ajax.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ModuleChartComponent,
    HomeComponent,
    GraphsetComponent,
    DynamicComponent,
    EventsComponent,
    MethodsComponent,
    LicensingComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ZingchartAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
