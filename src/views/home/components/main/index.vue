<template>
    <div>
        <template>
            <el-carousel :interval="4000" type="card" height="250px" indicator-position="none">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium" style="height: 250px;">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </template>

        <div class="hotel">
            <div class="title">
                <label>酒店<span style="color: bisque;">推荐</span></label>
                <label>更多</label>
            </div>
            <div class="item">
                <div class="item-list" v-for="item in htList">
                    <el-image style="width: 100%; height: 55%;float: left;" :src="item.htImage" fit="fill"></el-image>
                    <div style="width: 100%;height: 45%;float: left;text-align: left;">
                        <label style="top: 10px;left: 10px;"><strong>{{ item.htName }}</strong></label>
                        <div style="position: relative;top: 80px;">
                            <label style="font-size: 14px;left: 10px;float: left;"><span>***条点评</span></label>
                            <label style="font-size: 18px;right:10px;color: rgba(0, 157, 255, 0.688);float: right;">
                                <strong>
                                    ￥<span>{{ item.htPrice }}</span>
                                </strong>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="travel">
            <div class="title">
                <label>景点<span style="color: bisque;">推荐</span></label>
                <label>更多</label>
            </div>
            <div class="item">
                <div class="item-list" v-for="item in htList">
                    <el-image style="width: 100%; height: 65%;float: left;" :src="item.htImage" fit="fill"></el-image>
                    <div style="width: 100%;height: 35%;float: left;text-align: left;">
                        <label style="top: 10px;left: 10px;"><strong>{{ item.htName }}</strong></label>
                        <div style="position: relative;top: 20px;height: 25px;">
                            <label style="font-size: 15px;left:10px;color: rgba(6, 126, 200, 0.688);">
                                <strong>
                                    <span>{{ item.htPrice }}</span>分
                                </strong>
                            </label>
                            <label style="font-size: 15px;left: 20px;"><span>***条点评</span></label>
                        </div>
                        <div style="position: relative;top: 25px;height: 25px;">
                            <label style="font-size: 15px;left: 10px;float: left;"><span>文案</span></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            htList: [],
        }
    },
    created() {
        this.getHotelDetail();
    },
    methods: {
        getHotelDetail() {
            this.request.post('/travel/hotel').then((response) => {
                if (response.data.code == 0) {
                    this.htList = response.data.data;
                } else {
                    console.log("获取酒店信息失败")
                }
            })
        }
    }
};
</script>

<style scoped>
@import './main_index.css'
</style>