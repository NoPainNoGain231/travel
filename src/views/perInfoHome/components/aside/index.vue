<template>
    <div class="aside">
        <el-row class="tac">
            <el-col :span="12" style="width: 100%;">
                <h5>默认颜色</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <span>个人中心</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1" @click="Info">我的信息</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        Info(){
            this.$router.push({
                path:'/perInfoHome/perInfo',
                query:{
                    
                }
            });
        }
    }
}
</script>

<style scoped>
.aside{
    width: 200px;
}
</style>