<template>
    <section>

        <h2>Навыки</h2>
        
        <article>
            <h4>Adobe Creative Suite</h4>
            <p>Photoshop, Illustrator, InDesign, XD, After Effects</p>
        </article>
        <article>
            <h4>Prototyping</h4>
            <p>Sketch, Figma, InVision, Marvel, Principle, Balsamiq</p>
        </article>
        <article>
            <h4>Additional</h4>
            <p>HTML, CSS, Google Analytics, Keynote, Miro</p>
        </article>
        <article>
            <h4>Languages</h4>
            <p>Conversational English and Native Russian</p>
        </article>

    </section>
</template>

<style scoped lang="scss">
    section {
        display: flex;
        flex-direction: column;
            margin-top: calc(-70px * 100vw / 375px);

        h2 {
            font-size: calc(22px * 100vw / 375px);
            font-weight: 700;
        }

        article {
            margin-top: calc(20px * 100vw / 375px);
            display: flex;
            flex-direction: column;

            h4 {
                font-size: calc(14px * 100vw / 375px);
                font-weight: 700;
            }

            p {
                margin-top: calc(8px * 100vw / 375px);
                margin-bottom: calc(2px * 100vw / 375px);
                font-size: calc(14px * 100vw / 375px);
                font-weight: 400;
            }
        }
    }

    @container  (width > 810px) {
        section {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: calc(-167px * 100cqw / 1140px);

            h2 {
                font-size: calc(24px * 100cqw / 1140px);
                width: 100%;
            }

            article {
                width: calc(270px * 100cqw / 1140px);
                margin-top: calc(29px * 100cqw / 1140px);
                //margin-left: calc(20px * 100cqw / 1140px);

                h4 {
                    font-size: calc(14px * 100cqw / 1140px);
                }

                p {
                    font-size: calc(14px * 100cqw / 1140px);
                    margin-top: calc(7px * 100cqw / 1140px);
                    line-height: 143%
                }
            }
        }
    }
</style>