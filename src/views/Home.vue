<template>

  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="5">
              <img style="width:30%;" src="../assets/images/logo.png"/>
            </el-col>
            <el-col :span="15">
              
            </el-col>

               <el-col :span="4">
                  <el-button class="connectBtn" @click="WalletUtil.connect">
                    <i v-if="currentAccount== null"> Connect Wallet</i>
                    <i v-if="currentAccount">
                    {{currentAccount.substring(0, 6)}} ... {{currentAccount.substring(currentAccount.length-6)}}
                </i>
                  </el-button>
               </el-col>
        </el-row>
        
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <h1>AIRDROP</h1>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="24">
            <h2>1、Treasure Map contains treasures and secrets about Treasure Map 2</h2>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="24">
            <p>To obtain the treasure map, you need to complete tasks 1 to 3 at minimum. 
               You will receive an additional 3000 MCW token reward for each friend invited.</p>
          </el-col>
        </el-row>

        <el-row style="margin-top:1.5rem; margin-bottom:2rem;">
          <el-col :span="4">
            Start date 2024.07.01 00:00 UTC
          </el-col>

          <el-col :span="1">
          </el-col>

        <el-col :span="4">
            End date 2024.07.11 00:00 UTC
          </el-col>

        </el-row>


        <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>

      <el-collapse-item name="1">
        <template #title>
            <el-row class="head-row">
                <el-col :span="1">
                    <img style="width:60%; margin-top:2rem;" src="../assets/images/mediaIcons/x.png"/>
                </el-col>

                <el-col :span="15" >
                    <p>Follow @Metacollabwin on Twitter</p>
                </el-col>
                <el-col :span="4" v-if="currentMember == null"></el-col>
                <el-col :span="4" ><p style="color:#FF9D1D;">+ 2000MCW</p></el-col>
                <el-col :span="4" v-if="currentMember">
                  <p style="color:#00BFA5;">{{ currentMember.join_tw == 0?'uncompleted':'completed'}}</p>
                </el-col>
            </el-row>
        </template>

        <div  class="show-box el-collapse-content-xxl" v-if="currentMember && currentMember.join_tw == 0">
            <el-row>
             <el-col :span="12">
                <p>
                  Click "Go Join" to follow MetaCollabWin's official Twitter, fill in your Twitter username, and verify.
                  </p>
                <a href="https://x.com/MetaCollabWin" target="_blank"><el-button type="primary">Go Join</el-button></a>
            </el-col>

             <el-col :span="12">
                <el-input
                    v-model="valid.tw"
                     style="width: 240px; margin-bottom:1rem;"
                     placeholder="Please input Your Account"
                     clearable/>
                <br/>

                <el-button type="primary" @click="validJoinTw">validate</el-button>
            </el-col>
           </el-row>


        </div>

      </el-collapse-item>

      <el-collapse-item  name="2">
        <template #title>
            <el-row class="head-row">
                <el-col :span="1">
                    <img style="width:60%; margin-top:2rem;" src="../assets/images/mediaIcons/telegram.png"/>
                </el-col>
                <el-col :span="15"><p>Join the @Metacollabwin on Telegram</p></el-col>
                <el-col :span="4" v-if="currentMember == null"></el-col>
                <el-col :span="4"><p style="color:#FF9D1D;">+ 2000MCW</p></el-col>
                <el-col :span="4" v-if="currentMember">
                  <p style="color:#00BFA5;">{{ currentMember.join_tg ==0 ? 'uncompleted':'completed'}}</p>
                </el-col>
            </el-row>
        </template>

        <div class="el-collapse-content-xxl" v-if="currentMember && currentMember.join_tg == 0 ">
            <el-row>
             <el-col :span="12">
                <p>
                  Click "Go Join" to join MetaCollabWin's official Telegram community, fill in your Telegram username, and verify.</p>
                <a href="http://t.me/MetaCollabWin" target="_blank"><el-button type="primary">Go Join</el-button></a>
            </el-col>
             <el-col :span="12">
                <el-input v-model="valid.tg"
                     style="width: 240px; margin-bottom:1rem;"
                     placeholder="Please input Your Account"
                     clearable/>
                <br/>

                <el-button type="primary" @click="validJoinTg">validate</el-button>
            </el-col>
           </el-row>
        </div>
      </el-collapse-item>
      <el-collapse-item  name="3">
        <template #title>
            <el-row class="head-row">
                <el-col :span="1">
                    <img style="width:60%; margin-top:2rem;" src="../assets/images/mediaIcons/discord.png"/>
                </el-col>
                <el-col :span="15"><p>Have the member role in metacollabwin Discord Server</p></el-col>
                <el-col :span="4" v-if="currentMember == null"></el-col>
                <el-col :span="4"><p style="color:#FF9D1D;">+ 2000MCW</p></el-col>
                <el-col :span="4" v-if="currentMember">
                  <p style="color:#00BFA5;">{{ currentMember.join_dis == 0 ? 'uncompleted':'completed'}}</p>
                </el-col>
            </el-row>
        </template>

        <div class="el-collapse-content-xxl" v-if="currentMember && currentMember.join_dis == 0">
            <el-row>
             <el-col :span="12">
                <p>
                  Click "Go Join" to join MetaCollabWin's official Discord community, fill in your Discord username, and verify.</p>
                <a href="https://discord.gg/WrrvpMCB" target="_blank"><el-button type="primary">Go Join</el-button></a>
            </el-col>
             <el-col :span="12">
                <el-input v-model="valid.dis"
                     style="width: 240px; margin-bottom:1rem;"
                     placeholder="Please input Your Account"
                     clearable/>
                <br/>

                <el-button type="primary" @click="validJoinDis">validate</el-button>

            </el-col>
           </el-row>
        </div>

      </el-collapse-item>
      <el-collapse-item  name="4">
        <template #title>
            <el-row class="head-row">
                <el-col :span="1">
                    <img style="width:60%; margin-top:2rem;" src="../assets/images/mediaIcons/discord.png"/>
                </el-col>
                <el-col :span="15"><p>Invite friends <span v-if="currentMember">({{currentMember.invite_number}} / 5)</span></p></el-col>
                <el-col :span="4" v-if="currentMember == null"></el-col>
                <el-col :span="4"><p style="color:#FF9D1D;">+ 3000MCW</p></el-col>
                <el-col :span="4" v-if="currentMember">
                  <p style="color:#00BFA5;">{{ currentMember.job_fish < 5 ?'uncompleted':'completed'}}</p>
                </el-col>
            </el-row>
        </template>

        <div class="el-collapse-content-xxl" style="background-color:111111;" v-if="currentMember">
            <el-row>
             <el-col :span="24">
                <p> <span style="font-size:1.2rem; font-weight:bold;">My invitation link: </span> 
                  <a >http://13.229.231.242:8081/#/home?code={{currentMember.invite_code}}</a></p>
                <el-button type="primary" @click="copyText('http://13.229.231.242:8081/#/home?code='+currentMember.invite_code)">Copy</el-button>
            
              </el-col>
           </el-row>
        </div>

      </el-collapse-item>
    </el-collapse>
  </div>


  <!-- mint -->
  <el-row class="mint">

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div style="margin-bottom:5rem; height:100px;">
            <img style="width:50%;" src="../assets/images/mediaIcons/nft.png"/>
        </div>
        <el-button class="mintBtn" @click="mint">MINT</el-button>
        <el-row>
          <el-col :span="12">
            Start Time
        </el-col>
          <el-col :span="12">
            2021.07.01 00:00 UTC
        </el-col>
        </el-row>
    </el-col>

    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        
        <el-row style="margin-bottom:5rem; height:100px;">
            <el-col :span="24">
               <h1>CLAIM MCW</h1>
            </el-col>
            <el-col :span="24">
               <h2>Your unclaimed MCW: {{currentMember == null ?0:currentMember.point}}</h2>
            </el-col>
        </el-row>

        <el-button class="mintBtn gray" @click="claim">CLAIM</el-button>

        <el-row >
          <el-col :span="12">
            Start Time
        </el-col>
          <el-col :span="12">
            Coming soon
        </el-col>
        </el-row>
    </el-col>
    
  </el-row>

      </el-main>
      <el-footer>
        <p style="text-align:center;">Copyright © 2024 Metacollabwin. All Rights Reserved</p>
      </el-footer>

    </el-container>
  </div>


    </template>

    <script>
// import axios from 'axios';
import AXIOS from '../plugins/axiosInstance.js'
import UI from "@/utils/ui";
import commonFunction from '@/utils/commonFunction';
import WalletUtil from '@/utils/wallet'
import { ElMessage, ElLoading } from 'element-plus';
import store from '../store'

export default {
    data(){
        return{
            name: 'Home',
            WalletUtil,
            father:this.$route.query.code,
            valid:
            {
              tg:'',
              dis:'',
              tw:''
            }
  
        }
    },
    computed: {
            currentMember () 
            {
                return this.$store.state.currentMember
            },
            currentAccount()
            {
              return this.$store.state.currentAccount
            }
        },
    methods:
    {
      onCopy(e) {
      alert('复制成功：' + e.text);
      },
       async mint()
       {
        if(!this.currentMember)
        {
          return ElMessage.warning("Please connect the wallet")
        }

        if(this.currentMember.job_fish != 1)
        {
          return ElMessage.warning("Please complete the task first!")
        }

        const result = await Contract.METAL.mint();
       },
       async claim()
       {
        if(!this.currentMember)
        {
          return ElMessage.warning("Please connect the wallet")
        }

        if(this.currentMember.point != 300)
           return ElMessage.warning("Please complex job")
       },
       validJoinTg()
       {
          //验证
          AXIOS.API({
            url:'/api/admin/open/valid',
            method:'post',
            params:
            {
               'account': this.currentAccount,
               'name': this.valid.tg,
               'type':'TG'
            }
        }).then((res)=>{
            if(res.data.status == 0)
            {
              return ElMessage.warning(res.data.msg)
            }else 
            {
                store.dispatch('setCurrentMember', res.data.result)
                return ElMessage.success('success!')
            }
        });
       },
       validJoinDis()
       {
          //验证
          AXIOS.API({
            url:'/api/admin/open/valid',
            method:'post',
            params:
            {
               'account': this.currentAccount,
               'name': this.valid.dis,
               'type':'DIS'
            }
        }).then((res)=>{
            if(res.data.status == 0)
            {
              return ElMessage.warning(res.data.msg)
            }else 
            {
                 store.dispatch('setCurrentMember', res.data.result)
                return ElMessage.success('success!')
            }
               
        });
       },
       validJoinTw()
       {
          if(this.valid.tw == '')
            return ElMessage.warning("Please enter your Twitter account")
          //验证
          AXIOS.API({
            url:'/api/admin/open/valid',
            method:'post',
            params:
            {
               'account': this.currentAccount,
               'name': this.valid.tw,
               'type':'TW'
            }
        }).then((res)=>{
            if(res.data.status == 0)
            {
              return ElMessage.warning(res.data.msg)
            }else 
            {
                store.dispatch('setCurrentMember', res.data.result)
                return ElMessage.success('success!')
            }
               
        });
       },
       async copyText(text) 
       {

        if(navigator.clipboard && window.isSecureContext)
        {
          try 
          {
            await navigator.clipboard.writeText(text);
            return ElMessage.success('Text copied to clipboard')
          } catch (err) 
          {
            return ElMessage.warning('Failed to copy'+err)
          }
        }else
        {
// document.execCommand('copy') 向剪贴板写文本
let input = document.createElement('input')
		input.style.position = 'fixed'
		input.style.top = '-10000px'
		input.style.zIndex = '-999'
		document.body.appendChild(input)
		input.value = text
		input.focus()
		input.select()
        try {
		  let result = document.execCommand('copy')
		  document.body.removeChild(input)
		  if (!result || result === 'unsuccessful') {
		    return ElMessage.warning('copy fail!')
		  } else {
		    return ElMessage.success('Text copied to clipboard')
		  }
		} catch (e) {
		  document.body.removeChild(input)
		  alert('Browser does not support copying, please try using a different browser')
		}
        }
      }
    },
    created: function()
    {
        //  console.log(this.father)

    }
}


    </script>
<style>

@media screen and (max-width: 480px) {
  .common-layout {
    padding:0;
  }
}

@media screen and (min-width: 1024px) {
 .common-layout
 {
    color:white;
    padding:2rem 20% 0rem 20%;
 }
}
 .connectBtn
 {
    background-color:#00BFA5;
    border:0;
    color:white;
    border-radius:25px;
    padding: 1.8rem 2rem 1.8rem 2rem;
 }

 .demo-collapse
 {
    margin-top:2rem;
    
 }
 .demo-collapse .el-collapse
 {
    border:none;
 }
 .demo-collapse .el-collapse-item
 {
    margin-bottom:2rem;
    border:none;

 }
 .demo-collapse .el-collapse-item .head-row
 {
     width:100%;
     text-align:left;
 }
 .demo-collapse .el-collapse-item .el-collapse-item__header
 {
    border-radius:5px;
    background-color:#111111;
    border:none;
    padding:3rem 1.5rem 3rem 1.5rem;
    color:white;
 }
 .demo-collapse .el-collapse-item .el-collapse-content-xxl
 {
    padding:1rem;
 }

 /* mint */
 .mint
 {
    border-radius:15px;
    padding:3rem;
    background-color:#111111;
    text-align:center;
 }

 .mintBtn
 {
    background-color:#00BFA5;
    border:0;
    color:white;
    border-radius:25px;
    width:150px;
    padding: 1.8rem 2rem 1.8rem 2rem;
    margin-bottom:1.5rem;
 }
 .gray
 {
    background-color: #939393 !important;
 }
footer
{
   
}

.el-collapse-item__content
{
  color:white;

}
.el-collapse-item__wrap
{
  background-color:#1b1b1b;
  color:white;
  border-radius:0px 0px 5px 5px;
}
</style>