import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { PictureGridComponent } from './components/picture-grid/picture-grid.component';
import { PictureDetailsComponent } from './components/picture-details/picture-details.component';

const routes: Routes = [
    /* { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }, */
    { path: "", redirectTo: "/picture-grid", pathMatch: "full" },
    { path: "picture-grid", component: PictureGridComponent },
    { path: "picture-details", component: PictureDetailsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }