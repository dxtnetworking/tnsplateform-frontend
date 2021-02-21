import LoginComponent from '../containers/Login'
import SignupComponent from '../containers/Signup'
import ProfilesComponent from '../containers/Profiles'
import ProfileComponent from '../containers/Profile'
import AccueilComponent from '../containers/Accueil'


const routes = [
    { 
        path: '/auth/login',
        component: LoginComponent,
        title: "Se connecter",
        needsAuth: false,
    },
    { 
        path: '/auth/signup',
        component: SignupComponent,
        title: "S'inscrire",
        needsAuth: false,
    },
    { 
        path: `/profiles/:id`,
        component: ProfileComponent,
        title: "Profile de ...",
        needsAuth: true,
    },
    { 
        path: '/profiles',
        component: ProfilesComponent,
        title: "Liste des membres",
        needsAuth: true,
    },
    { 
        path: '/',
        component: AccueilComponent,
        title: "Accueil",
        needsAuth: false
    },  
]

export default routes