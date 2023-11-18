<template>
    <div>
        <div class="window">
            <div class="title"><strong>我的信息</strong></div>
            <hr style="width: 95%;color: #ddd;">
            <div class="content">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item v-if="showId == true" label="编号" type="hidden" prop="id">
                        <el-input v-model="form.id"></el-input>
                    </el-form-item>
                    <el-form-item label="手机">
                        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称">
                        <el-input v-model="form.intName" placeholder="请输入昵称"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <input type="radio" id="man" :value="0" v-model="form.sex" />
                        <label for="man">男</label>
                        <input type="radio" id="woman" :value="1" v-model="form.sex" />
                        <label for="woman">女</label>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date"
                                style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认</el-button>
                        <el-button>重置</el-button>
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
            showId: false,
            form: {
                id: '',
                phone: '',
                email: '',
                intName: '',
                name: '',
                sex: '',
                date: '',

            },
            id: this.$route.query.id,
        }
    },
    methods: {
        onSubmit() {
            if (confirm("是否确认修改！")) {
                console.log(this.form)
                // const response = this.request.post('/travel/update', this.form);
                // if (response.data.code == 1) {
                // }
            }
        }
    }
};
</script>

<style scoped>
.window {
    width: 100%;
}

.title {
    line-height: 25px;
    padding: 15px 25px;
    font-size: 18px;
}

.el-form {
    width: 80%;
    margin: 20px auto;
}
</style>