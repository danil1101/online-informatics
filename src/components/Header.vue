<script setup>
import {ref} from 'vue'

const isActive = ref(false)
</script>


<template>
  <header class='header'>
		<div class='header__container'>
			<router-link to='/' class='header__logo'>
				Online <span>informatics</span>
			</router-link>
			<div class='header__menu menu' :class='{active: isActive}'>
				<router-link to='/fifth-grade' class='menu__item'>5 класс</router-link>
				<router-link to='/sixth-grade' class='menu__item'>6 класс</router-link>
				<router-link to='/seventh-grade' class='menu__item'>7 класс</router-link>
				<router-link to='/eighth-grade' class='menu__item'>8 класс</router-link>
				<router-link to='/ninth-grade' class='menu__item'>9 класс</router-link>
			</div>
			<div class='header__burger icon-menu' @click='isActive = !isActive' :class='{active: isActive}'>
				<span></span>
			</div>
		</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
	padding: 20px 0;
	&__container {
		padding-top: 15px;
		padding-bottom: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	&__logo{
		font-size: 24px;
		font-weight: bold;
		span {
			color: #FF3F3A;
		}
	}

	&__menu {}
}

.menu {
	display: flex;
	gap: 40px;
	align-items: center;
	@media (max-width: 768px) {
		position: absolute;
		right: -100%;
		transition: all 0.3s ease 0s;
		flex-direction: column;
		background: #fff;
		border-radius: 20px;
		padding: 20px 12px;
		gap: 30px;
		min-width: 150px;
		top: 45px;
		&.active {
			right: 20px;
		}
	}

	&__item {
		color: #424551;
		font-size: 16px;
		font-weight: 700;
	}
}

.icon-menu {
	display: none;
}
@media (max-width: 768px) {
	.icon-menu {
		display: block;
		position: relative;
		width: 1.25rem;
		height: 1.125rem;
		cursor: pointer;
		z-index: 5;
	}
	.icon-menu span, .icon-menu::before, .icon-menu::after {
		content: "";
		transition: all 0.3s ease 0s;
		right: 0;
		position: absolute;
		width: 100%;
		height: 0.125rem;
		background-color: #FF3F3A;
	}
	.icon-menu::before {
		top: 0;
	}
	.icon-menu::after {
		bottom: 0;
	}
	.icon-menu span {
		top: calc(50% - 0.0625rem);
	}
	.active.icon-menu span {
		width: 0;
	}
	.active.icon-menu::before {
		top: calc(50% - 0.0625rem);
		transform: rotate(-45deg);
	}
	.active.icon-menu::after {
		bottom: calc(50% - 0.0625rem);
		transform: rotate(45deg);
	}
}

</style>