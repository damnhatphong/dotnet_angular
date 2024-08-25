import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/NotFound/NotFound.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./todo/todo.component').then(m => m.TodoComponent),
        pathMatch: 'full'
    },
    {
        path: "old-user-page",
        redirectTo: ({ queryParams }) => {
            //   const errorHandler = inject(ErrorHandler);
            const userIdParam = queryParams['userId'];
            if (userIdParam !== undefined) {
                return `/user/${userIdParam}`;
            } else {
                // errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
                return `/not-found`;
            }
        },
    },
    { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component` or login page
    { path: '**', component: NotFoundComponent } //wild card routes. - redirect to not found - usually last rule.
];
