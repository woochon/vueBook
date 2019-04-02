<template>
  <div>
    <h2>单层购物车</h2>
    <template v-if="goodList.length">
      <table>
        <thead>
        <th><input type="checkbox" v-if="showSelect" v-model="selectAll" @change="handleAll"></th>
        <th v-for="(title,key) in titleList" :key="key">
          {{title}}
        </th>
        </thead>
        <tbody>
        <tr v-for="(good,index) in goodList" :key="index">
          <td> <input type="checkbox" v-if="showSelect" v-model="good.selected" @change="handleChange(index)"></td>
          <td>{{index + 1}}</td>
          <td>{{good.name}}</td>
          <td>{{good.price}}</td>
          <td>
            <button :disable="good.number===1" @click="handleReduce(good)">-</button>
            {{good.number}}
            <button :disable="good.number===100" @click="handleAdd(good)">+</button>
          </td>
          <td>
            <button @click="removeGood(index)">移除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div>总价：￥{{total}}元</div>
    </template>
    <div v-else>购物车为空</div>
  </div>
</template>
<script>
  export default{
    name:'shopCart1',
    data(){
      return {
        showSelect:true,
        selectAll:true,
        titleList:['序号','商品名称','商品单价','购买数量','操作'],
        goodList:[
          {
            id:1000,
            name:'iPhone7',
            price:6188,
            number:1
          },
          {
            id:1001,
            name:'iPad Pro',
            price:5888,
            number:1
          },
          {
            id:1002,
            name:'iPhone X',
            price:7288,
            number:1
          },
          {
            id:1003,
            name:'Max pro',
            price:12999,
            number:1
          }
        ],
        total:0
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.goodList.forEach((item)=>{
          this.$set(item,'selected',true);
        });
        this.total = this.getTotal();
      });
    },
    methods:{
      handleReduce(item){
        if(item.number===1){
          return ;
        }else{
          item.number-=1;
        }
        this.total = this.getTotal();
      },
      handleAdd(item){
        if(item.number===100){
          return ;
        }else{
          item.number+=1;
        }
        this.total = this.getTotal();
      },
      removeGood(index){
        this.goodList.splice(index,1);
        console.log(this.goodList);
        this.total = this.getTotal();
      },
      handleChange(index){
        let flag = false;
        this.goodList.forEach((item)=>{
          /* 全选框的状态 */
          if(item.select){
            flag = true;
          }
        });
        this.selectAll = flag;
        this.total = this.getTotal();
      },
      getTotal(){
        let result = 0;
        if (this.goodList.length ===0){
          return 0;
        }else{
          this.goodList.forEach((item)=>{
            if(item.selected){
              result += (item.price * item.number);
            }
          });
          return result;
        }
      },
      handleAll(){
        this.goodList.forEach((item)=>{
          this.$set(item,'selected',this.selectAll);
        });
        this.total = this.getTotal();
      }
    }
  }
</script>
<style scoped>
table{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
}
th,td{
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th{
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
</style>
