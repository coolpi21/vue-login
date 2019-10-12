<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="email"
              v-validate="'required|email'"
              placeholder="请输入用户名"
              class="layui-input"
              v-model="name"
            />
          </div>
          <div class="error layui-form-mid">
            <span>{{ errors.first("email") }}</span>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="password"
              v-validate="'required|min:6'"
              placeholder="请输入密码"
              class="layui-input"
              v-model="password"
            />
          </div>
          <div class="error layui-form-mid">
            <span>{{ errors.first("password") }}</span>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="length"
              placeholder="请输入验证码"
              v-validate="{ required: true, length: 4 }"
              class="layui-input"
              v-model="code"
            />
          </div>
          <div class="error layui-form-mid">
            <span>{{ errors.first("length") }}</span>
          </div>
          <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha">
            辅助文字
          </div>
        </div>
        <button type="button" class="layui-btn" @click="checkError">
          立即登录
        </button>
        <a href="http://www.layui.com" class="login-text-hover">忘记密码？</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      svg: '',
      errorMsg: [],
      name: '',
      password: '',
      code: ''
    }
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then(res => {
        console.log(res)
        if (res.status === 200) {
          if (res.data.code === 200) {
            this.svg = res.data.data
          }
        }
      })
    },
    checkError () {
      this.errorMsg = []
      if (!this.name) {
        this.errorMsg.push('用户名为空')
      }
      if (!this.password) {
        this.errorMsg.push('密码为空')
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空')
      }
    }
  },
  mounted () {
    this.getCaptcha()
  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}

.layui-container {
  background: #fff;
}

input {
  width: 190px;
}

.login-text-hover {
  margin-left: 10px;
  &:hover {
    color: #419388;
  }
}

.svg {
  position: relative;
  top: -15px;
}
.error {
  color: red;
}
</style>
