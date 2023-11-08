<script setup>
import Grade from '../components/Grade.vue'
const lessons = [
	{ href: 'https://www.youtube.com/embed/7-VijZ9HD74?si=uEpQwQY7WAeR5anT', title: 'Объекты окружающего мира'},
	{ href: 'https://www.youtube.com/embed/aN50h5VuRD8?si=2TxrBPjfV4rOQnn8', title: 'Файлы и папки Размер файла'},
	{ href: 'https://www.youtube.com/embed/rXlViWN6goU?si=7SA8XK6TRsHRv3Zp', title: 'Объекты операционной системы'},
	{ href: 'https://www.youtube.com/embed/x0QYTHFa0L8?si=_XAf3IMR-Wvkf22f', title: 'Разнообразие отношений объектов и их множ Отношения между множ'},
	{ href: 'https://www.youtube.com/embed/Lt2UFA07IZY?si=n87tdEheDW1tQ6cu', title: 'Отношение ВХОДИТ В СОСТАВ'},
	{ href: 'https://www.youtube.com/embed/A2jRuhnTf_I?si=o8VHsxQYKPvNx_Iu', title: 'Разновидности объектов и их классификация'},
	{ href: 'https://www.youtube.com/embed/K_7OaO9Lyxg?si=t0TPKMFBqS3NAmsD', title: 'Классификация компьютерных объектов'},
	{ href: 'https://www.youtube.com/embed/mLXEh0mc_j0?si=R60QDZgu3fRYP-GV', title: 'Разнообразие систем Состав и структура системы'},
	{ href: 'https://www.youtube.com/embed/k930bHTpmEk?si=28qHJ8Gp-6HbMtVw', title: 'Сист и окр среда Сист как ЧЕРН ЯЩИК Создание рис в Microsoft Word'},
	{ href: 'https://www.youtube.com/embed/GzkHuqHu8HA?si=EZFJM6fAixVoPoBR', title: 'Персональный компьютер как система'},
	{ href: 'https://www.youtube.com/embed/t_kyLc_vpEQ?si=xMVF0d534oEwgM4w', title: 'Способы познания окружающего мира Теоретическая часть'},
	{ href: 'https://www.youtube.com/embed/lyoWHZp3U48?si=f_kM8dUsvGrOXKb5', title: 'Способы познания окружающего мира Практическая часть'},
	{ href: 'https://www.youtube.com/embed/boozYo7xapY?si=ooBiqGYC0ohB-LfS', title: 'Понятие как форма мышления Как образуются понятия'},
	{ href: 'https://www.youtube.com/embed/YPAs9ns2Q9M?si=rYQvoAVXZ7ZbYYS5', title: 'Определение понятия'},
	{ href: 'https://www.youtube.com/embed/hpaKnau8pKc?si=cjZAu7kb040CJuh_', title: 'Информационное моделирование как метод познания'},
	{ href: 'https://www.youtube.com/embed/XIhYwOMoPJc?si=evXz41kuXYOs-Fc5', title: 'Знак информац модели Словесн научн художественные описан'},
	{ href: 'https://www.youtube.com/embed/mV2Ij9oHlGw?si=WEwEhFQCHruQsfG7', title: 'Математические модели'},
	{ href: 'https://www.youtube.com/embed/m7Z9nd7cu1U?si=dsO6a0DDDBbnSJL5', title: 'Табличные информационные модели Правила оформления таблиц'},
	{ href: 'https://www.youtube.com/embed/7zqm7weuVqE?si=EEze8I3CebAsDsMe', title: 'Решение логических задач с помощью нескольких таблиц Вычислительные таблицы'},
	{ href: 'https://www.youtube.com/embed/T154RdteJx8?si=BjJs-99vKyo7P439', title: 'Графики и диаграммы'},
	{ href: 'https://www.youtube.com/embed/sMvimHmF3E0?si=XGUOpJG771qmcojr', title: 'Многообразие схем и сферы их представления'},
	{ href: 'https://www.youtube.com/embed/el4bMQnlRdU?si=TynglgdZzkvCwnWQ', title: 'Информационные модели на графах Использование графов при решении задач'},
	{ href: 'https://www.youtube.com/embed/YGC_OzJ3pwY?si=azB5vw9SCwzQAhFq', title: 'Что такое алгоритм'},
	{ href: 'https://www.youtube.com/embed/Qddjc754hFk?si=p3yAcUd2t_tz4fx5', title: 'Исполнители вокруг нас'},
	{ href: 'https://www.youtube.com/embed/gltWvu7Jd2k?si=M8AK5JZZd1win_s_', title: 'Формы записи алгоритмов'},
	{ href: 'https://www.youtube.com/embed/Gyio6i2rv7w?si=-OXwLZnNVjppCz4j', title: 'Линейные алгоритмы'},
	{ href: 'https://www.youtube.com/embed/gg5MyZ3W5bo?si=30yApwCQIJ5E5ZlG', title: 'Алгоритмы с ветвлениями'},
	{ href: 'https://www.youtube.com/embed/7qO6pMVp83Y?si=umKb9YfQrs1G3a26', title: 'Алгоритмы с повторениями'},
	{ href: 'https://www.youtube.com/embed/m3_iD6sm0EQ?si=VHrK9fbxuWZXAx-n', title: 'Исполнитель Чертежник Пример алгоритма управления чертежником'},
	{ href: 'https://www.youtube.com/embed/z8sdM0akVho?si=TJMAc860ISGmHK9c', title: 'Использование вспомогательных алгоритмов'},
	{ href: 'https://www.youtube.com/embed/O6U_w5k0vU0?si=7Tlq1X_BXJmgr102', title: 'Алгоритмы с повторениями для исполнител Чертежник'},
]

const documents = [
	{title: 'Учебник', source: 'https://drive.google.com/file/d/1hOg4UwDQsn_Lvo6rM72_Uf-1ibciifhP/preview'},
	{title: 'Рабочая тетрадь', source: 'https://drive.google.com/file/d/1OQzOGZRvNLdW2epw3IE9OS7Kb4ZO45vb/preview'},
]
</script>

<template>
	<main class='grade'>
		<Grade title='6 класс' :lessons='lessons' :documents='documents'/>
	</main>
</template>

<style lang='scss' scoped>

</style>