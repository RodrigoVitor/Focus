<template>
    <div class="list" id="main">
        <h1>Meus presentes</h1>
        <div class="name-list" v-for="gift in gifts" :key="gift.id">
            <p>{{gift.name}} <small @click="deleteGift(gift.id)">Concluido</small></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gift",
    data() {
        return {
            gifts: null
        }
    },
    methods: {
        async getGifts() {
            const req = await fetch("http://localhost:3000/gifts")
            const data = await req.json()
            this.gifts = data
        },
        async deleteGift(id) {
            const req = await fetch(`http://localhost:3000/gifts/${id}`, {
                method: "DELETE"
            })
            const res = req.json()
            this.getGifts()
            console.log(res)
        }
    },
    mounted() {
        this.getGifts()
    }
}
</script>

<style scoped>
.list {
    width:40%;
    margin:80px auto auto;
}
.list h1 {
    text-align:center;
    color:#fff;
    margin-bottom:15px
}
.name-list {
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    background-color:#fff;
    padding:15px;
    margin-bottom:15px;
}
.name-list > p {
    font-size:1.5rem
}
.name-list p > small {
    margin-left:250px;
    font-size:1rem;
    color:rgb(6, 87, 20);
    cursor:pointer
}
</style>