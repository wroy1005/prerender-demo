<template>
  <div id="test">
    <h1>this is from Bar page</h1>
    <div>
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

const endpoint = '//jsonplaceholder.typicode.com'
export default {
  data() {
    return {
      post: {}
    }
  },

  mounted() {
    document.dispatchEvent(new Event('custom-render-trigger'))
    setTimeout( () => {
      this.getPost();
    }, 2000 )

  },

  methods: {
    getPost() {
      axios.get( endpoint + '/posts/1' )
        .then( res => {
          this.post = res.data;
        } )
        .catch( error => {
          alert( '***********error***********' )
          console.log( error )
        } )
    }
  }
}
</script>

