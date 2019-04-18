<template>
  <div class="page">
    <div>
      <span v-show="showAll">共{{totalItem}}条</span>
      <select v-model="perSize" v-show="showSelect">
        <option
          v-for="(value,index) in defaultPerPageOptions"
          :key="index"
          :value="value"
        >{{value}}条/页</option>
      </select>
      <ul>
        <li :class="preClass"
            @click="goPrevious"
        >{{pre}}</li>
        <li title="1" @click="changePage(1)" :class="{active:currentPage===1}">1</li>
        <li title="向前5页" v-if="currentPage - 3 > 1" @click="fastPrev">...</li>
        <li :title="currentPage - 2" v-if="currentPage - 2 > 1" @click="changePage(currentPage - 2)">{{ currentPage - 2 }}</li>
        <li :title="currentPage - 1" v-if="currentPage - 1 > 1" @click="changePage(currentPage - 1)">{{ currentPage - 1 }}</li>
        <li :title="currentPage" v-if="currentPage !== 1 && currentPage !== allPages" :class="{active:currentPage}">{{ currentPage }}</li>
        <li :title="currentPage + 1" v-if="currentPage + 1 < allPages" @click="changePage(currentPage + 1)">{{ currentPage + 1 }}</li>
        <li :title="currentPage + 2" v-if="currentPage + 2 < allPages" @click="changePage(currentPage + 2)">{{ currentPage + 2 }}</li>
        <li title="向后5页" v-if="currentPage + 3 < allPages" @click="fastNext">...</li>
        <li :title="allPages" v-if="allPages > 1" @click="changePage(allPages)" :class="{active:currentPage===allPages}">{{ allPages }}</li>
        <li class="next" :class="nextClass"
            @click="goNext"
        >{{next}}</li>
      </ul>
      <span class="jump" v-show="showElevator">跳转到
                <input type="text" v-model.number="elevator" @keydown="keyDown" @keyup="keyUp" @blur="choosePage"> 页
            </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'page',
    data () {
      return {
        currentPage: 1,
        tmpPage: 0,
        elevator: '',
        defaultPerPageOptions: [10, 20, 50, 100],
        perSize: 10,
        currentPageSize: this.pageSize
      };
    },
    computed: {
      allPages () {
        return Math.ceil(this.totalItem / this.currentPageSize);
      },
      preClass () {
        return {preDisabled: this.currentPage === 1};
      },
      nextClass () {
        return {nextDisabled: this.currentPage === this.allPages};
      }
    },
    watch: {
      perSize (val) {
        this.currentPageSize = parseInt(val, 10);
        this.elevator = '';
        this.currentPage = 1;
        console.log(this.currentPageSize);
      }
    },
    props: {
      totalItem: {
        type: Number,
        default: 298
      },
      pageSize: {
        type: Number,
        default: 10
      },
      pre: {
        type: String,
        default: '<'
      },
      next: {
        type: String,
        default: '>'
      },
      showAll: {
        type: Boolean,
        default: true
      },
      showSelect: {
        type: Boolean,
        default: true
      },
      showElevator: {
        type: true,
        default: true
      }
    },
    methods: {
      goPrevious () {
        this.currentPage -= 1;
        if (this.currentPage <= 1) {
          this.currentPage = 1;
        }
      },
      goNext () {
        this.currentPage += 1;
        if (this.currentPage >= this.allPages) {
          this.currentPage = this.allPages;
        }
      },
      changePage (page) {
        if (this.currentPage !== page) {
          this.currentPage = page;
          this.currentPage = page;
          this.tmpPage = this.currentPage;
          this.$emit('on-change', page);
          this.elevator = this.currentPage;
        }
      },
      fastPrev () {
        const page = this.currentPage - 5;
        if (page > 0) {
          this.changePage(page);
        } else {
          this.changePage(1);
        }
      },
      fastNext () {
        const page = this.currentPage + 5;
        if (page > this.allPages) {
          this.changePage(this.allPages);
        } else {
          this.changePage(page);
        }
      },
      keyDown (e) {
        const key = e.keyCode;
        // console.log(e);
        const condition = (key >= 48 && key <= 57) || key === 8 || key === 37 || key === 39;
        if (!condition) {
          e.preventDefault();
        }
      },
      keyUp (e) {
        const key = e.keyCode;
        const val = parseInt(e.target.value, 10);
        let page = 1;
        if (key === 13) {
          if (val > this.allPages) {
            page = this.allPages;
          } else if (val <= 0 || !val) {
            page = 1;
          } else {
            page = val;
          }
          e.target.value = page;
          this.changePage(page);
        }
      },
      choosePage () {
        const val = parseInt(this.elevator, 10);
        let page = 1;
        if (val > this.allPages) {
          page = this.allPages;
        } else if (val <= 0 || !val) {
          page = 1;
        } else {
          page = val;
        }
        this.changePage(page);
      }
    }
  };
</script>
<style scoped>
  .page{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    user-select: none;
    text-align: center;
  }
  .page>div>select{
    padding:0 2px;
    height:32px;
    outline: none;
    border: 1px solid #ccc;
  }
  .page>div>select:active,.page>div>select:focus{
    border: 1px solid blue;
  }
  .page>div>.jump>input{
    width:45px;
    height:24px;
    line-height:24px;
    text-align: center;
    outline: none;
    border: 1px solid #ccc;
  }
  .page>div>.jump>input:active{
    border: 1px solid blue;
  }
  .page>div>.jump>input:focus{
    border: 1px solid blue;
  }
  ul{
    height:30px;
    display: inline-block;
    padding:0;
    font-size:0;
  }
  ul li{
    display: inline-block;
    width:30px;
    height:30px;
    line-height:30px;
    border:1px solid #ccc;
    text-align: center;
    cursor: pointer;
    font-size:16px;
    margin-left:5px;
  }
  ul li.preDisabled,ul li.nextDisabled{
    cursor: not-allowed;
    background-color: #fff;
  }
  ul li.preDisabled:hover,ul li.nextDisabled:hover{
    border:1px solid #ccc;
  }
  ul li:hover{
    border:1px solid blue;
  }
  ul li.active{
    border:1px solid blue;
    background-color: blue;
  }
</style>
