<template>
	<div :style='{width:10+"rem"}' class="zmiti-index-main-ui lt-full" ref='page'>
		<div class="zmiti-index-bg lt-full" :style="{background:'url('+imgs.indexBg+') no-repeat center bottom',backgroundSize:'cover'}">
			<div :class="{'show':animate}" class="zmiti-house">
				<img :src="imgs.house" alt="">
			</div>
			<div :style="{left:Math.random()*10+'rem',top:Math.random()*10+5+'rem',WebkitAnimationDuration:Math.random()*6+3+'s',WebkitAnimationDelay:Math.random()*6+'s'}" class="zmiti-meteor" :class='"zmiti-meteor"+(i+1)' v-for='(n,i) in new Array(20)'></div>
			<div :class="{'show':animate}" class="zmiti-text">
				<img :src="imgs.indexText" alt="">
				<div @touchstart='entryIndex' class="zmiti-index-btn"></div>
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
			entryIndex(){
				this.$emit('entryIndex')
			}
		},
		components:{
		},
		mounted(){
			 


			var {obserable} = this;
			obserable.on('getIndex',(index)=>{
				this.animate = index === 0;
			});
			obserable.on('indexAniamte',()=>{
				this.animate = true;
			})
		}
	}
</script>