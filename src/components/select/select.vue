<template>
  <div
    class="select-wrapper"
    v-clickoutside.capture = handlerClickOut
    :style="bindStyle">
    <div class="select-show" @click="handleClick" ref="select" :class="{focus:focus}">
      {{select}}  <span class="iconfont" :class="direction==='up'?'icon-jiantoushang':'icon-jiantouarrow483'"></span>
    </div>
    <ul class="option-wrapper" v-show="direction==='up'" ref="ul">
      <!--:class="{active:showIndex===index}"-->
      <li
        v-for="(option,index) in options"
        :key="options.value"
        :data-value="option.value"
        :style="{height:height+'px',lineHeight:height+'px'}"
        @mouseover="handlerMouseOver(index)"
        @keydown="handleKeyDown"
        @click.stop="handleChange(index)">
        {{option.label}}
      </li>
    </ul>
  </div>
</template>
<script>
  import { getData } from '../../common/js/dom'
  export default{
    name:'mySelect',
    data(){
      return {
        direction:'down',
        select:this.placeholder,
        showIndex:0,
        focus:false,
        tmpIndex:0
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
          let tmp = '';
          if(this.options.some(item=>{
            if(item.value===val){
              tmp = item.label;
            }
            return item.value===val
          })){
            this.select = tmp;
            for(let i = 0,len =this.$refs.ul.children.length;i<len;i++){
              //console.log(getData(this.$refs.ul.children[i], 'value'));
              if(getData(this.$refs.ul.children[i],'value')===this.value){
                //console.log(this.$refs.ul.children[i].classList);
                this.$refs.ul.children[i].classList.add('selected');
              }else{
                this.$refs.ul.children[i].classList.remove('selected');
              }
            }
          }else{
            this.$emit('input','');
            this.select=this.placeholder;
            throw Error('select值与options的key不匹配,请重新修正');
          }
        }else{
          //console.log('moren');
          this.select=this.placeholder;
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
        this.$nextTick(()=>{
          document.addEventListener('keydown',this.handleKeyDown);
          let index = this.getElementIndex();
          if(index!==0){
            this.$refs.ul.children[this.getElementIndex()].classList.add('selected');
          }
        })
      },
      handlerClickOut(){
        this.focus = false;
        this.direction = 'down';
        document.removeEventListener('keydown',this.handleKeyDown);
        //console.log('keydown 被移除');
      },
      handlerMouseOver(index){
        /*this.showIndex = index;*/
        /*for(let i =0,len=this.$refs.ul.children.length;i<len;i++){
          if(index===i){
            this.$refs.ul.children[i].classList.add('moveOn');
          }else{
            this.$refs.ul.children[i].classList.remove('moveOn');
          }
        }*/
        this.addMoveOnClass(index,'moveOn');
      },
      handleChange(index){
        /*for(let i =0,len=this.$refs.ul.children.length;i<len;i++){
          if(index===i){
            this.$refs.ul.children[i].classList.add('selected');
          }else{
            this.$refs.ul.children[i].classList.remove('selected');
          }
        }*/
        this.addMoveOnClass(index,'selected');
        this.select = this.options[index].label;
        this.direction = 'down';
        this.focus = false;
        //console.log(this.options[index].value);
        this.$emit('input',this.options[index].value);
        this.$emit('on-change',this.options[index]);
        document.removeEventListener('keydown',this.handleKeyDown);

      },
      handleKeyDown(e){
        const len = this.$refs.ul.children.length;
        /* 首先判断输入框是否有值，是的话从该值的下标开始计算，否则从0开始计算 */
        let tmp = this.options.find((item)=>{
          return item.value === this.value;
        });
        // let tmpIndex = 0;
        if(!tmp){
          if(e.keyCode===40){
            if(this.tmpIndex>=len){
              this.tmpIndex = 0;
            }
            this.addMoveOnClass(this.tmpIndex,'moveOn');
            this.tmpIndex +=1;
          }else if(e.keyCode===38){
            this.tmpIndex -=1;
            if(this.tmpIndex<0){
              this.tmpIndex = len-1;
            }
            this.addMoveOnClass(this.tmpIndex,'moveOn')
          }else if(e.keyCode===13){
            let tmp =0;
            for(let i =0,len = this.$refs.ul.children.length;i<len;i++){
              if(this.$refs.ul.children[i].classList.contains('moveOn')){
                tmp=i;
              }
            }
            this.handleChange(tmp);
          }
        }else{
          for(let i = 0;i<len;i++){
            if(getData(this.$refs.ul.children[i],'value')===this.value){
              this.$refs.ul.children[i].classList.add('selected');
            }
          }
          if(e.keyCode===40){
            this.tmpIndex +=1;
            if(this.tmpIndex>=len){
              this.tmpIndex = 0;
            }
            this.addMoveOnClass(this.tmpIndex,'moveOn')
          }else if(e.keyCode===38){
            this.tmpIndex -=1;
            if(this.tmpIndex<0){
              this.tmpIndex = len-1;
            }
            this.addMoveOnClass(this.tmpIndex,'moveOn')
          }else if(e.keyCode===13){
            let tmp =0;
            for(let i =0,len = this.$refs.ul.children.length;i<len;i++){
              if(this.$refs.ul.children[i].classList.contains('moveOn')){
                tmp=i;
              }
            }
            this.handleChange(tmp);
          }
        }
      },
      /* 获取选中元素下标 */
      getElementIndex(){
        let tmp = this.options.find((item)=>{
          return item.value === this.value;
        });
        let tmpIndex = 0;
        if(!tmp){
          return tmpIndex;
        }else{
          for(let i = 0,len =this.$refs.ul.children.length;i<len;i++){
            //console.log(getData(this.$refs.ul.children[i], 'value'));
            if(getData(this.$refs.ul.children[i],'value')===this.value){
              tmpIndex = i;
              //console.log(this.$refs.ul.children[i].classList);
              this.$refs.ul.children[i].classList.toggle('selected');
              break;
            }
          }
          return tmpIndex;
        }
      },
      /* 给指定元素添加类名，其他类名删除改类名 */
      addMoveOnClass(index,className){
        for(let i =0,len=this.$refs.ul.children.length;i<len;i++){
          if(index===i){
            this.$refs.ul.children[i].classList.add(className);
          }else{
            this.$refs.ul.children[i].classList.remove(className);
          }
        }
      },
    },
    mounted(){
      this.select = this.placeHolder;
      this.options.some(item=>{
        if(item.value===this.value){
          this.select = item.label;
        }
      });
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
  .option-wrapper li:hover{
    cursor: pointer;
  }
  .option-wrapper li.moveOn{
    background-color: greenyellow;
  }
  .option-wrapper li.selected{
    color:red;
  }
</style>
