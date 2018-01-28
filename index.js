import Vue from "vue";
import Index from './components/index/index'
import Page from './components/page/page'
import Obserable from './components/lib/obserable';
import imgs from './components/lib/assets'
import $ from 'jquery';
import './components/lib/touch.js';
var obserable = new Obserable();


//Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
	data: {
		obserable,
		rotate: false,
		imgs,
		index:3,
		page1Animate:false,
		showMask: false,
		bg: './assets/music/bg.mp3',
		viewH: document.documentElement.clientHeight,
		viewW: document.documentElement.clientWidth,

	},
	watch:{
		index(index){
			this.page1Animate = false;
			switch(index){
				case 0:
				break;
				case 1:
					this.page1Animate = true;
				break;
			}
			obserable.trigger({
				type:'getIndex',
				data:index
			})
		}
	},
	el: '#app',
	template: `<div class='zmiti-main' :style="{width:viewW+'px',height:viewH+'px',oveflow:'hidden'}"> 
		<ul class='zmiti-main-ui' :style="{width:8*viewW+'px',WebkitTransform:'translate3d('+-(index*viewW)+'px,0,0)'}">
			<li :style="{height:viewH+'px'}">
				<Index :obserable='obserable'></Index>
			</li>
			<li :style="{height:viewH+'px'}">
				<Page :page1Animate='page1Animate' :pagenum='1' :obserable='obserable'></Page>
			</li>
			<li :style="{height:viewH+'px'}">
				<Page :pagenum='2' :obserable='obserable'>
					<div slot='title'>
						深入耕耘云业务,业绩持续稳健增长。
					</div>
					<div class='zmiti-page2-img' slot='page-img' :style='{height:viewH-7*(viewW/10)+"px"}'>
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
					<div class='zmiti-page1-img zmiti-page3-img' slot='page-img' :style='{height:viewH-7*(viewW/10)+"px"}'>
						<div>
							<img :src='imgs.map' />
							<span>96%</span>
							<span>2000+</span>
						</div>
					</div>
				</Page>
			</li>
			<li :style="{height:viewH+'px'}">  
				<Page :pagenum='4' :obserable='obserable'>
					<div slot='title'>
						开辟行业新天地,树立应用新典范。
					</div>
					<div class='zmiti-page1-img zmiti-page4-img' slot='page-img' :style='{height:viewH-7*(viewW/10)+"px"}'>
						<ol>
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
					<div class='zmiti-page1-img zmiti-page5-img' slot='page-img' :style='{height:viewH-7*(viewW/10)+"px"}'>
						<div>
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
						辛劳付出饱受客户夸赞。
					</div>
					<div class='zmiti-page1-img zmiti-page6-img' slot='page-img' :style='{height:viewH-7*(viewW/10)+"px"}'>
						<div>
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
						<ul>
							<li><span>感谢</span><label>我们的客户</label></li>
							<li><span>感谢</span><label>我们的投资人</label></li>
							<li><span>感谢</span><label>我们努力的自己</label></li>
							<li><span>感谢</span><label>大家信任支持批评</label></li>
						</ul>
						<div class='zmiti-wish'>祝福大家2018健康吉祥 平安如意</div>
						<div class='zmiti-share-btn'>分享2017成绩单</div>
					</div>
				</Page>
			</li>
			
		</ul>
		<div hidden @click='toggleMusic' class='zmiti-play' :class='{"rotate":rotate}'>
			<img :src='imgs.play'/>
		</div>


		<div :style="{height:viewH+'px'}"  class="zmiti-mask" v-if='showMask' @touchstart='showMask = false'>
			<img :src="imgs.arrow" alt="">
		</div>
	</div>`,
	methods: {

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
			//var music = this.$refs['audio'];
			//music[music.paused ? 'play' : 'pause']()
		},
		showImg(index){
			alert(index);
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

		/*this.loading(arr, (s) => {
			obserable.trigger({
				type: 'loading',
				data: s * 100 | 0
			})
		}, () => {
			obserable.trigger({
				type: 'loaded'
			})
		})*/

		obserable.on('showShare', () => {
			this.showMask = true;
		});

		obserable.on('next',()=>{
			this.index += 1;
		});
		obserable.on('prev',()=>{
			if(this.index<=0){
				return;
			}
			this.index -= 1;
		});

		/*$(this.$refs['audio']).on('play', () => {
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
		});*/

		//this.updatePv();
	}
})