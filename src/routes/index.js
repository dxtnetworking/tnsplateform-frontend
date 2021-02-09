import LoginComponent from '../containers/Login'
import SignupComponent from '../containers/Signup'
import ProfilesComponent from '../containers/Profiles'
import AccueilComponent from '../containers/Accueil'


const routes = [
    { 
        path: '/auth/login',
        component: LoginComponent,
        title: "Se connecter"
    },
    { 
        path: '/auth/signup',
        component: SignupComponent,
        title: "S'inscrire"
    },
    { 
        path: '/profiles',
        component: ProfilesComponent,
        title: "Liste des membres"
    },
    { 
        path: '/',
        component: AccueilComponent,
        title: "Accueil"
    },  
]

export default routes