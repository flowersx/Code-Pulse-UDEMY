import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { App } from './app';
import { AddCategory } from './features/category/add-category/add-category';

export const routes: Routes = [
    {
        path: 'admin/categories',
        component: CategoryList

        
    },
    {
        path: 'admin/categories/add',
        component: AddCategory
    }
   
];