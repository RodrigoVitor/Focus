<template>
    <div id="nav">
        <span>
            {{xp}}xp
        </span>
        <span>
            <router-link to="/">Home</router-link> 
            <router-link to="/mygift">My Gifts</router-link> 
            <router-link to="/store">Store</router-link>
        </span>
  </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            xp: null
        }
    },
    methods: {
        async getXp() {
            const req = await fetch("http://localhost:3000/pontos")
            const data = await req.json()
            this.xp = data.xp
        }
    },
    mounted() {
       this.getXp()
    }
}
</script>

<style scoped>
a{
    text-decoration:none;
    margin-right:25px;
    color:white
}
a:hover {
    color:#ccc
}
#nav {
    display:flex;
    justify-content: space-between;
    font-size:1.3rem;
    /* margin-top:20px; */
    background-color:#333;
    padding:10px;
    color:white
}
#nav > span:first-child {
    margin-left:25px;
    font-size:1.5rem
}

</style>