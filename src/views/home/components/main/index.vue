<template>
    <div>
        <template>
            <el-carousel :interval="4000" type="card" height="300px" indicator-position="none">
                <el-carousel-item v-for="item in 6" :key="item" >
                    <h3 class="medium" style="height: 300px;">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </template>
    </div>
</template>

<style scoped>
@import './main_index.css'
</style>