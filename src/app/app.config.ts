import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-b92df","appId":"1:1046221224324:web:6c0709a0e27ebe6bbec5d1","storageBucket":"ring-of-fire-b92df.appspot.com","apiKey":"AIzaSyA4VF4oJ7AHTGxfd3bRkPavxoGbF8Ons4w","authDomain":"ring-of-fire-b92df.firebaseapp.com","messagingSenderId":"1046221224324"})), provideFirestore(() => getFirestore())]
};
