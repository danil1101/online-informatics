<script setup>
import Grade from '../components/Grade.vue'
const lessons = [
	{ href: 'https://www.youtube.com/embed/Vyag1uXmEsg?si=whwHm_wlIocegluV', title: 'Техника безопасности'},
	{ href: 'https://www.youtube.com/embed/vNQXvB-Er0Y?si=5umAIAzeLhplZZXZ', title: 'Информация вокруг нас'},
	{ href: 'https://www.youtube.com/embed/SB1JU_PMdCI?si=0qOvHntQG-WAp52m', title: 'Компьютер'},
	{ href: 'https://www.youtube.com/embed/vRHfHXXG58g?si=_AR8A8VSe6EelMNS', title: 'Ввод информации в память компьютера'},
	{ href: 'https://www.youtube.com/embed/sVKfoDHKYms?si=WTT3LXUsABWtFW50', title: 'Управление компьютером'},
	{ href: '', title: 'Хранение информации'},
	{ href: 'https://www.youtube.com/embed/NAhsbNh3xyA?si=tB-fJzEY0jrxMwRU', title: 'Передача информации'},
	{ href: 'https://www.youtube.com/embed/k90gFEdxpSU?si=zR1RGUFMZXjTYkOx', title: 'Электронная почта'},
	{ href: 'https://www.youtube.com/embed/Oen-xMxy4MY?si=n7JsRfNddG7vAQYt', title: 'Кодирование информации'},
	{ href: 'https://www.youtube.com/embed/ZNxhst1og9U?si=4hgSqRbBEXqdeuf-', title: 'Метод координат'},
	{ href: 'https://www.youtube.com/embed/ggf5AdbXW9U?si=S_2B5RvhG7krcx0W', title: 'Текст форма представления информации'},
	{ href: 'https://www.youtube.com/embed/iJQrYfttW7A?si=DzzRXj7nRW_9sx1O', title: 'Ввод текста'},
	{ href: 'https://www.youtube.com/embed/iFhK8PlXeuA?si=FlO_ejg6RWdluE0a', title: 'Редактирование текста'},
	{ href: 'https://www.youtube.com/embed/YKrIXOQFknE?si=KSi_ZhJHm7e5mWkg', title: 'Работа с фрагментами текста'},
	{ href: 'https://www.youtube.com/embed/oFcHqgKoHuQ?si=-Pngz8z4ajVXsWTP', title: 'Форматирование текста'},
	{ href: 'https://www.youtube.com/embed/8MlKM3byFgQ?si=jtKU1bnSqJEeh9OL', title: 'Создаем таблицы'},
	{ href: 'https://www.youtube.com/embed/uVGyD7-FHSY?si=ZHlaw0WmdNIt2aLp', title: 'Табличное решение логических задач'},
	{ href: 'https://www.youtube.com/embed/lcDwAjkZtww?si=apUh3YLvE7zTy4e7', title: 'От текста к рисунку, от рисунка к схеме'},
	{ href: 'https://www.youtube.com/embed/UshA0mimC_w?si=TPLp73aLX2WKw2I1', title: 'Построение диаграмм'},
	{ href: 'https://www.youtube.com/embed/px4ytq_VzRk?si=fzTJ8ilMxcIySrB0', title: 'Графический редактор Paint'},
	{ href: 'https://www.youtube.com/embed/gJePAlgZcOY?si=yAiuVwSVt3pyI43h', title: 'Работа с графическими фрагментами'},
	{ href: 'https://www.youtube.com/embed/D2i6n24AbM8?si=TqmmqYthVpqAZEXl', title: 'Работа в графическом редакторе'},
	{ href: 'https://www.youtube.com/embed/ZGAxLYB_5_M?si=OYKDrtnksqnR6IGm', title: 'Разнообразие задач обработки информации. Систематизация'},
	{ href: 'https://www.youtube.com/embed/2CGV2KO6T1Q?si=2NQf8_55EbJWrrxa', title: 'Списки способ упорядочивания информации'},
	{ href: 'https://www.youtube.com/embed/XNlMg7j184s?si=f86_PGbOh-5Pvoxx', title: 'Поиск информации'},
	{ href: 'https://www.youtube.com/embed/F9PWxzflyw0?si=3KIztcPJ4J9tuj3H', title: 'Кодирование как изменение формы представления информации'},
	{ href: 'https://www.youtube.com/embed/OaVAvlX1Uv0?si=_cXzHXsZt5cuFq8W', title: 'Преобразование информации по заданным правилам'},
	{ href: 'https://www.youtube.com/embed/ht8wxc-tdIE?si=dIYSftXjY8IiY49f', title: 'Преобразование информации путём рассуждений'},
	{ href: 'https://www.youtube.com/embed/xLj-MjeUviI?si=ixUDLHphPCSRYjAD', title: 'Разработка плана действий и его запись'},
	{ href: 'https://www.youtube.com/embed/sZDmGSjIuy8?si=U4eu_u5WPBjKpGE-', title: 'Запись плана действий в табличной форме'},
	{ href: 'https://www.youtube.com/embed/e3FPhGHSvsU?si=8xIHjHgVHsXHVqJf', title: 'Создание движущихся изображений'},
	{ href: 'https://www.youtube.com/embed/EHrvvwi9-Sw?si=A7uiqy8RPzG4DQfj', title: 'Создание анимации'},
]

const documents = [
	{title: 'Учебник', source: 'https://drive.google.com/file/d/1qRXWmt7Yw8JrVuZmtwFckIcm9Nvr-62P/preview'},
	{title: 'Рабочая тетрадь', source: 'https://drive.google.com/file/d/12ppimK9E4A_4hLsxKQNsy9wYwXZhh4Lo/preview'},
]
</script>

<template>
	<main class='grade'>
		<Grade title='5 класс' :lessons='lessons' :documents='documents'/>
	</main>
</template>

<style lang='scss' scoped>

</style>