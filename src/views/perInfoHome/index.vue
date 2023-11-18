<template>
    <div class="home">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-container>
                <el-aside>
                    <Aside />
                </el-aside>
                <el-main>
                    <Main :id="id"/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Aside from './components/aside';
import Header from './components/header';
import Main from './components/main';
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
.el-header {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    color: #333;
    overflow: hidden;
    width: 200px !important;
}

.el-main {
    color: #333;
}
.home{
    width: 80%;
    margin: 0px auto;
}
.home>.el-container {
    margin-bottom: 40px;
}
</style>
