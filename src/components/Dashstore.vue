<template>
    <div id="main">
        <p>{{msg}}</p>
       <div class="container">
           <div class="gift" v-for="gift in giftStore" :key="gift.id">
               <h1>{{gift.name}} <small>{{gift.value}}xp</small> </h1>
               <button @click="buyGift(gift.id)">Adquirir Gift</button>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: "Dashstore",
    data() {
        return {
            giftStore: null,
            xp: null,
            nameGift: null,
            msg: null
        }
    },
    methods: {
        async getGift() {
            const req = await fetch("http://localhost:3000/store")
            const data = await req.json()
            this.giftStore = data
        },
        async getPontos() {
            const req = await fetch("http://localhost:3000/pontos")
            const data = await req.json()
            this.xp = data.xp
        },
        async buyGift(id){
            //make sure xp
            const req = await fetch(`http://localhost:3000/store/${id}`)
            const data = await req.json()
            this.getPontos()
            if (this.xp >= data.value) {
                this.xp -= data.value
                this.updateXp()
                this.nameGift = data.name
                this.addGift()
                this.msg = "Gift adquerido com sucesso"
                setTimeout(() => location.reload(), 1000)
                setTimeout(() => this.msg = "", 2000)
            } else {
                this.msg = "Você não tem xp o suficiente"
                setTimeout(() => this.msg = "", 2000)
            }
        },
        async updateXp() {
            const data = {
                xp: this.xp
            }
            const dataJSON = JSON.stringify(data)
            const req = await fetch("http://localhost:3000/pontos", {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: dataJSON
            })
            const res = await req.json()
        },
        async addGift() {
            const data = {name: this.nameGift}
            const dataJSON = JSON.stringify(data)
            const req = await fetch("http://localhost:3000/gifts", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body:dataJSON
            })
            const res = req.json()
            console.log(res)
        }
    },
    mounted() {
        this.getGift()
        this.getPontos()
    }
}
</script>

<style scoped>
div > p {
    width:50%;
    text-align:center;
    margin:auto;
    margin-top:30px;
    font-size:1.4rem;
    background-color:#0dd;
}
.container {
    width:80%;
    margin:70px auto auto;
    display:grid;
    grid-template-columns: 250px 250px 250px;
    grid-column-gap: 120px;
}
.gift {
    background:white;
    text-align:center;
    padding: 20px 0px;
    margin-top:50px;
    color:black
}
.gift h1 > small {
    display:block;
    font-size:1.2rem;
    margin-top:30px;
    margin-bottom:10px
}

.gift > button {
    width:150px;
    height:25px;
    background:#0f0;
    border:none;
    cursor:pointer;
    border-radius:15px
}
</style>