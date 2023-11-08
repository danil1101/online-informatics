<script setup>
import Grade from '../components/Grade.vue'
const lessons = [
	{ href: 'https://www.youtube.com/embed/-2sH6X3iRD8?si=PYYoLXVnMl513nOw', title: 'Информация и её свойства'},
	{ href: 'https://www.youtube.com/embed/mtrSdLNFfi4?si=BS6ubmNKZDeLVhM5', title: 'Понятие информационного процесса Сбор и обработка информации'},
	{ href: 'https://www.youtube.com/embed/-9fpHo_9JCo?si=ntKg01KKfzQBClAg', title: 'Хранение и передача информации Информационные процессы в живой природе'},
	{ href: 'https://www.youtube.com/embed/_-gy5Q-VFSA?si=OcILw84yld0a1FnK', title: 'Что такое WWW'},
	{ href: 'https://www.youtube.com/embed/mpNu2bi5tvM?si=fMVUv-OkK2eDdnTm', title: 'Поисковые системы Поисковые запросы Полезные адреса Всемирной паутины'},
	{ href: 'https://www.youtube.com/embed/zj8PKTWceJA?si=hu8zuaqazviKLMel', title: 'Знаки и знаковые системы Язык как знаковая система'},
	{ href: 'https://www.youtube.com/embed/FgdyYrb5OH4?si=tJQ1yh67Cv4xj61R', title: 'Естественные и формальные языки Формы представления информации'},
	{ href: 'https://www.youtube.com/embed/VLxEFf1qmeY?si=hD0edAsylR77i6w2', title: 'Преобразование информации из непрерывной формы в дискретную Двоичное кодирование'},
	{ href: 'https://www.youtube.com/embed/EC_a0Xj2DSE?si=1pQBQXIbDr23xp6l', title: 'Универсальность двоичного кодирования Равномерные и неравномерные коды'},
	{ href: 'https://www.youtube.com/embed/bhWRCR-SXDk?si=PMCkvadrxKqUyR9R', title: 'Измерение информации'},
	{ href: 'https://www.youtube.com/embed/NDGmfxNJdwc?si=VrMofd9So8kqAlx_', title: 'Компьютер'},
	{ href: 'https://www.youtube.com/embed/sJ8ZReZbEvs?si=7oiIM6rwEZNYS1ag', title: 'Устройства компьютера и их функции'},
	{ href: 'https://www.youtube.com/embed/aLRRiUlkqPM?si=4cvUF8vMC5Uo7dQa', title: 'Персональный компьютер'},
	{ href: 'https://www.youtube.com/embed/gKKB4P563fY?si=kQypI9D3xGIh8eFy', title: 'Понятие программного обеспечения компьютера Системное программное обеспечение'},
	{ href: 'https://www.youtube.com/embed/KcnR1J4TpJ4?si=GhF9NprtzfcsTjyZ', title: 'Системы программирования Прикладное программное обеспечение'},
	{ href: 'https://www.youtube.com/embed/3j9x1dJkv7I?si=8Dc82oGvl6p_65ux', title: 'Правовые нормы использования программного обеспечения'},
	{ href: 'https://www.youtube.com/embed/XCwFNfU-mkw?si=RK2ojJdKd4zuUA9b', title: 'Логические имена устройств внешней памяти Файл Каталоги'},
	{ href: 'https://www.youtube.com/embed/BLDsg7w2blw?si=KbojVa8dTG3NHph9', title: 'Файловая структура диска Полное имя файла Работа с файлами'},
	{ href: 'https://www.youtube.com/embed/6pN50-xkbJA?si=VSL6bAFoyKCdd4_x', title: 'Пользовательский интерфейс и его разновидности'},
	{ href: 'https://www.youtube.com/embed/iLla2YitXKQ?si=a5XdHn9S8ia8IG9y', title: 'Основные элементы графического интерфейса'},
	{ href: 'https://www.youtube.com/embed/X1OI0C8ofbM?si=g1dT1fHuGC0MdddE', title: 'Организация индивидуального информационного пространства'},
	{ href: 'https://www.youtube.com/embed/mlVeP9PAPjE?si=t_AeND0eK7q0Fx04', title: 'Пространственное разрешение монитора Компьютерное представление цвета Видеосистема персонально'},
	{ href: 'https://www.youtube.com/embed/ZvOZGwZi_h8?si=eJI96q1gezhNixO8', title: 'Сферы применения компьютерной графики. Способы создания цифровых графических объектов'},
	{ href: 'https://www.youtube.com/embed/I5wE4XTecXs?si=9PMnc_Q6y-aZQKac', title: 'Растровая и векторная графика Форматы графических файлов'},
	{ href: 'https://www.youtube.com/embed/lAifiD26m8s?si=unf8LQkQKkUPrw5m', title: 'Интерфейс графических редакторов'},
	{ href: 'https://www.youtube.com/embed/zjrrtYjqzTs?si=EEWW6aIJHiZ45PDT', title: 'Некоторые приёмы работы в растровом графическом редакторе'},
	{ href: 'https://www.youtube.com/embed/sr2Py79XWTY?si=sF4c7dogVTmub_eD', title: 'Особенности создания изображений в векторных графических редакторах'},
	{ href: 'https://www.youtube.com/embed/IlmsdtBBiZY?si=mp84vrTFtVC-P5jk', title: 'Текст док т и его структура Технолог подготовки текст док тов'},
	{ href: 'https://www.youtube.com/embed/AsQJShWxWNU?si=XNS3k6wvj0OJA9LS', title: 'Компьютерные инструменты создания текстовых документов'},
]

const documents = [
	{title: 'Учебник', source: 'https://drive.google.com/file/d/1-9YZw5M7WLycGKpXcl-GzDwFzxru6ZzW/preview'},
	{title: 'Рабочая тетрадь', source: 'https://drive.google.com/file/d/1F3i0FKFA3Fo8iZHbaq5sdTBqudVn7rbP/preview'},
]
</script>

<template>
	<main class='grade'>
		<Grade title='7 класс' :lessons='lessons' :documents='documents'/>
	</main>
</template>

<style lang='scss' scoped>

</style>