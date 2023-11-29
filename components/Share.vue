<template>
    <section>
        <div class="text">
            <p class="name">Имя кандидата, Желаемая позиция</p>
            <p class="description">Как разработчик, я высоко ценю способность воплотить видение дизайнера в жизнь, что считаю очень полезным для бизнеса. Я получаю огромное удовлетворение, наблюдая за работой от идеи до дизайна, особенно когда она появляется в руках пользователя. Я считаю, что ориентированные на пользователя решения являются наиболее ценными цифровыми ресурсами будущего.</p>
        </div>
        <img :src="shareImg" class="share-img" alt="" />
    </section>
</template>

<script setup>
    import shareImg from '@/assets/images/share.png';
</script>


<style scoped lang="scss">
    section {
        display: flex;
        flex-direction: column;

        .text {
            margin-top: calc(30px * 100vw / 375px);
            display: flex;
            flex-direction: column;

            .name {
                font-size: calc(28px * 100vw / 375px);
                font-weight: 700;
                line-height: 140%;
            }
            .description {
                margin-top: calc(20px * 100vw / 375px);
                font-size: calc(14px * 100vw / 375px);
                font-weight: 400;
                line-height: 143%;
            }
        }

        img {
            margin: auto;
            max-width: 800px;
        }
    }

    
    @container  (width > 810px) {

        section {
            margin-top: calc(0px * 100cqw / 968px);
            min-height: calc(504px * 100cqw / 968px);
            flex-direction: row;

            .text {
                .name {
                    font-size: calc(36px * 100cqw / 968px);
                    max-width: calc(350px * 100cqw / 968px);
                }

                .description {
                    margin-top: calc(30px * 100cqw / 968px);
                    font-size: calc(14px * 100cqw / 968px);
                    max-width: calc(560px * 100cqw / 968px);
                }
            }
            img {
                margin: auto 0 0 0;
                width: calc(400px * 100cqw / 968px);
                max-width: 600px;
            }
        }

    }
</style>