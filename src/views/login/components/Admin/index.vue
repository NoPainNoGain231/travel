<template>
	<div>
		<div class="window">
			<div class="login">
				<div class="title">管理员登录</div>
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
							<img src="http://localhost:8080/travel/getCode" id="code" height=30px width=100px
								@click="refresh()" />
						</td>
					</tr>
				</table>
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
			yzm: '',
		};
	},
	methods: {
		login() {
			if (this.userName == '') {
				this.$notify({title:'提示',message:'请输入用户名！',type:'warning'});
			} else if (this.password == '') {
				this.$notify({title:'提示',message:'请输入密码！',type:'warning'});
			} else {
				this.request
					.post('/travel/login', {
						userName: this.userName,
						password: this.password,
						category: 3,
					})
					.then((response) => {
						console.log("生成的验证码："+response.data.data.code+"，输入的验证码："+this.yzm);
						if(response.data.data.code != this.yzm){
							this.$notify({title:'错误',message:'验证码错误！',type:'error'});
							return false;
						}
						if (response.data.code == 0) {
							this.$emit('btn_view', response.data);
						} else {
							this.$notify({title:'错误',message:'用户名或者密码错误，请重新输入！',type:'error'});
							this.userName = '';
							this.password = '';
						}
					});
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

.login .title {
	font-size: 25px;
	width: 125px;
	height: 30px;
	margin: 50px auto;
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
	width: 60%;
}

.item .el-button {
	margin: 20px 70px;
	font-size: 18px;
	width: 100px;
	height: 35px;
	text-align: center;
	border-radius: 15px;
	border: 1px solid #ddd;
	line-height: 10px;
}
</style>
