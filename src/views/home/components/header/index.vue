<template>
    <div id="header">
        <div class="search">
            <el-input type="text"  placeholder="搜索旅游相关"/>
            <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
        <div class="order">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="2">
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
                <el-submenu index="2">
                    <template slot="title">用户</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                </el-submenu>
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
        }
    }
}
</script>

<style scoped>
@import './header_index.css';
</style>