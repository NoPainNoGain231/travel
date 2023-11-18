<template>
    <div class="home_aside">
        <el-button class="el-icon-s-unfold" v-on:click="aside_change()"></el-button>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse">

            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="2" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<!-- 
    v-on   指令用于添加事件监听器
    v-html 解析HTML
    v-bind 属性绑定
 -->
<script>
export default {
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        aside_change() {
            if (this.isCollapse == true) {
                this.isCollapse = false;
                this.$emit('Collapse', this.isCollapse);
            } else {
                this.isCollapse = true;
                this.$emit('Collapse', this.isCollapse);
            }
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.home_aside .el-button {
    border: none;
    font-size: 18px;
}
</style>