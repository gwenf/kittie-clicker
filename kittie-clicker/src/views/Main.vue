<template>
  <div class="p-grid">
    <div class="p-col-5 p-offset-1 main-page p-d-flex p-flex-column p-jc-center p-ai-center">
      <h1>{{ kittenName }}</h1>
      <p>Purrs: {{ purrs }}</p>
      <p>Level: {{ level }}</p>
      <p>Time: {{ seconds }}</p>

      <img :src="kittenUrl" @click="incrementPurrs" class="cat-circle">

      <Button @click="resetSeconds" label="Reset Timer" class="p-button-outlined p-mt-5" />
    </div>
    <Divider layout="vertical" />
    <div class="p-col-5">
      <StoreItems />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex"
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import StoreItems from "../components/StoreItems.vue"

export default {
  name: "Main",
  components: {
    Button,
    Divider,
    StoreItems,
  },
  data () {
    return {
      purrs: 0,
      level: 0,
    }
  },
  computed: {
    ...mapState(['kittenName', 'kittenUrl', 'timer', 'seconds']),
  },
  methods: {
    ...mapMutations(['setSeconds']),
    ...mapActions(['createTimer', 'clearTimer']),
    incrementPurrs () {
      this.purrs += 1
    },
    resetSeconds () {
      this.setSeconds(0)
    },
  },
  mounted () {
    this.createTimer()
  },
  unmounted () {
    this.clearTimer()
  },
}
</script>

<style scoped lang="sass">
.cat-circle
  width: 300px
  height: 300px
  border-radius: 50%
  border: 2px solid black
  background-color: #efe92e
</style>
