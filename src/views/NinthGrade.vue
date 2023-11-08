<script setup>
import Grade from '../components/Grade.vue'
const lessons = [
	{ href: 'https://www.youtube.com/embed/_7H55IE0CLU?si=lPinkxRQhTyPcqUt', title: 'Моделирование как метод познания'},
	{ href: 'https://www.youtube.com/embed/JLWDrNpvN0w?si=v4VnEa1rT1iVTZ7X', title: 'Знаковые модели. Словесные модели.'},
	{ href: 'https://www.youtube.com/embed/fLuhHaaKXy8?si=3hpc9NrQubapzdYO', title: 'Знаковые модели. Математические модели.'},
	{ href: 'https://www.youtube.com/embed/TbgYyzOwUoY?si=bl09Ujoqr3pVUqQD', title: 'Компьютерные математические модели'},
	{ href: 'https://www.youtube.com/embed/0f9Q6BQeI5Y?si=pxtmWVgsWx8dqFBX', title: 'Графическая информация модели. Многообразие графической информационных моделей'},
	{ href: 'https://www.youtube.com/embed/GqbeslnnU6o?si=K8AndgTMYSCEHEhJ', title: 'Графические информационные модели. Графы'},
	{ href: 'https://www.youtube.com/embed/LHfTd1FNAco?si=4hbDp2ekNQ4vcmpq', title: 'Граф информационной модели. Использование графов при решении задач'},
	{ href: 'https://www.youtube.com/embed/vfLcreICIco?si=defBehr-tLq_oAJ-', title: 'Табличные информационные модели'},
	{ href: 'https://www.youtube.com/embed/9iAdlHLTn58?si=7V3LlBbFwqmNnY4b', title: 'База данных как модель предметной области'},
	{ href: 'https://www.youtube.com/embed/Nis9CQpQiHI?si=hstXhNwQky3kGhj9', title: 'Система управления базами данных Microsoft Access'},
	{ href: 'https://www.youtube.com/embed/b4Vh0PGsKFw?si=i9pG30iTgQwQg3zm', title: 'Система управления базами данных OpenOffice org Base'},
	{ href: 'https://www.youtube.com/embed/IVP3CTb70rg?si=eBv_luRAtogstyBI', title: 'Решение задач с помощью компьютера. Этапы решения задачи спомощью компьютера'},
	{ href: 'https://www.youtube.com/embed/lqE_2GW6NsM?si=6sGfVgTkpM2jnGWU', title: 'Решение задач с помощью компьютера. Задача о пути торможения автомобиля'},
	{ href: 'https://www.youtube.com/embed/9kWaCSzWkgI?si=-QFYEwDAJ7KWkFBs', title: 'Одномерные массивы целых чисел'},
	{ href: 'https://www.youtube.com/embed/v3YmCLMubNY?si=_R8JqrU0tjDQMP5j', title: 'Одномерные массивы целых чисел. Вычисление суммы элементов массива'},
	{ href: 'https://www.youtube.com/embed/2oCZJEdOGJA?si=BhjyAY2kp2Kvu1Bi', title: 'Последовательный поиск элементов в массиве'},
	{ href: 'https://www.youtube.com/embed/offmYM2Ig9Q?si=8713jrVvM_93jWBz', title: 'Сортировка массива'},
	{ href: 'https://www.youtube.com/embed/MH3AfXYK99k?si=6Amv4MOYoRPxVYuz', title: 'Конструирование алгоритмов'},
	{ href: 'https://www.youtube.com/embed/qx6pUFiTNgo?si=WOiJy50L_p9g99tB', title: 'Вспомогательные алгоритмы'},
	{ href: 'https://www.youtube.com/embed/UHSauler1UE?si=LWZZLpNYngL2cbBT', title: 'Запись вспомогательных алгоритмов на языке Паскаль. Процедуры'},
	{ href: 'https://www.youtube.com/embed/mrgzUBV_GTM?si=C3z34UGH0exvVd7Z', title: 'Запись вспомогательных алгоритмов на языке Паскаль. Функции'},
	{ href: 'https://www.youtube.com/embed/7ZXQEAokJuE?si=LALZYQj8NAXPdJ3W', title: 'Алгоритмы управления'},
	{ href: 'https://www.youtube.com/embed/rSehvljc9q8?si=TEJM59xx-_FHIRGb', title: 'Электронные таблицы на примере Exсel'},
	{ href: 'https://www.youtube.com/embed/bZ0FunN8yrg?si=TY8kh4N-Dl857Bav', title: 'Электронные таблицы на примере OpenOffice org Calc'},
	{ href: 'https://www.youtube.com/embed/maBVXj686xc?si=EtuFlY3kXTevY-VO', title: 'Организация вычислений в электронных таблицах. Абсолютные и относительные ссылки'},
	{ href: 'https://www.youtube.com/embed/2V1pn_1KB_s?si=5oE1za8E82TbhqCD', title: 'Встроенные функции'},
	{ href: 'https://www.youtube.com/embed/oeB8RwDiNlA?si=D_WY_04Jpy2Ge6Oq', title: 'Логические функции'},
	{ href: 'https://www.youtube.com/embed/OgnKnbKymuw?si=krj_HrAdEv5GBQYI', title: 'Средства анализа и визуализации данных. Сортировка и поиск данных'},
	{ href: 'https://www.youtube.com/embed/3lqAZx6Uulc?si=-p2rILoA4mkI8LeN', title: 'Средства анализа и визуализации данных. Построение диаграмм'},
	{ href: 'https://www.youtube.com/embed/EcoOEeNyniI?si=NHQK9iCMfECld_DP', title: 'Практическая работа'},
	{ href: 'https://www.youtube.com/embed/Z-PPC53Ah4s?si=NXYweNZqTZanNhuK', title: 'Локальные и глобальные компьютерные сети'},
	{ href: 'https://www.youtube.com/embed/mPh8jaHTN7A?si=htEFudAC6GXfUzW1', title: 'Как устроен Интернет. IP адрес компьютера'},
	{ href: 'https://www.youtube.com/embed/IOiv9DIpOqk?si=sQcD9mOlu-wE5kLX', title: 'Доменная система имён. Протоколы передачи данных'},
	{ href: 'https://www.youtube.com/embed/uRtOiu0B-I4?si=RON8QofSjGaEbUSg', title: 'Всемирная паутина. Файловые архивы'},
	{ href: 'https://www.youtube.com/embed/DnxYlFQDZ_Q?si=cAtN9mMWHzUTOXGG', title: 'Электронная почта. Сетевое коллективное взаимодействие. Сетевой этикет'},
	{ href: 'https://www.youtube.com/embed/3TxtxF8cpSw?si=fZi3GFXwTJs98j4g', title: 'Технологии создания сайта'},
	{ href: 'https://www.youtube.com/embed/gXxDikTYd6o?si=U61Wr6N81KN_JvNt', title: 'Содержание и структура сайта'},
	{ href: 'https://www.youtube.com/embed/edfYEXbyfys?si=0gI6m2Lixbt427zU', title: 'Оформление сайта'},
	{ href: 'https://www.youtube.com/embed/DpxnP8aYvW4?si=F7So8hVZD7_x_1zd', title: 'Размещение сайта в Интернете'},
	{ href: 'https://www.youtube.com/embed/cB4jar1a_Iw?si=rpkBozBTrdSLcAIx', title: 'Обобщающий урок по разделам курса информатики за 9 класс'},
]

const documents = [
	{title: 'Учебник', source: 'https://drive.google.com/file/d/1-4nIYuH0WTqC8ij_oPusP5ubuOZFivIE/preview'},
	{title: 'Рабочая тетрадь', source: 'https://drive.google.com/file/d/1HteWpSgCKhC_Ui7GRYV8HkhSY7LXfHBk/preview'},
]
</script>

<template>
	<main class='grade'>
		<Grade title='9 класс' :lessons='lessons' :documents='documents'/>
	</main>
</template>

<style lang='scss' scoped>

</style>