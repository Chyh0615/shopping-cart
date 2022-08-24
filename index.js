const app = Vue.createApp({
    data() {
        return {
            cartItems: [],
            items: items,
            active: 0,
            category: ["Fruit", "Vegetable", "Meat", "Chocolate"],
            showCart: false,
            checkout: false
        }
    },
    computed: {
        isFruit() {
            return this.items.filter(item => item.category === "fruit");
        },
        isVeg() {
            return this.items.filter(item => item.category === "veg");
        },
        isMeat() {
            return this.items.filter(item => item.category === "meat");
        },
        isChoco() {
            return this.items.filter(item => item.category === "choco");
        },
        sum() {
            let sum = 0;
            for(var i = 0; i < this.cartItems.length; i++) {
                sum += this.cartItems[i].total;
            }
            return sum;
        }
    },
    methods: {
        isActive(index) {
            this.active = index;
        },
        subtractNum(item) {
            if(item.quantity !== 0) {
                item.quantity -= 1;
            }
        },
        addNum(item) {
            item.quantity += 1;
        },
        addtoCart(item) {
            if(item.quantity >= 1) {
                const newProduct = this.cartItems.find(product => product.name === item.name);
                if(!newProduct) {
                    this.cartItems.push({
                        name: item.name,
                        price : item.price,
                        quantity : item.quantity,
                        total: item.price * item.quantity
                    });
                } else {
                    newProduct.quantity += item.quantity;
                    newProduct.total += (item.price * item.quantity);
                }
            } else {
                alert("Choose the Quantity!")
            }
            item.quantity = 0;
        },
        remove(item) {
            const index = this.cartItems.findIndex(num => num.name === item.name);
            this.cartItems.splice(index, 1);
        }
    }
});
app.mount('#app');