import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { LoginComponent } from './login/login.component';
import { BasicDataComponent } from './basic-data/basic-data.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'data', component: BasicDataComponent },
	{ path: '**', component: BasicFormComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
