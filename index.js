import Vue from "vue";
import Index from './components/index/index'
import Page from './components/page/page'
import Obserable from './components/lib/obserable';
import imgs from './components/lib/assets'
import $ from 'jquery';
import './components/lib/touch.js';
import zmitiUtil from './components/lib/util'
var obserable = new Obserable();


//Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
	data: {
		obserable,
		rotate: false,
		imgs,
		index: 0,
		page1Animate: false,
		page2Animate: false,
		page3Animate: false,
		page4Animate: false,
		page5Animate: false,
		page6Animate: false,
		page7Animate: false,
		showMask: false,
		business: 0,
		customer: 0,
		imgIndex: -1,


		bg: './assets/music/bg.mp3',
		viewH: document.documentElement.clientHeight,
		viewW: document.documentElement.clientWidth,

	},
	watch: {
		index(index) {

			this.page1Animate = false;
			this.page2Animate = false;
			this.page3Animate = false;
			this.page4Animate = false;
			this.page5Animate = false;
			this.page6Animate = false;
			this.page7Animate = false;
			switch (index) {
				case 0:
					break;
				case 1:
				case 2:
				case 4:
				case 5:
				case 6:
				case 7:
					this['page' + index + 'Animate'] = true;
					break;
				case 3:
					this.page3Animate = true;

					var i = 0;
					var j = 1500;
					var t = setInterval(() => {
						i += 2;
						j += 10;
						if (j >= 2000) {
							j = 2000;
							clearInterval(t);
						}
						if (i >= 96) {
							i = 96;
						}
						this.business = i;
						this.customer = j;
					}, 40)
					break;
			}
			obserable.trigger({
				type: 'getIndex',
				data: index
			})
		}
	},
	el: '#app',
	template: `<div class='zmiti-main' :style="{width:viewW+'px',height:viewH+'px',oveflow:'hidden'}"> 
		<ul v-swipeleft='swipeleft' v-swipeup='swipeleft' v-swiperight='swiperight' v-swipedown='swiperight' class='zmiti-main-ui' :style="{height:8*viewH+'px',WebkitTransform:'translate3d(0,'+-(index*viewH)+'px,0)'}">
			<li v-tap='entryIndex' :style="{height:viewH+'px'}">
				<Index @entryIndex='entryIndex' :obserable='obserable'></Index>
			</li>
			<li :style="{height:viewH+'px'}">
				<Page :page1Animate='page1Animate' :pagenum='1' :obserable='obserable'></Page>
			</li>
			<li :style="{height:viewH+'px'}">
				<Page :pagenum='2' :obserable='obserable'>
					<div slot='title'>
						深入耕耘云业务,业绩持续稳健增长。
					</div>
					<div :class="{'show':page2Animate}" class='zmiti-page2-img' slot='page-img' :style='{height:viewH-6*(viewW/10)+"px"}'>
						<img :src='imgs.ar' />
						<img :src='imgs.yun' />
					</div>
				</Page>
			</li>
			<li :style="{height:viewH+'px'}">
				<Page :pagenum='3' :obserable='obserable'>
					<div slot='title'>
						业务覆盖全国96%的省份,服务客户量2000+
					</div>
					<div class='zmiti-page1-img zmiti-page3-img' slot='page-img' :style='{height:viewH-6*(viewW/10)+"px"}'>
						<div :class="{'show':page3Animate}">
							<img :src='imgs.map' />
							<span>{{business}}%</span>
							<span>{{customer}}+</span>
						</div>
					</div>
				</Page>
			</li>
			<li :style="{height:viewH+'px'}">  
				<Page :pagenum='4' :obserable='obserable'>
					<div slot='title'>
						开辟行业新天地,树立应用新典范。
					</div>
					<div class='zmiti-page1-img zmiti-page4-img' slot='page-img' :style='{height:viewH-6*(viewW/10)+"px"}'>
						<ol :class="{'show':page4Animate}">
							<li v-for='(n,i) in new Array(6)'>
								<img :src='imgs["part"+(i+1)]' />
							</li>			
						</ol>
					</div>
				</Page>
			</li>

			<li :style="{height:viewH+'px'}"> 
				<Page titleClass='page5' :pageStyle="{background:'#e4253f'}" :pagenum='5' :obserable='obserable'>
					<div slot='title'>
						辛劳付出饱受客户夸赞。
					</div>
					<img :src="imgs.pagenum1" slot='page-num' alt="" />
					<div class='zmiti-page1-img zmiti-page5-img' slot='page-img' :style='{height:viewH-6*(viewW/10)+"px"}'>
						<div :class="{'show':page5Animate}">
							<div class='zmiti-letter-C'>
								<img :src='imgs.letter' />
								<ol>
									<li @click='showImg(i)' v-for='(n,i) in new Array((9))'></li>
								</ol>
							</div>
							<div class='zmiti-point'>
								<span v-for='i in new Array(6)'></span>
							</div>
							<div class='zmiti-btn'>客户的认可是我们前行最大的动力</div>
							<h1 style='height:10px'></h1>
						</div>
					</div>
				</Page>
			</li>
			<li :style="{height:viewH+'px'}"> 
				<Page titleClass='page6' pageClass='page6' :pageStyle="{background:'#e4253f'}" :pagenum='6' :obserable='obserable'>
					<div slot='title'>
						 
					</div>
					<div class='zmiti-page1-img zmiti-page6-img' slot='page-img' :style='{height:viewH-6*(viewW/10)+"px"}'>
						<div :class="{'show':page6Animate}">
							<img :src='imgs.dream1' />
							<img :src='imgs.dream2' />
						</div>
					</div>
				</Page>
			</li>
			<li :style="{height:viewH+'px'}">
				<Page :pagenum='""' pageClass='page7' :obserable='obserable'>
					<div slot='title'>
						<img :src="imgs.sign2017" alt="" />
					</div>
					<img :src="imgs.kpy" slot='page-num' alt="" />
					<div class='zmiti-page7-img' slot='page-img' :style='{height:viewH-4*(viewW/10)+"px"}'>
						<ul :class="{'show':page7Animate}">
							<li><span>感谢</span><label>我们的客户</label></li>
							<li><span>感谢</span><label>我们的投资人</label></li>
							<li><span>感谢</span><label>我们努力的自己</label></li>
							<li><span>感谢</span><label>大家信任支持批评</label></li>
						</ul>
						<div class='zmiti-wish'>祝福大家2018健康吉祥 平安如意</div>
						<div @click='showMask = true' class='zmiti-share-btn'>分享2017成绩单</div>
					</div>
				</Page>
			</li>
			
		</ul>
		<div  @click='toggleMusic' class='zmiti-play' :class='{"rotate":rotate}'>
			<img :src='imgs.play'/>
		</div>

		<audio ref='audio' src='./assets/music/bg.mp3' autoplay loop></audio>


		<div :style="{height:viewH+'px'}"  class="zmiti-mask" v-if='showMask' @touchstart='showMask = false'>
			<img :src="imgs.arrow" alt="">
		</div>

		<div @click='imgIndex = -1' v-if='imgIndex>-1' class='zmiti-img-C lt-full'>
			<img :src='imgs["img"+(imgIndex+1)]'/>
		</div>
		<div class='zmiti-progress' :style="{WebkitTransform:'scale('+index/7+',1)'}"></div>
	</div>`,
	methods: {
		swipeleft() {
			this.index++;
			this.index >= 7 && (this.index = 7);

		},
		swiperight() {
			this.index--;
			this.index <= 0 && (this.index = 0);
		},
		entryIndex() {
			this.index = 1;
		},
		loading: function(arr, fn, fnEnd) {
			var len = arr.length;
			var count = 0;
			var i = 0;

			function loadimg() {
				if (i === len) {
					return;
				}
				var img = new Image();
				img.onload = img.onerror = function() {
					count++;
					if (i < len - 1) {
						i++;
						loadimg();
						fn && fn(i / (len - 1), img.src);
					} else {
						fnEnd && fnEnd(img.src);
					}
				};
				img.src = arr[i];
			}
			loadimg();
		},
		toggleMusic() {
			var music = this.$refs['audio'];
			music[music.paused ? 'play' : 'pause']()
		},
		showImg(index) {
			this.imgIndex = index;
		},
		updatePv() {
			$.ajax({
				url: window.protocol + '//api.zmiti.com/v2/custom/update_pvnum/',
				type: 'post',
				data: {
					//isrand: 0,
					customid: 37
				}
			});
		}
	},
	components: {
		Index,
		Page

	},
	mounted() {

		var arr = [];

		for (var attr in imgs) {
			arr.push(imgs[attr])
		}

		var loadingProgress = $('#zmiti-progress');
		var loadingText = $("#loading-text");
		this.loading(arr, (s) => {
			loadingProgress.html((s * 100 | 0) + '%');
			loadingText.css({
				width: (s * 100 | 0) + '%'
			})
		}, () => {
			$('#zmiti-loading').remove();
			setTimeout(() => {
				obserable.trigger({
					type: 'indexAniamte'
				})
			}, 300)
		})

		obserable.on('showShare', () => {
			this.showMask = true;
		});

		obserable.on('next', () => {
			this.index += 1;
		});
		obserable.on('prev', () => {
			if (this.index <= 0) {
				return;
			}
			this.index -= 1;
		});

		zmitiUtil.wxConfig(document.title, document.title);

		$(this.$refs['audio']).on('play', () => {
			this.rotate = true;
		}).on('pause', () => {
			this.rotate = false;
		});

		this.$refs['audio'].volume = .3;
		this.$refs['audio'].play();
		var s = this;
		document.addEventListener("WeixinJSBridgeReady", function() {
			WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
				s.$refs['audio'].play();
			});
		}, false)

		obserable.on('toggleBgMusic', (data) => {
			this.$refs['audio'][data ? 'play' : 'pause']();
		});
		//this.updatePv();
	}
})