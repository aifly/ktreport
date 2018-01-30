<template>
	<div :class="pageClass" :style="pageStyle

	" class="zmiti-page-main-ui lt-full">
		
			<div :class='titleClass' class="zmiti-title">
				<h1>2017我们</h1>
				<slot name='title'>	
					<div>成功挂牌新三版，完成新一轮融资；获得资本市场认可，翻开了新的画卷。</div>
				</slot>
			</div>
		<div class="zmiti-pager">
			<span>{{pagenum}}</span>
			<slot name='page-num'><img :src="imgs.pagenum" /></slot>
		</div>
		<slot name='page-img'>
			
			<div  class="zmiti-page1-img" :style='{height:viewH-7*(viewW/10)+"px"}'>
				<div :class="{'show':page1Animate}">
					<img :src="imgs.pageimg1" alt="">
				</div>
			</div>
		</slot>

		<div class="zmiti-pagation">
			<div @click='prev' :class="{'disabled':pagenum === 0}">上一页</div>
			<div><img :src="imgs.logo" alt=""></div>
			<div @click='next'>下一页</div>
		</div>
	</div>	
</template>
<script>
	import imgs from '../lib/assets';
	import './page.css';
	export default {
		name:'zmitipage',
		props:['obserable','pagenum','pageStyle','titleClass','pageClass','page1Animate'],
		data(){
			return {
				imgs,
				viewW:document.documentElement.clientWidth,
				viewH:document.documentElement.clientHeight
			}
		},
		methods:{

			next(){
				var {obserable} = this;
				obserable.trigger({
					type:'next'
				})
			},
			prev(){
				var {obserable} = this;
				obserable.trigger({
					type:'prev'
				})
			}

		},
		mounted(){

		}
	}
</script>