import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StatusUserService } from "../services/status-user.service";

@Injectable()
export class IfUserLogin implements CanActivate {
  constructor(private userSer:StatusUserService,private router: Router, private  route: ActivatedRoute,) {}


  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
   
  ): Promise<boolean>{
    const status=await this.userSer.isUserLogin()
    if (status==false){
        this.router.navigate([`/login`]);
    }
    return status
  }
}