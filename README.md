# Лендинг Nuxt

Библиотека анимаций [Motion One](https://motion.dev/)

## Container queries

Для того чтобы верстка была была резиновой от 1025px до 1800px, а далее переходила в статику, я использовал контейнерные единицы измерения (cqw)

```bash
# Обернул все компоненты в div с классом container в файле index.vue
# Компонент с прелоадером я не вставил в контейнер, чтобы прелоадер был на весь экран
<template>
    <Preloader />
    <div class="container">
        <ButtonTop />
        <Header />
        <Hero />
        <ExperienceAndEducation />
        <LineAfterEducation />
        <Skills />
        <Hands />
    </div>
</template>

```


```bash
# Чтобы размеры от контейнера работали, определил тип контейнера в CSS

.container {
    container-type: inline-size;
}

# И добавил стили для центрирования и масштабирования
.container {
    container-type: inline-size;
    width: calc(335px * 100% / 375px); // 335px - размер контейнера для смартфонов в макете Figma
    max-width: 1800px;
    margin: 0 auto;
}
```

```bash
# Задал размеры контейнера для декстопов

@media (min-width: 1025px) {
    .container {
        width: calc(1140px * 100% / 1440px);
    }
}

```


```bash
# Так как ширина контейнера 1140px составляет 79.16% от размеров фрейма в 1440px в макете Figma
# То в компонентах для десктопных стилей я использовал @container (width > 810px) потому что 811px = 79.16%
@container  (width > 810px) {
    section {
        display: flex;
    }
}

```
