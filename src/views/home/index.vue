<template>
    <div class="home">
        <el-container>
            <el-aside :width="isCollapse ? '5%' : '15%'">
                <Aside @Collapse="isCollapseHandler" />
            </el-aside>
            <el-aside :width="isCollapse ? '5%' : '15%'"></el-aside>
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <Main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Main from './components/main'
import Header from './components/header'
import Aside from './components/aside'
export default {
    components: {
        Main,
        Header,
        Aside
    },
    data() {
        return {
            isCollapse: true,
        }
    },
    methods: {
        isCollapseHandler(width) {
            console.log(width);
            this.isCollapse = width;
        }
    }
}
</script>

<style scoped>
.el-header,
.el-footer {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside:nth-child(1) {
    color: #333;
    position: fixed;
    overflow: hidden;
}

.el-main {
    color: #333;
    text-align: center;
}

body>.el-container {
    margin-bottom: 40px;
}</style>
