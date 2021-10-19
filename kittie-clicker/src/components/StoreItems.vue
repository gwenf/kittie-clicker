<template>
    <h1>Store</h1>
    <ul>
        <li v-for="item in items" :key="item.name">{{ item.name }} - {{ item.cost }}</li>
    </ul>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState(['items']),
    }
}
</script>
