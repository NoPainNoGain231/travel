<template>
	<div>
		<div class="window">
			<div class="login" v-if="flag == 1">
				<div class="title">用户登录</div>
				<table>
					<tr>
						<td width="30%" colspan="1"><label>用户名</label></td>
						<td width="70%" colspan="2"><el-input type="text" placeholder="请输入用户名" v-model="userName" /></td>
					</tr>
					<tr>
						<td width="30%" colspan="1"><label>密码</label></td>
						<td width="70%" colspan="2"><el-input type="password" placeholder="请输入密码" v-model="password" /></td>
					</tr>
					<tr>
						<td width="30%" colspan="1"><label>验证码</label></td>
						<td width="40%" colspan="1">
							<el-input style="width: 80%%" type="text" v-model="yzm" placeholder="请输入验证码" />
						</td>
						<td width="30%" colspan="1">
							<img src="http://localhost:8080/travel/getCode" id="code" height=35px width=100px
								@click="refresh()" />
						</td>
					</tr>
					<tr>
						<td width="30%" colspan="1"><label>角色</label></td>
						<td width="70%" colspan="2">
							<input type="radio" id="yk" :value="1" v-model="category" />
							<label for="yk">游客</label>
							<input type="radio" id="sj" :value="2" v-model="category" />
							<label for="sj">商家</label>
						</td>
					</tr>
				</table>
				<div class="item">
					<el-button type="button" @click="login">登录</el-button>
				</div>
			</div>
			<div v-if="flag == 0" class="bgn-login">
				<el-button @click="change">用户登录</el-button>
			</div>
			<div class="register" v-if="flag == 0">
				<div class="title">用户注册</div>
				<table>
					<tr>
						<td><label>用户名</label></td>
						<td><el-input type="text" placeholder="用户名" v-model="userName" /></td>
					</tr>
					<tr>
						<td><label>密码</label></td>
						<td><el-input type="text" placeholder="密码" v-model="password" /></td>
					</tr>
					<tr>
						<td><label>确认密码</label></td>
						<td><el-input type="text" placeholder="确认密码" v-model="check_password" /></td>
					</tr>
					<tr>
						<td><label>角色</label></td>
						<td>
							<input type="radio" id="yk" :value="1" v-model="category" />
							<label for="yk">游客</label>
							<input type="radio" id="sj" :value="2" v-model="category" />
							<label for="sj">商家</label>
						</td>
					</tr>
				</table>
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
			yzm: '',
		};
	},
	created(){
		this.refresh();
	},
	methods: {
		login() {
			if (this.userName == '') {
				this.$notify({title:'提示',message:'请输入用户名！',type:'warning'});
			} else if (this.password == '') {
				this.$notify({title:'提示',message:'请输入密码！',type:'warning'});
			} else if (this.yzm == ''){
				this.$notify({title:'提示',message:'请输入验证码！',type:'warning'});
			} else if (this.category == '') {
				this.$notify({title:'提示',message:'请选择角色！',type:'warning'});
			} else {
				this.request
					.post('/travel/login', {
						userName: this.userName,
						password: this.password,
						category: this.category,
					})
					.then((response) => {
						console.log("生成的验证码："+response.data.data.code+"，输入的验证码："+this.yzm);
						if(response.data.data.code != this.yzm){
							this.$notify({title:'错误',message:'验证码错误！',type:'error'});
							return false;
						}
						if (response.data.code == 0) {
							this.$emit('btn_view', response.data);
							this.refresh();
						} else {
							this.$notify({title:'错误',message:'用户名或者密码错误，请重新输入！',type:'error'});
							this.userName = '';
							this.password = '';
							this.category = '';
						}
					});
			}
		},
		register() {
			if (this.userName == '') {
				this.$notify({title:'提示',message:'请输入用户名！',type:'warning'});
			} else if (this.password == '') {
				this.$notify({title:'提示',message:'请输入密码！',type:'warning'});
			} else if (this.check_password == '') {
				this.$notify({title:'提示',message:'请确认密码！',type:'warning'});
			} else if (this.category == '') {
				this.$notify({title:'提示',message:'请选择角色！',type:'warning'});
			} else if (this.password != this.check_password) {
				this.$notify({title:'提示',message:'密码不一致！',type:'warning'});
			} else {
				this.request
					.post('/travel/register/user', {
						userName: this.userName,
						password: this.password,
						category: this.category,
					})
					.then((response) => {
						if (response.data.code == 0) {
							this.userName = '';
							this.password = '';
							this.category = '';
							this.$notify({title:'成功',message:'用户注册成功！',type:'success'});
							this.flag = 1;
						} else {
							this.$notify({title:'错误',message:'用户注册失败！',type:'error'});
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
		refresh() {
			document.getElementById("code").src = "http://localhost:8080/travel/getCode?time=" + new Date().getTime();
		},
	},
};
</script>

<style scoped>
.window {
	margin: 90px auto;
	width: 800px;
	height: 400px;
	box-shadow: -5px 5px 8px 0px #9b9b9b;
	border-radius: 15px;
	background-color: aliceblue;
}

.login,
.register {
	height: 100%;
	width: 50%;
	float: left;
	background-color: #e9e9e9;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}

.bgn-login,
.bgn-register {
	height: 100%;
	width: 50%;
	float: left;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}

.bgn-login .el-button,
.bgn-register .el-button {
	margin: 150px 110px;
	font-size: 25px;
	width: 180px;
	height: 40px;
	line-height: 10px;
	text-align: center;
	border-radius: 15px;
	border: 1px solid #ddd;
}

.login .title,
.register .title {
	font-size: 25px;
	width: 100px;
	height: 30px;
	margin: 40px auto;
	margin-bottom: 40px;
}

table {
	width: 80%;
	margin: auto;
}

table tr {
	height: 45px;
}

table tr td:nth-child(1) {
	text-align: center;
}

.item {
	margin: 20px auto;
	width: 100px;
}

.item .el-button {
	margin: auto;
	font-size: 18px;
	width: 100px;
	height: 35px;
	text-align: center;
	border-radius: 15px;
	border: 1px solid #ddd;
	line-height: 12px;
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
}</style>
