<template>
  <div id="test">
    <h1>this is from Foo page</h1>
    <ul v-if="users.length > 0">
      <li v-for="user in users"
        :key="user.name">{{ user.name }}</li>
    </ul>
    <div v-else>
      <svg width="375" height="191">
        <circle cx="95" cy="102" r="63" fill="#edeff0" mask="url(#shining)" />
        <rect width="160" height="35" x="190" y="45" fill="#edeff0" mask="url(#shining)" />
        <rect width="400" height="35" x="190" y="90" fill="#edeff0" mask="url(#shining)" />
        <line x1="0" y1="190" x2="750" y2=" 190" stroke="#edeff0"></line>
      </svg>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

const endpoint = '//jsonplaceholder.typicode.com'
export default {
  data() {
    return {
      users: []
    }
  },

  mounted() {

    setTimeout( () => {
      this.getUsers();
    }, 2000 )

  },

  methods: {
    getUsers() {
      axios.get( endpoint + '/users' )
        .then( res => {
          this.users = res.data;
        } )
        .catch( error => {
          alert( '***********error***********' )
          console.log( error )
        } )
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  li {
    margin-top: 10px;
    background: lightblue;
    border-radius: 5px;
  }
}
</style>
