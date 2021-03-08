import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2 } from './my-component2/my-component2.component';
import { TableRowComponent } from './table-row/table-row.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { FormSubscribeComponent } from './form-subscribe/form-subscribe.component';
import { SelectColorComponent } from './select-color/select-color.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2,
    TableRowComponent,
    FormComponent,
    FormSubscribeComponent,
    SelectColorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
