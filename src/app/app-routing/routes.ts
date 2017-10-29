import { Routes } from '@angular/router';

import { BlogComponent } from '../blog/blog.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
