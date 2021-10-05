<template>
  <Toast position="top-right" group="tr" />
  <router-view/>
</template>

<script>
import Toast from 'primevue/toast'

export default {
  components: {
    Toast,
  }
}
</script>
