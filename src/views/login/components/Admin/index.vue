<template>
	<div class="main">
		<div class="window">
			<div class="login">
				<div class="title">管理员登录</div>
				<div class="item">
					<el-input type="text" placeholder="用户名" v-model="userName" />
				</div>
				<div class="item">
					<el-input type="password" placeholder="密码" v-model="password" />
				</div>
				<div class="item">
					<el-button type="button" @click="login">登录</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userName: '',
			password: '',
		};
	},
	methods: {
		login() {
			if (this.userName == '') {
				alert('请输入用户名！');
			} else if (this.password == '') {
				alert('请输入密码！');
			} else {
				this.request
					.post('/travel/login', {
						userName: this.userName,
						password: this.password,
						category: 3,
					})
					.then((response) => {
						if (response.data.code == 0) {
							this.$emit('btn_view', response.data.data.id);
						} else {
							alert('用户名或者密码错误，请重新输入！');
							this.userName = '';
							this.password = '';
						}
					});
			}
		},
	},
};
</script>

<style scoped>
@import './admin_index.css'
</style>
