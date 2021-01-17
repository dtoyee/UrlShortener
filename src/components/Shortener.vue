<template>
  <main class="container">
    <div class="row text-center">
      <div class="col-12"><h2>URL Shortener</h2></div>
      <div class="w-100"></div>

      <div class="col-8">
        <input
          type="text"
          v-model="url"
          class="form-input"
          placeholder="Enter URL"
        />
      </div>
      <div class="col-4">
        <button class="btn btn-info btn-block" v-on:click="shortenURL()">
          Shorten
        </button>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-12" v-for="message in messages" :key="message">

        <span v-if="message.type === 'Error'">
          <div class="alert alert-danger" role="alert">
            {{ message.message }}
          </div>
        </span>
        <span v-else-if="message.type === 'Success'">
          <div class="alert alert-warning" role="alert">
            {{ message.message }}
          </div>
        </span>
      </div>

      <div class="w-100"></div>
      <div class="col-12">
          <router-link to="/check">Link check</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import db from "../firebase.js";
import shortId from "shortid";

export default {
  data() {
    return {
      url: "",
      messages: [],
    };
  },
  methods: {
    shortenURL() {
      let shortenedUrl = shortId.generate();
      this.messages = [];
      if (this.validURL(this.url)) {
        db.collection("urls").add({
          url: `${this.url}`,
          shortened: `${shortenedUrl}`,
        });
        this.messages.push({ type: "Success", message: "URL Shortened: smarturl.site/" + shortenedUrl });
      } else {
        this.messages.push({ type: "Error", message: "Invalid URL." });
      }
    },
    validURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(str);
    },
  },
};
</script>

<style>
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
