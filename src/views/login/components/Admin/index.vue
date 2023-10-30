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
.main {
	background-color: aliceblue;
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
}

.window {
	margin: 150px auto;
	width: 400px;
	height: 400px;
	box-shadow: -5px 5px 8px 0px #9b9b9b;
	border-radius: 15px;
}

.login {
	height: 100%;
	width: 100%;
	float: left;
	background-color: #e9e9e9;
	border-radius: 15px;
}

.title {
	font-size: 25px;
	width: 150px;
	height: 30px;
	margin: 50px auto;
	margin-bottom: 40px;
}

.item {
	margin: 20px auto;
	width: 60%;
}
.item input {
	width: 100%;
	height: 30px;
	border: none;
}
.item input[type='radio'] {
	width: 10px;
	height: 10px;
}
.item label {
	font-size: 18px;
}
.item el-button {
	margin: 20px 70px;
	font-size: 18px;
	width: 100px;
	height: 35px;
	text-align: center;
	border-radius: 15px;
	border: 1px solid #ddd;
}

.btn_change {
	margin: 150px 110px;
	font-size: 25px;
	width: 180px;
	height: 40px;
	text-align: center;
	border-radius: 15px;
	border: 1px solid #ddd;
}
</style>
