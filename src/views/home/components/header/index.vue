<template>
    <div id="header">
        <div class="search">
            <el-input type="text" placeholder="搜索旅游相关" />
            <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
        <div class="order">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                    <template slot="title">我的订单</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
        <div class="user">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" @click="perInfoHome">个人中心</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        perInfoHome() {
            this.$router.push({
                path: '/perInfoHome',
                query:{
                    id:this.$route.query.id,
                }
            });
        }
    }
}
</script>

<style scoped>
#header {
    height: 100%;
    padding: 0px;
}

.order,
.user {
    float: right;
    background-color: white;
}

.search {
    float: left;
    margin-left: 300px;
}

.search .el-input {
    width: 200px;
}

.search .el-input input {
    width: 200px;
    border: 1px solid #409EFF;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 15px;
}

.search .el-button {
    height: 40px;
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
}
</style>