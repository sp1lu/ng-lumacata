import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ng-lumacata-d93b6","appId":"1:942579151743:web:4c37de6a892f2b4d33604a","storageBucket":"ng-lumacata-d93b6.appspot.com","apiKey":"AIzaSyBk7w7Bv0fxqGFKiWx99n_sU06vlExNbZA","authDomain":"ng-lumacata-d93b6.firebaseapp.com","messagingSenderId":"942579151743"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
