<template>
    Redirecting...
</template>

<script>
    import db from "../firebase.js";

    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        methods: {
            findURL() {
                let mv = this
                db.collection('urls').get().then((querySnapshot) => {
                    querySnapshot.forEach((el) => {
                        if(el.data().shortened === mv.id) {
                            window.location.href = el.data().url
                        } else {
                            console.log('this doesnt match')
                        }
                        // else - go to 404
                    })
                })
            }
        },
        created() {
            this.findURL()
        }
    }
</script>