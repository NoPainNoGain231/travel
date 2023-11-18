<template>
    <div>
        <div class="window">
            <div class="title"><strong>我的信息</strong></div>
            <hr style="width: 95%;color: #ddd;">
            <div class="content">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="手机">
                        <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称">
                        <el-input v-model="form.intName"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    created() {
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
};
</script>

<style scoped>
.window {
    width: 100%;
}
.title{
    line-height: 25px;
    padding: 15px 25px;
    font-size: 18px;
}
.el-form{
    width: 80%;
    margin: 20px auto;
}
</style>