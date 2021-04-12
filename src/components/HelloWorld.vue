<template>
  <div>
    <header class="header" @click="setIndexs">
      {{index}}
    </header>
    <section class="content">
      {{ countIndex }}
    </section>
    <section class="footer" @click="syncControlIndex()">
      {{index}}
    </section>
  </div>
</template>

<script>
  import { mapState,mapGetters,mapMutations,mapActions} from 'vuex';

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        req: {
          visit_type: 33,
          code_id: 0,
          base_jobsort: '',
          type: ''
        }
      };
    },
    computed: {
      ...mapState(['index']),
      ...mapGetters(['countIndex'])
    },
    methods: {
      ...mapMutations(['setIndex']),
      ...mapActions(['syncIndex']),
      setIndexs(){
        //使用commit分发Mutations
        this.$store.commit('setIndex',{count:5});
      },
      syncControlIndex(){
        //使用dispatch分发Action
        this.$store.dispatch('syncIndex',{count:20});
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
