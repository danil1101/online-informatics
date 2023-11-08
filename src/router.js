import { createRouter, createWebHashHistory} from 'vue-router'
import Home from "./views/Home.vue";
import FifthGrade from "./views/FifthGrade.vue";
import SeventhGrade from "./views/SeventhGrade.vue";
import SixthGrade from "./views/SixthGrade.vue";
import EighthGrade from "./views/EighthGrade.vue";
import NinthGrade from "./views/NinthGrade.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/fifth-grade', component: FifthGrade},
        {path: '/sixth-grade', component: SixthGrade},
        {path: '/seventh-grade', component: SeventhGrade},
        {path: '/eighth-grade', component: EighthGrade},
        {path: '/ninth-grade', component: NinthGrade},
    ]
})