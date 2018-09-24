import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  userCheck: any = false;
  constructor(private route: Router, private cookieService: CookieService) { }


  Guard() {

    let chk = JSON.parse(sessionStorage.getItem("auth"));

    if (chk != null) {

      if (chk.auth) {
        let currentDateTime = new Date();
        var day = currentDateTime.getDate();
        var monthIndex = currentDateTime.getMonth();
        var year = currentDateTime.getFullYear();
        var hour = currentDateTime.getHours();
        let current = day + monthIndex + year + hour;

        let expiry = new Date(chk.Expiry);
        var day = expiry.getDate();
        var monthIndex = expiry.getMonth();
        var year = expiry.getFullYear();
        var hour = expiry.getHours();
        let expiryed = day + monthIndex + year + hour;


        if (current == expiryed) {
          let authObj = {
            auth: false,
            Expiry: null
          }
          sessionStorage.setItem('auth', JSON.stringify(authObj));
          this.route.navigate(["/login"]);

          return false;
        } else {
          return true;
        }

      } else {
        this.route.navigate(["/login"]);
        return false;
      }
    } else {
      let authObj = {
        auth: false,
        Expiry: null
      }
      sessionStorage.setItem('auth', JSON.stringify(authObj));
      this.route.navigate(["/login"]);

    }

  }

  signin(user: any) {
    if (user.username == "ATTAPON" && user.password == "123456") {
      let currentDateTime = new Date();
      let time = currentDateTime.setTime(currentDateTime.getTime() + (2 * 60 * 60 * 1000));

      let authObj = {
        auth: true,
        Expiry: new Date(time)
      }

      sessionStorage.setItem('auth', JSON.stringify(authObj));
      return true;
    } else {
      return false;
    }
  }
  signout() {
    this.cookieService.deleteAll();
    console.log("out");
    let authObj = {
      auth: false,
      Expiry: null
    }
    sessionStorage.setItem('auth', JSON.stringify(authObj));
    this.Guard();
  }
}
