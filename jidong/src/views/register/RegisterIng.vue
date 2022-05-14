<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入手机号"
        v-model="data.telephone"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="确认密码"
        v-model="data.confirms"
      />
    </div>
    <div class="wrapper__button" @click="handleClick">注册</div>
    <div class="wrapper__link" @click="handleLogin">已用账号返回登录</div>
    <hint v-if="data.showhint" :message="data.hintMessage" />
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive } from "@vue/reactivity";
import hint from "../../components/Hint.vue";

export default {
  name: "RegisterIng",
  components: { hint },
  setup() {
    const data = reactive({
      telephone: "",
      password: "",
      confirms: "",
      showhint: false,
      hintMessage: "",
    });
    
    const router = useRouter();

    const showHints = (message) => {
      data.showhint = true;
      data.hintMessage = message;
      setTimeout(() => {
        data.showhint = false;
        data.hintMessage = "";
      }, 2000);
      }

      const handleClick = async () => {
        try {
          const ask = await axios.post(
            "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register",
            { telephone: data.telephone, password: data.password }
          );
          if (ask?.data?.errno === 0) {
            router.push({ name: "Login" });
          } else {
            showHints("注册失败");
          }
        } catch (e) {
          showHints("请求失败");
        }
      };
      const handleLogin = () => {
        router.push({ name: "Login" });
      };
      return { handleClick, handleLogin, data };
    },
  };

</script>

<style lang='scss' scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.5rem auto;
    width: 0.75rem;
    height: 0.75rem;
  }
  &__input {
    box-sizing: border-box;
    height: 0.5rem;
    padding: 0.16rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      font-size: 16px;
      border: none;
      outline: none;
      width: 100%;
      background: none;
    }
  }
  &__button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
  }
  &__link {
    font-size: 0.14rem;
    text-align: center;
    color: #777;
  }
}
</style>
