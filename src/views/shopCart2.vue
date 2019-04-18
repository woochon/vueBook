<template>
  <div class='shopCart2'>
    <h2>双层数据购物车</h2>
    <template v-if="goodList.length">
      <table v-for="(shop,shopIndex) in goodList" :key="shop.shopNameId">
        <thead>
          <th><input type="checkbox" v-if="showSelect" v-model="shop.selected" @click="handleShopSelectAll(shopIndex)"/></th>
          <th v-for="(title,key) in titleList" :key="key">
            {{title}}
          </th>
        </thead>
        <tbody>
        <tr v-for="(good,goodIndex) in shop.selectGoods" :key="goodIndex">
          <td> <input type="checkbox" v-if="showSelect" v-model="good.selected" @click="handleGoodSelect(good,shopIndex)"></td>
          <td>{{goodIndex + 1}}</td>
          <td>{{good.name}}</td>
          <td>{{good.price}}</td>
          <td>
            <button :disable="good.num===1" @click="handleNum(good,-1)">-</button>
            {{good.num}}
            <button :disable="good.num===100" @click="handleNum(good,1)">+</button>
          </td>
          <td>
            <button @click="handleRemove(shopIndex,goodIndex)">移除</button>
          </td>
        </tr>
        <tr>小计金额：{{shop.money}}</tr>
        </tbody>
      </table>
      <div><input type="checkbox" v-model="allGoods"> 总计：{{allMoney}}</div>
    </template>
    <div v-else>购物车为空</div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    name:'shopCart2',
    data(){
      return {
        showSelect:true,
        titleList:['序号','商品名称','商品单价','购买数量','操作'],
        goodList:[],
        allMoney:0,
        allGoods:true,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.getData();
      })
    },
    methods:{
      getData(){
        axios.get('/static/shopCart2.json').then(res=>{
          let tmpData = res.data;
          let tmpMoney = 0;
          if(tmpData.length){
            tmpData.forEach((item,index)=>{
              this.$set(item,'selected',true);
              let money = 0;
              item.selectGoods.forEach((item2,key)=>{
                this.$set(item2,'selected',true);
                money += item2.price * item2.num
              });
              this.$set(item,'money',money);
              tmpMoney += money;
            });
          }
          this.goodList = tmpData;
          this.allMoney = tmpMoney;
          console.log(this.goodList);
        });

      },
      handleNum(good,flag){
        if(flag<0){
          if(good.num===1){
            return ;
          }else{
            good.num -=1;
          }
        }else{
          if(good.num>=100){
            return ;
          }else{
            good.num +=1;
          }
        }
        this.calculateAllMoney();
      },
      calculateAllMoney(){
        let tmpMoney = 0;
        if(this.goodList.length){
          this.goodList.forEach((item)=>{
            item.selectGoods.forEach((item2)=>{
              if(item2.selected){
                tmpMoney += item2.price * item2.num
              }
            });
          });
        }
        this.allMoney = tmpMoney;
        // return tmpMoney;
      },
      handleShopSelectAll(shopIndex){
        const shop = this.goodList[shopIndex];
        shop.selected = ! shop.selected
        shop.selectGoods.forEach((item)=>{
          // item.seltected = shop.selected;
          this.$set(item,'selected',shop.selected);
        });
        this.calculateAllMoney();
      },
      handleGoodSelect(good,shopIndex){
        this.$set(good,'selected',!good.selected);

        /* 显示该商店全选状态 */
        if(this.goodList[shopIndex].selectGoods.every((item)=>{return item.selected})){
          this.$set(this.goodList[shopIndex],'selected',true);
        }else{
          this.$set(this.goodList[shopIndex],'selected',false);
        }

        /* 显示全部全选状态 */
        if(this.goodList.every((item)=>{ return item.selected })){
          this.allGoods=true;
        }else{
          this.allGoods=false;
        }

        this.calculateAllMoney();
      },
      handleRemove(shopIndex,goodIndex){
        this.goodList[shopIndex].selectGoods.splice(goodIndex,1);
        const tmp = this.goodList[shopIndex].selectGoods;
        this.$set(this.goodList[shopIndex],'selectGoods',tmp);
        console.log(tmp);
        if(tmp.length){
          let money = 0;
          tmp.forEach((item)=>{
            money += item.price * item.num;
          });
          this.$set(this.goodList[shopIndex],'money',money);
        }else{
          this.goodList.splice(shopIndex,1);
        }
        this.calculateAllMoney();
      }
    }
  }
</script>
<style scoped>
  table{
    margin-bottom: 30px;
    width: 600px;
  }
  td,th{
    text-align: left;
  }
</style>
