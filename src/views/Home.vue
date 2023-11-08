<template>
  <main class='home'>
		<div class='home__container'>
			<div class='home__body'>
				<div class='home__title'>
					Обучающие материалы по информатике за 5-9 классы
				</div>
				<div class='home__image'>
					<img src='../assets/main.svg' alt=''>
				</div>
			</div>
			<div class='home__statistics statistics'>
				<div class='statistics__item statistics-item'>
					<div class='statistics-item__count'>190</div>
					<div class='statistics-item__title'>обучающих видеоуроков</div>
				</div>
				<div class='statistics__ellipse'/>
				<div class='statistics__item statistics-item'>
					<div class='statistics-item__count'>10</div>
					<div class='statistics-item__title'>учебныx материалов</div>
				</div>
				<div class='statistics__ellipse'/>
				<div class='statistics__item statistics-item'>
					<div class='statistics-item__count'>10</div>
					<div class='statistics-item__title'>учебный материалов</div>
				</div>

<!--				<div class='statistics__item statistics-item'>
					<div class='statistics-item__count'></div>
					<div class='statistics-item__title'></div>
				</div>-->
				<div class='statistics__ellipse'/>
				<div class='statistics__item statistics-item'>
					<div class='statistics-item__count'>5</div>
					<div class='statistics-item__title'>классов</div>
				</div>
			</div>
		</div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home {

	&__conatiner {
	}

	&__body {
		margin-top: 80px;
		display: flex;
		justify-content: space-between;
		@media (max-width: 1048px) {
			flex-direction: column;
			justify-content: center;
		}
		@media (max-width: 630px) {
			margin-top: 40px;
			gap: 30px;
		}
	}

	&__title {
		color: #1E212C;
		font-size: 54px;
		max-width: 620px;
		font-weight: 900;
		line-height: 130%;
		letter-spacing: 1px;
		@media (max-width: 1048px) {
			max-width: 100%;
			text-align: center;
		}
	}

	&__image {
		img {
			width: 100%;
			height: 100%;
			max-width: 650px;
			object-fit: cover;
			@media (max-width: 1048px) {
				max-width: 100%;
			}
		}
	}

	&__statistics {}
}

.statistics {
	margin-top: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;

	@media (max-width: 1048px) {
		justify-content: center;
		gap: 15px;
	}
	@media (max-width: 960px) {
		flex-wrap: wrap;
	}


	&__item {

	}

	&__ellipse {
		width: 8px;
		height: 8px;
		border-radius: 100%;
		background: #FF3F3A;
		@media (max-width: 960px) {
			display: none;
		}
	}
}

.statistics-item {
	display: flex;
	gap: 12px;
	align-items: center;
	position: relative;

	@media (max-width: 960px) {
		flex: 0 1 40%;
		justify-content: center;
	}

	@media (max-width: 630px) {
		flex: 1 1 100%;
	}
	&:not(:last-child)::after {
		content: '';

		position: absolute;
	}

	&__count {
		color: #1E212C;
		font-size: 46px;
		font-weight: 900;
		line-height: 130%;
	}

	&__title {
		color: #1E212C;
		font-size: 16px;
		font-weight: 400;
		line-height: 160%;
	}
}
</style>