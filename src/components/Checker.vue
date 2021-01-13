<template>
    <main class="container">
    <div class="row text-center">
      <div class="col-12"><h2>URL Shortener</h2></div>
      <div class="w-100"></div>

      <div class="col-8">
        <input
          type="text"
          v-model="shortUrl"
          class="form-input"
          placeholder="Shortened Link e.g. TGjdu3n"
        />
      </div>
      <div class="col-4">
        <button class="btn btn-info btn-block" v-on:click="check()">
          Check Link
        </button>
      </div>
    </div>

    <div class="row text-center">
        <span v-if="urlFound">
            <div class="alert alert-info" role="alert">
                Short link '{{ shortUrl }}' goes to: <a :href="link" target="_blank">{{ link }}</a>
            </div>
        </span>

      <div class="w-100"></div>
      <div class="col-12">
          <router-link to="/">Shorten URL</router-link>
      </div>
    </div>
  </main>
</template>

<script>
    import db from '../firebase'
    export default {
        data() {
            return {
                link: "",
                shortUrl: "",
                messages: [],
                urlFound: false
            }
        },
        methods: {
            check() {
                let mv = this
                db.collection('urls').where('shortened', '==', mv.shortUrl).get().then(querySnapshot => {
                    querySnapshot.forEach((el) => {
                        mv.link = el.data().url
                    })
                    mv.urlFound = true
                })
            }
        }
    }
</script>

<style scoped>
.container {
  width: 40%;
  margin-top: 5em;
}

input[type="text"] {
  width: 100%;
  margin-top: 4px;
}

.alert {
    margin-top: 0.5em;
}
</style>