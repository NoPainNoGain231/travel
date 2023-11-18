<template>
    <div id="header">
        <div class="order">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="3">
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
                <el-menu-item index="2" @click="perInfoHome">个人中心</el-menu-item>
            </el-menu>
        </div>
        <div class="home">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" @click="home">
                    <i class="el-icon-s-home" style="font-size: 16px;"/>
                    首页
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '2',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        home() {
            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>
#header {
    height: 100%;
    padding: 0px;
}
.home,
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