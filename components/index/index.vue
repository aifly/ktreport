<template>
	<div :style='{width:10+"rem"}'  class="zmiti-index-main-ui lt-full" ref='page'>
		<div class="zmiti-index-bg lt-full" :style="{background:'url('+imgs.indexBg+') no-repeat center bottom',backgroundSize:'cover'}">
			<div class="zmiti-kpy">
				<img :src="imgs.kpy" alt="">
			</div>
			<div :class="{'show':animate}" class="zmiti-house">
				<img :src="imgs.house" alt="">
			</div>
			<div :class="{'show':animate}" class="zmiti-text">
				<img :src="imgs.indexText" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	import imgs from '../lib/assets';
	import './index.css';
	export default {
		name:'zmitiindex',
		props:['obserable'],
		data(){
			return {
				imgs,
				animate:false,
			}
		},
		methods:{
			
		},
		components:{
		},
		mounted(){
			setTimeout(()=>{
				this.animate = true;
			},500)


			var {obserable} = this;
			obserable.on('getIndex',(index)=>{
				this.animate = index === 0;
			})
		}
	}
</script>