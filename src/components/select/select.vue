<template>
  <div
    class="select-wrapper"
    v-clickoutside.capture = handlerClickOut
    :style="bindStyle">
    <div class="select-show" @click="handleClick" ref="select" :class="{focus:focus}">
      {{select}}  <span class="iconfont" :class="direction==='up'?'icon-jiantoushang':'icon-jiantouarrow483'"></span>
    </div>
    <ul class="option-wrapper" v-show="direction==='up'">
      <li
        v-for="(option,index) in options"
        :key="options.value"
        :class="{active:showIndex===index}"
        :style="{height:height+'px',lineHeight:height+'px'}"
        @mouseover="handlerMouseOver(index)"
        @click.stop="handleChange(index)">
        {{option.label}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'mySelect',
    data(){
      return {
        direction:'down',
        select:'请选择',
        showIndex:0,
        focus:false
      }
    },
    props:{
      placeHolder:{
        type:String,
        default:'请选择'
      },
      value:{
        type:String,
        default:''
      },
      width:{
        type:Number,
        default:300
      },
      height:{
        type:Number,
        default:24
      },
      options:{
        type:Array,
        require:true
      }
    },
    watch:{
      value(val){
        /* 当value不为空字符串时 */
        if(val){
          /* 当输入的value在options的keys中 */
          if(this.options.some(item=>{ return item.value===val })){
            this.select = val;
          }else{
            this.$emit('input','');
            throw Error('select值与options的key不匹配,请重新修正');
          }
        }
      }
    },
    directives:{
      clickoutside:{
        bind(el,binding){
          function documnentHandler(e){
            if(el.contains(e.target)){
              return false;
            }
            if(binding.expression){
              binding.value();
            }
          }
          el._vueClickOutside_=documnentHandler;
          document.addEventListener('click',documnentHandler);
          if(binding.modifiers.esc){
            function keyHandler(e){
              binding.value(e);
            }
            document.addEventListener('keydown',keyHandler);
            el._vueKeyHandler_=keyHandler;
          }
        },
        unbind(el,binding){
          document.removeEventListener('click',el._vueClickOutside_);
          delete el._vueClickOutside_;

          if(binding.modifiers.esc){
            document.removeEventListener('keydown',el._vueKeyHandler_);
            delete el._vueKeyHandler_;
          }
        }
      },
    },
    computed:{
      bindStyle(){
        return {
          width:this.width+'px',
          height:this.height+'px'
        }
      }
    },
    methods:{
      handleClick(){
        if(this.direction==='down'){
          this.direction = 'up';
        }else{
          this.direction = 'down';
        }
        this.focus = true;
      },
      handlerClickOut(){
        this.focus = false;
        this.direction = 'down';
      },
      handlerMouseOver(index){
        this.showIndex = index;
      },
      handleChange(index){
        this.select = this.options[index].label;
        this.direction = 'down';
        this.focus = false;
        console.log(this.options[index].value);
        this.$emit('input',this.options[index].value);
        this.$emit('on-change',this.options[index]);
      }
    }
  }
</script>
<style scoped>
  .select-wrapper{
    display: inline-block;
  }
  .select-wrapper .select-show{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #666;
    color: #999;
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  .select-wrapper .select-show.focus{
    border:1px solid blue;
  }
  .option-wrapper{
    margin-top: 5px;
    border: 1px solid #666;
  }
  .option-wrapper li{
    border-bottom: 1px solid #666;
    padding: 0 10px;
  }
  .option-wrapper li:last-child{
    border-bottom:none;
  }
  .option-wrapper li.active{
    background-color: darkgray;
  }
</style>
