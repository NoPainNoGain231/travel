<template>
	<div class="main">
		<div class="top_title">
			<strong>旅&nbsp;&nbsp;游&nbsp;&nbsp;分&nbsp;&nbsp;享&nbsp;&nbsp;平&nbsp;&nbsp;台</strong>
		</div>
		<User v-show="userShow" @btn_view="btn_view_handler" />
		<Admin v-show="adminShow" @btn_view="btn_view_handler" />
		<nav class="menu">
			<table style="width: 100%; height: 100%">
				<tr>
					<td><el-button @click="changeUser">用户</el-button></td>
					<td><el-button @click="changeAdmin">管理员</el-button></td>
				</tr>
			</table>
		</nav>
	</div>
</template>

<script>
import User from './components/User';
import Admin from './components/Admin';
export default {
	components: {
		User,
		Admin,
	},
	data() {
		return {
			flag: 1,
			userShow: true,
			adminShow: false,
		};
	},
	methods: {
		// 登录按钮的监控
		btn_view_handler(res) {
			this.flag = 0;
			console.log(res)
			if (res.data.category == '1') {
				alert("登录成功");
				window.sessionStorage.setItem('token', res.data.token);
				this.$router.push({
					path: '/home',
					query: {
						id: res.data.id,
					}
				});
			} else if (res.data.category == '2') {
				alert('商家');
			} else {
				alert('管理员');
			}
		},
		changeUser() {
			this.userShow = true
			this.adminShow = false
		},
		changeAdmin() {
			this.userShow = false
			this.adminShow = true
		}
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

.menu {
	width: 100%;
	height: 50px;
	position: absolute;
	bottom: 0px;
	right: 0px;
	background-color: rgb(187, 187, 187);
}

.menu table tr td {
	width: 50%;
	text-align: center;
	font-size: 20px;
}

.menu table tr td .el-button {
	height: 35px;
	width: 85px;
}

.top_title {
	width: 275px;
	font-size: 30px;
	margin: 50px auto;
}
</style>
