<template>
    <Menu />

    <main class="container">
        <h3>Account Registration</h3>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" v-model="username">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" v-model="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="password1">Password</label>
            <input type="password" class="form-control" v-model="password1">
        </div>
        <div class="form-group">
            <label for="password2">Confirm Password</label>
            <input type="password" class="form-control" v-model="password2">
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="register()">Register</button>
    </main>
</template>

<script>
    import Menu from '../components/Menu.vue'
    import db from '../firebase.js'

    export default {
        data() {
            return {
                username: "",
                email: "",
                password1: "",
                password2: "",
                messages: [],
            }
        },
        methods: {
            register() {
                if(this.username && this.email && this.password1 && this.password2) {
                    if(this.password1 === this.password2) {
                        if(this.emailIsValid(this.email)) {
                            if(this.usernameExists(this.username)) {
                                db.collection("users").add({
                                    username: `${this.username}`,
                                    email: `${this.email}`,
                                    password: `${this.password1}`
                                })
                            } else {
                                this.addMessage("Error", "That username already exists!")
                            }
                        } else {
                            alert("email error")
                            this.addMessage("Error", "Invalid email!")
                        }
                    } else {
                        this.addMessage("Error", "Password must match!")
                    }
                } else {
                    console.log("error")
                    this.addMessage("Error", "All fields are required!")
                }
            },
            addMessage(type, message) {
                this.messages.push({ alert: type, text: message })
            },
            emailIsValid(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            },
            usernameExists(username) {
                db.collection("users").get().then((results) => {
                    results.forEach((el) => {
                        if(el.data().username === username) {
                            console.log("username exists")
                            return true;
                        }
                    })
                })
                console.log("username doesnt exist")
                return false;
            }
        },
        components: {
            Menu,
        }
    }   
</script>

<style scoped>
.container {
  width: 40%;
}
</style>