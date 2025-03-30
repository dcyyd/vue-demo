<template>
    <main class="info-container">
        <div>数1：<input type="text" v-model.number="num1"></div>
       
        <div>请选择计算操作：
            <select name="" id="" v-model="fuhao">
                <option value="1">+</option>
                <option value="2">-</option>
                <option value="3">*</option>
                <option value="4">/</option>
            </select>
        </div>
         <div>数2：<input type="text" v-model.number="num2"></div>
        <div><button @click="computer">计算</button></div>
        <div>结果：{{result}}</div>
    </main>
</template>

<script setup>
    import {ref} from 'vue'
    let num1=ref(0),num2=ref(0),fuhao=ref(1),result=ref(0)
    function computer(){
        switch(fuhao.value){
            case "1":
                result.value=num1.value+num2.value;
                break;
            
            case "2":               
                result.value=num1.value-num2.value;
                break;
            case "3":
                result.value=num1.value*num2.value;
                break;            
            case "4":
                if(num2.value==0){
                    alert("除数不能为0!")
                    break;
                }
                result.value=num1.value+num2.value;
                break;
        }
    }
</script>

<style scoped>
    .info-container{
        text-align: center;
    }
</style>