<template>
	<div>
		<User v-show="userShow" @btn_view="btn_view_handler" />
		<Admin v-show="adminShow" @btn_view="btn_view_handler"/>
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
@import './login_index.css'
</style>
