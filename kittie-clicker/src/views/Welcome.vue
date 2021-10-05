<template>
  <div class="welcome-page p-grid">
    <div class="p-col-6 p-offset-3">
      <h1>Welcome to Kittie Clicker!!!</h1>

      <div>
        <h2 class="p-mt-5">Choose your kitten:</h2>

        <img v-for="url in kittens" @click="selectKitten(url)" :src="url" :key="url" class="p-m-2">
      </div>

      <div class="p-field">
        <label for="name" class="p-mr-3 p-my-5">Kitten's Name:</label>
        <InputText :modelValue="kittenName" @input="(e) => updateKittenInfo({field: 'kittenName', value: e.target.value})" id="name" type="username" aria-describedby="name-help" />
      </div>

      <Button @click="goPlay" label="Go Play" class="p-button-outlined" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Welcome',
  components: {
    Button,
    InputText,
  },
  computed: {
    ...mapState(['kittenName', 'kittenUrl', 'kittens']),
  },
  methods: {
    ...mapMutations(['updateKittenInfo']),
    selectKitten (kittenUrl) {
      this.updateKittenInfo({ field: 'kittenUrl', value: kittenUrl })
    },
    goPlay () {
      if (!this.kittenUrl || !this.kittenName) {
        this.$toast.add({severity:'error', summary: 'Invalid', detail:'Select a cat image and name the cat please.', life: 5000, group: 'tr'})
        return
      }
      this.$router.push('/')
    },
  }
}
</script>

<style scoped lang="sass">
.p-inputtext
  border: 1px solid black
  width: 300px
</style>
