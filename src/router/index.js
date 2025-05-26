import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '@/views/Calculator.vue'
import AvailableBanks from '@/views/AvailableBanks.vue'
import AboutUs from '@/views/AboutUs.vue'
import ApplyLoan from '@/views/ApplyLoan.vue'
import Form from '@/views/Form.vue'
const routes = [
    { path: '/', redirect: '/calculator' },
    { path: '/calculator', component: Calculator },
    { path: '/banks', component: AvailableBanks },
    { path: '/about', component: AboutUs },
    { path: '/apply', component: ApplyLoan },
    {path: '/form/:bankId', name: 'Form', component: Form}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router