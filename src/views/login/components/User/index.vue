<template>
	<div class="main">
		<div class="window">
			<div class="login" v-if="flag == 1">
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
				<el-button @click="change" class="btn_change">用户登录</el-button>
			</div>
			<div class="register" v-if="flag == 0">
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
.main {
	/* background-color: aliceblue; */
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
}

.window {
	margin: 150px auto;
	width: 800px;
	height: 400px;
	box-shadow: -5px 5px 8px 0px #9b9b9b;
	border-radius: 15px;
	background-color: aliceblue;
}

.login {
	height: 100%;
	width: 50%;
	float: left;
	background-color: #e9e9e9;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}

.register {
	height: 100%;
	width: 50%;
	float: left;
	background-color: #e9e9e9;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
}

.bgn-login {
	height: 100%;
	width: 50%;
	float: left;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}

.bgn-register {
	height: 100%;
	width: 50%;
	float: left;
    line-height: 100%;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
}

.title {
	font-size: 25px;
	width: 100px;
	height: 30px;
	margin: 50px auto;
	margin-bottom: 40px;
}

.item {
	margin: 20px auto;
	width: 60%;
}
.item-choose{
    margin: 20px auto;
	width: 60%;
    font-size: 14px;
    
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
	margin: 20px auto;
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
    line-height: 10px;
	text-align: center;
	border-radius: 15px;
	border: 1px solid #ddd;
}


</style>
