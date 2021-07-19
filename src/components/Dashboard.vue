<template>
    <div id="main">
        <form class="input-field" @submit="addTask">
            <input type="text" placeholder="Nome da tarefa" v-model="task">
            <button>Adicionar tarefas</button>
        </form>
        <div class="list">
            <div class="name-list" v-for="task in tasks" :key="task.id">
                <span>{{task.name}} </span>
                <button @click="deleteTask(task.id)">done</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            tasks:null,
            task:null,
            xp: null,
            
        }
    },
    methods: {
        // get tasks
        async getTasks() {
            const req = await fetch("http://localhost:3000/tasks")
            const data = await req.json()
            this.tasks = data
            
        },
        //add tasks
        async addTask(e) {
            e.preventDefault()
            // data
            const data = {
                name: this.task
            }
            const dataJSON = JSON.stringify(data)
            // requisição
            const req = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJSON
            })
            const res = await req.json()
            //clear in field
            this.task = null
            //getTask
            this.getTasks()
        },
        //delete tasks
        async deleteTask(id) {
            this.xp += 10
            const req = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: "DELETE"
            })
            const res = await req.json() 
            this.getTasks()
            this.addXp()
            location.reload()

        },
        //wining xp
        async addXp() {
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
        async getXp() {
            const req = await fetch("http://localhost:3000/pontos")
            const data = await req.json()
            this.xp = data.xp
        }
    },
    mounted() {
        this.getTasks()
        this.getXp()
    },
}
</script>

<style scoped>
.input-field {
    width:40%;
    margin:150px auto auto;
}
.input-field >input {
    display:block;
    width:540px;
    font-size:15px;
    padding:5px;
    margin-bottom:15px;
    text-align:center
}
.input-field > button {
    width:550px;
    font-size:15px;
    padding:15px;
    background:blue;
    color:#fff;
    cursor:pointer;
    border:none;
    border-radius:20px
}

.list {
    width:600px;
    margin:80px auto auto;
  
}
.name-list {
    border-bottom: 1px solid #000;
    background-color:#cca;
    padding:15px;
    margin-bottom:15px;
    display:flex;
    justify-content:space-between
}
.list  span {
    font-size: 20px;
    text-transform:uppercase
} 
.list  button {
    width: 80px;
    padding:5px;
    /* margin:0 0 10px 250px; */
    background:rgb(209, 161, 4);
    color:white;
    cursor:pointer;
    border:none;
}

</style>