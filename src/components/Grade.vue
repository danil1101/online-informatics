<template>
	<section class='grade'>
		<div class='grade__container'>
			<div class='grade__title'>{{props.title}}</div>
			<div class='grade__documents'>
				<div class='document'  v-for='document in props.documents'>
					<div class='document__source'>
						<iframe :src="document.source" frameborder="0"></iframe>
					</div>
					<div class='document__title'>{{document.title}}</div>
				</div>
			</div>
			<div class='grade__row'>
				<div class='grade__item item' v-for='(lesson, key) in props.lessons'>
					<div class='item__video'>
						<iframe :src="lesson.href" :title="lesson.title" frameborder="0"  allowfullscreen></iframe>
					</div>
					<div class='item__body'>
						<div class='item__title'>{{key + 1}}. {{lesson.title}}</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	title: String,
	lessons: Array,
	documents: Array,
})
</script>

<style lang='scss' scoped>
.grade {

	&__title {
		font-size: 40px;
		font-weight: 900;
		line-height: 130%;
		text-align: center;
		margin-bottom: 30px;
	}

	&__row {
		padding: 30px 0;
		display: grid;
		gap: 30px;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}

	&__documents {
		display: flex;
		justify-content: space-between;
		gap: 20px;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
}

.document {
	width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	height: 540px;
	@media (max-width: 768px) {
		min-width: 100%;
		width: auto;
		height: 580px;
	}
	&__source {
		flex: 1 1 auto;
		min-width: 100%;
		iframe {
			min-height: 100%;
			min-width: 100%;
		}
	}

	&__title {
		color: #787A80;
		font-size: 16px;
		line-height: 150%;
	}
}
.item {
	width: 100%;
	display: flex;
	height: 300px;
	flex-direction: column;
	border-radius: 4px;
	box-shadow: 0 4px 4px -4px rgba(30, 33, 44, 0.03), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 80px 80px -20px rgba(154, 156, 165, 0.08);

	&__video {
		flex: 1 1 auto;

		iframe {
			min-height: 100%;
			min-width: 100%;
		}
	}

	&__title {
		font-size: 18px;
		font-weight: 700;
		line-height: 150%;
	}

	&__body {
		height: 100%;
		max-height: 110px;
		padding: 16px;
		border: 1px solid #E5E8ED;
		border-top: 0;
	}

}
</style>