<template>
    <div class="vending-machine info-container">
        <h3>小黑自动售货机</h3>
        <div class="button-group">
            <button v-for="(item, index) in products" :key="index" :disabled="money < item.price"
                @click="buy(item.price)" class="product-button">
                {{ item.name }} {{ item.price }}元
            </button>
        </div>
        <p class="balance">银行卡余额：{{ money }}元</p>
    </div>
</template>

<!-- js脚本：
定义了一个变量 money，表示银行卡余额，初始值为100元。
定义了一个数组 products，表示售货机中的商品，每个商品包含名称和价格。
定义了一个函数 buy，用于购买商品，当点击商品按钮时，会从银行卡余额中扣除商品价格，并更新余额。 -->
<script setup>
import { ref } from 'vue';
const money = ref(100);
const products = ref([
    { name: '可乐', price: 5 },
    { name: '咖啡', price: 10 },
    { name: '牛奶', price: 8 }
]);
const buy = (price) => {
    money.value -= price;
};
</script>

<style scoped>
.vending-machine {
    text-align: left;
    font-weight: 900;
    border: 2px solid #000;
    border-radius: 10px;
    width: 300px;
    height: auto;
    background: #f0f0f0;
    padding: 20px;
}

.button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.product-button {
    background: #e0e0e0;
    border: 1px solid #000;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-button:hover {
    background: #d0d0d0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-button:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
}

.product-button:disabled {
    opacity: 0.5;
}

.insufficient-balance {
    color: red;
    margin-top: 10px;
}
</style>