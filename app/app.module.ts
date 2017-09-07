import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { PictureService } from './services/flickr.service';
import { PictureGridComponent } from "./components/picture-grid/picture-grid.component";
import { PictureComponent } from "./components/picture/picture.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,

        PictureGridComponent,
        PictureComponent
    ],
    providers: [
        PictureService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
