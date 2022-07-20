// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme:{
        primary: '#962ff',    
        success: '#3cd1c2',    
        info: '#ffaa2c',
        error: '#f83e70',
    }
})

const opts = {}

export default new Vuetify(opts)