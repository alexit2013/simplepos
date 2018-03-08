<template>
  <Row type="flex" justify="center" align="middle" class="login">
    <Col span="6" class="login-box">
      <div class="login-title">Simple POS</div>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" class="login-form">
        <FormItem label="用户名" prop="name">
          <Input type="text" v-model="formCustom.name" placeholder="用户名" clearable></Input>
        </FormItem>
        <FormItem label="密码" prop="pass">
            <Input type="password" v-model="formCustom.pass" placeholder="密码" clearable></Input>
        </FormItem>
        <FormItem style="float: right;">
          <Button type="primary" @click="handleSubmit()" :loading="loading">登陆</Button>
        </FormItem>  
      </Form>
    </Col>
  </Row>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      const validateName = (rule, value, callback) => {
        if (value === ''){
          callback(new Error('Please enter your username!'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === ''){
          callback(new Error('Please enter your password!'));
        } else {
          callback();
        }
      };
      return {
        formCustom: {
          name: '',
          pass: ''
        },
        ruleCustom: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        loading: false
      }
    },
    methods: {
      handleSubmit(){
        this.loading = true;
        
          axios.post('http://localhost:3000/login', {
            name: this.formCustom.name,
            pass: this.formCustom.pass
          })
          .then((result) => {
            if(result.data.success){
              this.$Message.success('登陆成功！')
            } else {
              this.$Message.error(result.data.message);
            }
            console.log(result);
            this.loading = false;
          })
          .catch(err => {
            console.log(err);
          })
        }
      
    }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
  }
  .login-box{
    height: 240px;
    border: 1px solid #999999;
    border-radius: 6px;
    box-shadow: 1px 1px 12px #999999;
  }
  .login-form{
    width: 90%;
    margin-top: 15px;
  }
  .login-title{
    width: 100%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    color: #333333;
    margin-top: 10px;
  }
</style>
