<template>
  <div ref="wrapper" class="better-scroll-wrapper">
    <slot></slot>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name:'scroll',
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      scrollX:{
        type: Boolean,
        default: true
      }
    },
    mounted () {
      setTimeout(() => {
        this._initScroll()
      }, 25)
    },
    methods: {
      _initScroll () {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        });
        if (this.listenScroll) {
          // better-scroll里面的this默认指向scroll
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          });
          console.log(this.scroll);
        }
      },
      enable () {
        this.scroll && this.scroll.enable()
      },
      disable () {
        this.scroll && this.scroll.disable()
      },
      refresh () {
        this.scroll && this.scroll.refresh();
      },
      scrollTo () {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement () {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data () {
        setTimeout(() => {
          this.refresh();
        }, 25)
      }
    }
  }
</script>
<style scoped>
  .better-scroll-wrapper{
    width: 100%;
    overflow: hidden;
  }
</style>
