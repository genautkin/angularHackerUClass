import { Routes, RouterModule } from '@angular/router';
import { FormSubscribeComponent } from './form-subscribe/form-subscribe.component';
import { SetcolorComponent } from './setcolor/setcolor.component';
import { MainAlbumComponent } from './showAlbum/main-album/main-album.component';





const arr: Routes = [

{path: '', redirectTo: '/home', pathMatch: 'full'},

{path: 'home', component: MainAlbumComponent},
{path: 'form', component: FormSubscribeComponent},
{path: 'selectColor', component: SetcolorComponent}

];


export const routing = RouterModule.forRoot(arr);