import { Routes, RouterModule } from '@angular/router';
import { FormSubscribeComponent } from './form-subscribe/form-subscribe.component';
import { IfUserLogin } from './guards/ifUserLogin';
import { LoginComponent } from './mainComponents/login/login.component';
import { Page404Component } from './mainComponents/page404/page404.component';
import { SetcolorComponent } from './setcolor/setcolor.component';
import { MainAlbumComponent } from './showAlbum/main-album/main-album.component';
import { ShowcolorComponent } from './showcolor/showcolor.component';





const arr: Routes = [

{path: '', redirectTo: '/home', pathMatch: 'full'},

{path: 'home', component: MainAlbumComponent,},
{path: 'form', component: FormSubscribeComponent},
{path: 'login', component: LoginComponent},
{path: 'selectColor', component: SetcolorComponent,canActivate: [IfUserLogin]},
{path: 'showColor', component: ShowcolorComponent,canActivate: [IfUserLogin]},
{path: 'showColor/:colorName', component: ShowcolorComponent,canActivate: [IfUserLogin]},
{path: 'showColor/:colorName/home', component: MainAlbumComponent,canActivate: [IfUserLogin]},
{path: '**', component:Page404Component}

]; 


export const routing = RouterModule.forRoot(arr);