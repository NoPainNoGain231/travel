<template>
    <div >
        <el-container>
            <el-aside width="200px"><Aside/></el-aside>
            <el-container>
                <el-header><Header /></el-header>
                <el-main><Main /></el-main>
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
    }
}
</script>

<style scoped>
@import './home_index.css'
</style>
