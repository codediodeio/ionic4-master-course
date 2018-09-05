import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DbService } from './db.service';
import { Deeplinks } from '@ionic-native/deeplinks';
import { HomePage } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router,
    private dl: Deeplinks
  ) {
    console.log('woke');
    this.user = this.afAuth.authState.pipe(
      switchMap(user => (user ? db.doc$(`users/${user.uid}`) : of(null)))
    );

    this.handleRedirect();

    this.dl
      .route({
        '/__/auth/callback': HomePage
      })
      .subscribe(
        match => {
          // match.$route - the route we matched, which is the matched entry from the arguments to route()
          // match.$args - the args passed in the link
          // match.$link - the full link data
          console.log('Successfully matched route', match);
        },
        nomatch => {
          // nomatch.$link - the full link data
          console.error('No match', nomatch);
        }
      );
  }

  async googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithRedirect(provider);
  }

  private async handleRedirect() {
    const result = await this.afAuth.auth.getRedirectResult();
    console.log(result);
    if (result.user) {
      await this.updateUserData(result.user);
    }

    return result;
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const path = `users/${user.uid}`;

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return this.db.updateAt(path, data);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }
}
