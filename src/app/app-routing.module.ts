import { DeathsComponent } from './components/deaths/deaths.component';
import { ProvincesComponent } from './components/provinces/provinces.component';
import { CasesComponent } from './components/cases/cases.component';
import { WorkplaceComponent } from './components/workplace/workplace.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';  


const routes: Routes = [{path:'Welcome',component:WelcomeComponent}, 
                        {path:'Main',component:MainComponent,
                        children:[{path:'Workplace',component:WorkplaceComponent},
                                  {path:'Cases',component:CasesComponent},
                                  {path:'Provinces',component:ProvincesComponent},
                                  {path:'Deaths',component:DeathsComponent}]},
                        {path:'',redirectTo:'Welcome',pathMatch:'full'},
                        {path:'**',component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
