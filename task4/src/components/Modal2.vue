<template>
  <transition name="modal" appear>
    <div id="overlay" @click="closeModal2">
      <div class="window">
        <div id="content" @click="stopEvent">
          <p class="balance">あなたの残高: {{ wallet }} </p>
          <p>送る金額</p>
          <input type="text" v-model="sendAmount">
          <footer class="modal-footer">
            <button @click="sendWallet">送信</button>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal2",
  data() {
    return {
      sendAmount: '',
    };
  },
  methods: {
    stopEvent: function(){
      event.stopPropagation()
    },
    sendWallet() {
      this.$store.dispatch('sendWallet', this.sendAmount)
    },
    closeModal2() {
      this.$store.commit('closeModal2')
    },
  },
  computed: {
    wallet() {
      return this.$store.getters.wallet
    },
  },
};
</script>

<style>
#content input {
  width: 80%;
  margin: 10px 0 0 0;
}

#overlay{
  z-index:1;

  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  .window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.modal-footer {
  background: #ccc;
  padding: 10px;
  text-align: right;
}

.modal-footer button {
  margin: 0;
  color: #fff;
  background-color: #e64565;
  border: 2px solid #e64565;
  padding: 3px 15px;
  border-radius: 2px;
  transition: 0.4s;
  outline: 0px
}

.modal-footer button:hover {
  background-color: #cc0029;
  border: 2px solid #cc0029;
}
  
</style>