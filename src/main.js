import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import User from './components/Users.vue';
import Home from './components/Home.vue';
import AddUser from './components/AddUser.vue';
import Profile from './components/Profile.vue';
import EditUser from './components/EditUser.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/', component: Home },
    { path: '/users', component: User },
    { path: '/users/:id', component: Profile },
    { path: '/create-user', component: AddUser },
    { path: '/edit-user/:id', component: EditUser }
]

let router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
