import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, USE_DEVICE_LANGUAGE, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/compat/auth-guard';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './components/login/login.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ObjetosComponent } from './components/objetos/objetos.component';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    LoginComponent,
    ObjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MaterialImportsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    GoogleMapsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
