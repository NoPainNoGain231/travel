<template>
	<div>
		<User v-show="userShow" />
		<Admin v-show="adminShow" />
		<nav class="menu">
			<table style="width: 100%; height: 100%">
				<tr>
					<td><el-button @click="changeUser" >用户</el-button></td>
					<td><el-button @click="changeAdmin" >管理员</el-button></td>
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
		btn_view_handler(id) {
			this.flag = 0;
			if (id == '1') {
				alert('游客');
			} else if (id == '2') {
				alert('商家');
			} else {
				alert('管理员');
			}
		},
        changeUser(){
            this.userShow = true
            this.adminShow = false
        },
        changeAdmin(){
            this.userShow = false
            this.adminShow = true
        }
	},
};
</script>

<style scoped>
.menu {
	width: 100%;
	height: 70px;
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
</style>
