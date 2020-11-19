import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component'; 
import { MainComponent } from './components/main/main.component';  
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WorkplaceComponent } from './components/workplace/workplace.component'; 

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { CasesComponent } from './components/cases/cases.component';
import { ProvincesComponent } from './components/provinces/provinces.component';
import { DeathsComponent } from './components/deaths/deaths.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent, 
    MainComponent, 
    NotFoundComponent,
    WelcomeComponent,
    WorkplaceComponent,
    CasesComponent,
    ProvincesComponent,
    DeathsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
