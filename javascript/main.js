'use strict';

const { createApp } = Vue

createApp({
    data() {
        return {
            message: [],
            responseBox: null
        }
    },
    beforeCreate(){
        
        for(let i = 0; i < 10; i++){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
            this.responseBox= response.data.response
            this.message.push(this.responseBox)
            })
        } 
        
    }
}).mount('#app')

