<template>
  <div class="item-poetry">

    <div class="content" v-html="content"></div>

    <div class="author">—— {{data.title}} [{{data.user.username}}]</div>

    <div class="tools">
      <div class="btn-group">
        <span class="iconfont icon-like">{{data.views}}</span>
      </div>
      <div class="date" :title="Moment(data.createdAt).format('YYYY/MM/DD HH:mm:ss')">{{Moment(data.createdAt).fromNow()}}</div>
    </div>

    <div class="qrcode" :class="{'active': currQrcode}">
        <div class="thumb" :ref="`qrCodeUrl${data.id}`"></div>
    </div>

    <div class="shadow">
      <span class="iconfont icon-support" title="为它打Call"></span>
      <a class="iconfont icon-column" :href="`/author/${data.userId}`" title="作者专栏"></a>
      <span class="iconfont icon-share" title="分享" @mouseenter="currQrcode = true" @mouseleave="currQrcode = false"></span>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import Moment from 'moment'
Moment.locale('zh-cn')
export default {
  name: 'ItemPoetry',
  props: {
    data: Object
  },
  data() {
    return {
      currQrcode: false
    }
  },
  computed: {
    content() {
      return this.data ? `<p>${this.data.content.replace(/\r?\n/g,'</p><p>')}</p>` : ''
    }
  },
  mounted() {
    this.creatQrCode();
  },
  watch: {
    'data.id'() {
      this.creatQrCode();
    }
  },
  methods: {
    Moment,
    creatQrCode() {
      let self = this;
      console.log(1);
      setTimeout(()=>{
        let id = self.data.id;
        let key = 'qrCodeUrl' + id
        new QRCode(self.$refs[key], {
            text: `https://shici.freelion.me/detail/${id}`,
            width: 140,
            height: 140,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
      }, 300)
    },
  }
}
</script>
<style scoped lang="scss">
.item-poetry {
  position: relative;
  margin-bottom: 0.2rem;
  background: #fff;
  overflow: hidden;
  .content {
    font-size: 0.18rem;
    line-height: 1;
    padding: 0.5rem 0.3rem 0.3rem;
    /deep/ p {
      padding-bottom: 0.8em;
      &:last-child {
        padding: 0;
      }
    }
  }
  .author {
    padding: 0 0.2rem;
    color: #666;
    font-size: 0.16rem;
    text-align: right;
  }
  .tools {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.7rem;
    font-size: 0.14rem;
    margin-top: 0.4rem;
    padding: 0 0.2rem;
    border-top: 1px dashed #f0f0f0;
    .btn-group {
      color: #999;
      span {
        padding-right: 0.2rem;
        &:before {
          padding-right: 0.05rem;
        }
      }
    }
    .date {
      color: #333;
    }
  }
  .qrcode {
    position: absolute;
    top: 150%;
    bottom: 0.7rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    transition: all 0.3s;
    &.active {
      top: 0;
    }
  }
  .shadow {
    position: absolute;
    bottom: -0.7rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    transition: all 0.3s;
    border-top: 1px dashed #f0f0f0;
    .iconfont {
      font-size: 0.26rem;
      margin: 0 0.15rem;
      color: #555;
      cursor: pointer;
    }
  }
  &:active, &:hover {
    .shadow {
      bottom: 0;
    }
  }
}
</style>
