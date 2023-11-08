<script setup>
import Grade from '../components/Grade.vue'
const lessons = [
	{ href: 'https://www.youtube.com/embed/vbHq_5faMaM?si=HFNJDkOxOj5De8Bk', title: 'Общие сведения о системах счисления  Двоичная система счисления'},
	{ href: 'https://www.youtube.com/embed/LX18akmRqgk?si=Jgz1bq4UNzF0j48O', title: 'Восьм. и шестнадц. сист. счисл. Прав. перевода цел. дес. чисел в сист. счисл. с основ. q'},
	{ href: 'https://www.youtube.com/embed/MuDE5YqR4ic?si=RgCgmUEWYDJVo17u', title: 'Двоичная арифметика. «Компьютерные» системы счисления'},
	{ href: 'https://www.youtube.com/embed/IIK1bChskWw?si=ZpK2vjzu6p2l4HF-', title: 'Представление чисел в компьютере'},
	{ href: 'https://www.youtube.com/embed/mnb6PWeTAfk?si=yQv_Hk-7l6-122aH', title: 'Элементы алгебры логики. Высказывание'},
	{ href: 'https://www.youtube.com/embed/yuVnJ7tBct8?si=-r004BHhxEHOXLxB', title: 'Элементы алгебры логики. Логические операции'},
	{ href: 'https://www.youtube.com/embed/8ClvGrOdTaY?si=n0PHSKjBtxTIEVuS', title: 'Построен. табл. истинности для логич. выражен. Св-ва логич. операций'},
	{ href: 'https://www.youtube.com/embed/Z4R81QO2QVA?si=LDft6jPkAtc4QoVw', title: 'Решение логических задач'},
	{ href: 'https://www.youtube.com/embed/5L-wdXdpDPg?si=zME0FVRzI69EIFdz', title: 'Логические элементы'},
	{ href: 'https://www.youtube.com/embed/UO4yJqQsZaw?si=LCWtge-NrtbMlO9D', title: 'Понятие алгоритма. Исполнитель алгоритма'},
	{ href: 'https://www.youtube.com/embed/hg_CBR05QW8?si=a9tBbfi3TU-p8wX6', title: 'Свойства алгоритма. Возможность автоматизации деятельности человека'},
	{ href: 'https://www.youtube.com/embed/CEx7DZMhGrw?si=Ib5t7KU_wPvj21Jm', title: 'Способы записи алгоритмов. Словесные способы записи алгоритма. Блок-схемы'},
	{ href: 'https://www.youtube.com/embed/RIk2i0cLEJU?si=oFHG9uJejsuv4u8H', title: 'Алгоритмические языки'},
	{ href: 'https://www.youtube.com/embed/48o2H39wqhk?si=9cak-J5eviJxLJt7', title: 'Объекты алгоритмов. Величины'},
	{ href: 'https://www.youtube.com/embed/UKarboU8BBs?si=crd5fuBXdkr84MTo', title: 'Объекты алгоритмов. Выражения'},
	{ href: 'https://www.youtube.com/embed/PHMIMia0hdw?si=BCg_GtEdoFzj36TJ', title: 'Объекты алгоритмов. Команда присваивания'},
	{ href: 'https://www.youtube.com/embed/unGR9R_QPmY?si=O6ZCYbMqAVlUDbnT', title: 'Объекты алгоритмов. Табличные величины'},
	{ href: 'https://www.youtube.com/embed/Yqa-igyoSEs?si=z1XM2xD1bZ2ngQs4', title: 'Основные алгоритмические конструкции. Следование'},
	{ href: 'https://www.youtube.com/embed/6GgYsKR8FSc?si=zKkofrpNK032929B', title: 'Основные алгоритмические конструкции. Ветвление'},
	{ href: 'https://www.youtube.com/embed/qbkKNuToViM?si=UGUpJASBEEzI9DWo', title: 'Основные алгоритмические конструкции. Повторение'},
	{ href: 'https://www.youtube.com/embed/ZXowIQ1DyTM?si=t6wJauwWefw2Buio', title: 'Общ. сведен. о яз. прогр. Паскаль. Алфав. и словарь яз. Типы данных'},
	{ href: 'https://www.youtube.com/embed/XEvoz4SNkRE?si=dzy6h1xHMVn3sSo8', title: 'Структура программы на языке Паскаль. Оператор присваивания'},
	{ href: 'https://www.youtube.com/embed/tw_k8_lmGV8?si=Rl1HEJMDMTfv4LOE', title: 'Организация ввода и вывода данных'},
	{ href: 'https://www.youtube.com/embed/be5VnLsxCQk?si=i4W56Fp6Lk0JE7P6', title: 'Программирование линейных алгоритмов. Числовые типы данных. Целочисленный тип данных'},
	{ href: 'https://www.youtube.com/embed/LotQ7YEcivE?si=wDgsm9o8ktMgE6vq', title: 'Пр-е линейных алг-в. Символьный и строковый типы данных. Логический тип данных'},
	{ href: 'https://www.youtube.com/embed/iix86BSY-Lg?si=8z7iS42keueV0L0S', title: 'Пр-е разветв. алгоритмов. Простой и составной условные операторы'},
	{ href: 'https://www.youtube.com/embed/gYh0uZPJ4fA?si=IBmeUDFoLvQSIBRs', title: 'Программирование разветвляющихся алгоритмов. Многообразие способов записи ветвлений'},
	{ href: 'https://www.youtube.com/embed/lR8SBl-8084?si=oJeal6lroteZ4PpA', title: 'Прогр-ие циклических алгоритмов. Программирование циклов с заданным условием продолжения работы'},
	{ href: 'https://www.youtube.com/embed/oxaiYLG5r5o?si=80e0nx3GuC2kCbAp', title: 'Прог-ие циклических алгоритмов. Программирование циклов с заданным условием окончанияния работы'},
	{ href: 'https://www.youtube.com/embed/EOqbv-mj90Q?si=oU5TxSkwzk5zs-tK', title: 'Программирование циклических алгоритмов. Программирование циклов с заданным числом повторений'},
	{ href: 'https://www.youtube.com/embed/C0MdIrAI778?si=TgnJCY4bD8UOGE2w', title: 'Различные варианты программирования циклического алгоритма'},
]

const documents = [
	{title: 'Учебник', source: 'https://drive.google.com/file/d/1Is43Ym3u31LF4ryD70lmxzyeBSgXjmcH/preview'},
	{title: 'Рабочая тетрадь', source: 'https://drive.google.com/file/d/1UAqaCWTbx0MhEfJheAI4iQcEo7M3kh-d/preview'},
]
</script>

<template>
	<main class='grade'>
		<Grade title='8 класс' :lessons='lessons' :documents='documents'/>
	</main>
</template>

<style lang='scss' scoped>

</style>