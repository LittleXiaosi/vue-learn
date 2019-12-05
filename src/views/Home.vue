<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">

        <input v-model="obj.a"/>
        <button @click="setObj">setObj</button>
    </div>
</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'home',

        data: () => {
            return {
                obj: {
                    a: 1,
                }
            }
        },
        methods: {
            setObj: function () {
                this.obj.a = 2;
            }
        },
        watch: {
            'obj': {
                handler: function (nv) {
                    console.log(nv);
                }
            }
        }
    }
</script>
