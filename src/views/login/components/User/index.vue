<template>
	<div class="main">
		<div class="user_window">
			<div class="user_login" v-if="flag == 1">
				<div class="title">用户登录</div>
				<div class="item">
					<el-input type="text" placeholder="用户名" v-model="userName" />
				</div>
				<div class="item">
					<el-input type="password" placeholder="密码" v-model="password" />
				</div>
				<div class="item-choose">
					<label>角色：</label>
					<input type="radio" id="yk" :value="1" v-model="category" />
					<label for="yk">游客</label>

					<input type="radio" id="sj" :value="2" v-model="category" />
					<label for="sj">商家</label>
				</div>
				<div class="item">
					<el-button type="button" @click="login">登录</el-button>
				</div>
			</div>
			<div v-if="flag == 0" class="bgn-login">
				<el-button @click="change">用户登录</el-button>
			</div>
			<div class="user_register" v-if="flag == 0">
				<div class="title" style="margin-bottom: 25px;">用户注册</div>
				<div class="item">
					<el-input type="text" placeholder="用户名" v-model="userName" />
				</div>
				<div class="item">
					<el-input type="text" placeholder="密码" v-model="password" />
				</div>
				<div class="item">
					<el-input type="text" placeholder="确认密码" v-model="check_password" />
				</div>
				<div class="item-choose">
					<label>角色：</label>
					<input type="radio" id="yk" :value="1" v-model="category" />
					<label for="yk">游客</label>
					<input type="radio" id="sj" :value="2" v-model="category" />
					<label for="sj">商家</label>
				</div>
				<div class="item">
					<el-button type="button" @click="register">注册</el-button>
				</div>
			</div>
			<div v-if="flag == 1" class="bgn-register">
				<el-button @click="change" class="btn_change">用户注册</el-button>
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
			check_password: '',
			category: '',
			flag: 1,
		};
	},
	methods: {
		login() {
			if (this.userName == '') {
				alert('请输入用户名！');
			} else if (this.password == '') {
				alert('请输入密码！');
			} else if (this.category == '') {
				alert('请选择角色！');
			} else {
				this.request
					.post('/travel/login', {
						userName: this.userName,
						password: this.password,
						category: this.category,
					})
					.then((response) => {
						if (response.data.code == 0) {
							this.$emit('btn_view', response.data.data.id);
						} else {
							alert('用户名或者密码错误，请重新输入！');
							this.userName = '';
							this.password = '';
							this.category = '';
						}
					});
			}
		},
		register() {
			if (this.userName == '') {
				alert('请输入用户名！');
			} else if (this.password == '') {
				alert('请输入密码！');
			} else if (this.check_password == '') {
				alert('请确认密码！');
			} else if (this.category == '') {
				alert('请选择角色！');
			} else if (this.password != this.check_password) {
				alert('密码不一致！');
			} else {
				this.request
					.post('/travel/register/user', {
						userName: this.userName,
						password: this.password,
						category: this.category,
					})
					.then((response) => {
						console.log(response.data);
						if (response.data.code == 0) {
							this.userName = '';
							this.password = '';
							this.category = '';
							alert('用户注册成功！');
							this.flag = 1;
						} else {
							alert('用户注册失败！');
						}
					});
			}
		},
		change() {
			if (this.flag == 1) {
				this.flag = 0;
			} else {
				this.flag = 1;
			}
		},
	},
};
</script>

<style scoped>
@import './user_index.css'
</style>
