<template>

  <el-row type="flex" class="row-bg" justify="space-around" align="middle">
    <el-col :span="8" v-if="!islogin">
      <el-form status-icon label-width="100px" class="login-form" :model="ruleForm2" :rules="rules2" ref="ruleForm2" v-loading="loading" element-loading-background="rgba(255, 255, 255, 0.1)">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" auto-complete="off" v-model="ruleForm2.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" auto-complete="off" v-model="ruleForm2.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <el-col :span="8" v-else>
      <div>{{ruleForm2.username}} at work!</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    var validateUserName = (rule, value, callback) => {
      if(value === ''){
        callback(new Error('please enter the username!'))
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if(value === ''){
        callback(new Error('please enter the password!'))
      } else {
        callback();
      }
    }
    return {
      ruleForm2: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      },
      islogin: false,
      loading: false
    }
  },
  methods: {
    submitForm(formName){
      this.loading = true;
      this.$refs[formName].validate((valid) => {
        if(valid){
          setTimeout(() => {
            this.loading = false;
            this.$message({
            showClose: true,
            message: 'login success!',
            type: 'success'
            })
            this.islogin = true;
          },2000)
          
        } else {
          return false;
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row-bg{
    height: 100%;
  }
</style>
