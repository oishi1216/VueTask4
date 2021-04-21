<template>
  <transition name="modal" appear>
    <div id="overlay" @click="closeModal1">
      <div class="window">
        <div id="content" @click="stopEvent">
          <p class="balance"> {{ userNm }} さんの残高</p>
          <p class="myWallet"> {{ userWt }} </p>
          <footer class="modal-footer">
            <button @click="closeModal1">close</button>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal1",
  methods: {
    stopEvent: function(){
      event.stopPropagation()
    },
    closeModal1() {
      this.$store.commit('closeModal1')
    },
  },
  computed: {
    userNm() {
      return this.$store.getters.userNm
    },
    userWt() {
      return this.$store.getters.userWt
    },
  },
};
</script>

<style>
#content{
  z-index:10;
  width: 30%;
  background-color:#fff;
  border-radius: 4px;
  position: fixed;
  bottom: 0%;
  left:35%;
}

.balance {
  margin: 10px 0px 0px 0px;
}

.myWallet {
  margin-top: 15px;
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
  margin-top: 10px;
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