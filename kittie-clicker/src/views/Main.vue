<template>
  <div class="p-grid">
    <div class="p-col-5 p-offset-1 main-page p-d-flex p-flex-column p-jc-center p-ai-center">
      <h1>{{ kittenName }}</h1>
      <p>Purrs: {{ currentTotal }}</p>
      <p>Level: {{ user.level }}</p>
      <p>Time: {{ seconds }}</p>

      <img :src="kittenUrl" @click="incrementPurrs" class="cat-circle">

      <Button @click="resetSeconds" label="Reset Timer" class="p-button-outlined p-mt-5" />
    </div>
    <Divider layout="vertical" />
    <div class="p-col-5">
      <StoreItems
        :currentTotal="currentTotal"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex"
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
    }
  },
  computed: {
    ...mapState(['kittenName', 'kittenUrl', 'timer', 'seconds', 'totalPurrs', 'totalSpent', 'user']),
    ...mapGetters(['currentTotal']),
  },
  methods: {
    ...mapMutations(['setSeconds', 'incrementPurrs', 'purchaseItem']),
    ...mapActions(['createTimer', 'clearTimer']),
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
