<template>
  <div class="about">
    <div class="test">34535</div>
    <div class="index">
      {{index}}
    </div>
  </div>
</template>
<script>

export default {
  name: 'User',
  data() {
    return {
    };
  },
  computed:{
    index:{
      get() {
        return this.$store.state.index;
      },
    }
  },
  methods: {
  },
};
</script>
