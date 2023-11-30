<template>
    <section>
        <h2>Образование</h2>

        <article>
            <div class="purple-wrapper">
                <div class="rhomb small blue"></div>
                <div class="rhomb purple"></div>
                <div class="rhomb small yellow"></div>
            </div>
            <h4>Interface Design: Web & Mobile</h4>
            <p>IT-Academy, 2020</p>
        </article>

        <article>
            <div class="rhomb yellow"></div>
            <h4>Fundamentals of Usability</h4>
            <p>Skillshare, Oct 2018</p>
        </article>

        <article>
            <div class="rhomb pink"></div>
            <h4>CG Artist</h4>
            <p>Polygon CG School,<br />May-Sep 2017</p>
        </article>

        <article>
            <div class="rhomb light-blue"></div>
            <h4 class="h4-more">Graphic Design</h4>
            <p>
                Belarusian State Academy of Arts,<br />2015 - 2017 Postgraduate
                Diploma
            </p>
        </article>

        <article>
            <div class="rhomb orange"></div>
            <h4 class="h4-more">SEO Specialist</h4>
            <p>ARTOX Media,<br />Jun-Aug 2012</p>
        </article>

        <article>
            <div class="rhomb green"></div>
            <h4>Information Technology Software</h4>
            <p>
                Belarusian State University of Informatics and Radioelectronics,
                2011 - 2015<br />Bachelor&#39;s degree
            </p>
            <p>
                Polotsk State Economic College, 2007 - 2011 Associate&#39;s
                degree
            </p>
        </article>

        <img :src="line" alt="" />
    </section>
</template>

<script setup>
import line from '@/assets/images/lineEducation.svg';
</script>

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: calc(40px * 100vw / 375px);

    h2 {
        font-size: calc(20px * 100vw / 375px);
        font-weight: 700;
        width: 100%;
    }

    article {
        margin-top: calc(26px * 100vw / 375px);
        width: calc(157px * 100vw / 375px);
        max-width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        z-index: 0;

        &:nth-of-type(1) {
            margin-top: calc(22px * 100vw / 375px);
        }
        &:nth-of-type(2) {
            margin-top: calc(22px * 100vw / 375px);
        }

        .rhomb {
            width: calc(28px * 100vw / 375px);
            height: calc(28px * 100vw / 375px);
            transform: rotate(45deg);
            border-width: calc(4px * 100vw / 375px);
            border-style: solid;
            border-radius: calc(8px * 100vw / 375px);
            border-color: transparent;
        }

        .purple-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .purple {
                border-color: #ccc9fd;
                background: linear-gradient(45deg, #afaafe 50%, #928cf8 50%);
                width: calc(29.96px * 100vw / 375px);
                height: calc(29.96px * 100vw / 375px);
                margin-left: calc(2px * 100vw / 375px);
            }

            .blue {
                width: calc(17.7px * 100vw / 375px);
                height: calc(17.7px * 100vw / 375px);
                border-color: #c0f0ff;
                border-style: solid;
                background: linear-gradient(45deg, #7ccbfc 50%, #48bdf1 50%);
                border-width: calc(3px * 100vw / 375px);
                border-radius: calc(6px * 100vw / 375px);
                z-index: -1;
                transform: translateX(calc(5px * 100vw / 375px))
                    translateY(calc(-1px * 100vw / 375px)) rotate(45deg);
            }
            .yellow {
                width: calc(17.98px * 100vw / 375px);
                height: calc(17.98px * 100vw / 375px);
                border-color: #fff3b5;
                border-style: solid;
                background: linear-gradient(45deg, #ffef9d 50%, #ffcf41 50%);
                border-width: calc(3px * 100vw / 375px);
                border-radius: calc(6px * 100vw / 375px);
                z-index: -1;
                transform: translateX(calc(-5px * 100vw / 375px))
                    translateY(calc(-1px * 100vw / 375px)) rotate(45deg);
            }
        }

        .yellow {
            width: calc(29.94px * 100vw / 375px);
            height: calc(29.94px * 100vw / 375px);
            border-color: #fff3b5;
            background: linear-gradient(45deg, #ffe975 50%, #ffcf41 50%);
        }
        .pink {
            width: calc(28.05px * 100vw / 375px);
            height: calc(28.05px * 100vw / 375px);
            border-color: #ff99be;
            background: linear-gradient(45deg, #fe74a6 50%, #ee5087 50%);
        }
        .light-blue {
            width: calc(28.04px * 100vw / 375px);
            height: calc(28.04px * 100vw / 375px);
            border-color: #c0f0ff;
            background: linear-gradient(45deg, #79cafb 50%, #4bbef2 50%);
        }
        .orange {
            border-color: #ffd5b4;
            background: linear-gradient(45deg, #ffbc89 50%, #ffa25a 50%);
        }
        .green {
            border-color: #7cf5d2;
            background: linear-gradient(45deg, #66dfbc 50%, #3dc39b 50%);
        }

        h4 {
            margin-top: calc(12px * 100vw / 375px);
            font-size: calc(14px * 100vw / 375px);
            font-weight: 700;
            line-height: 140%;
            text-wrap: balance;
        }
        &:nth-of-type(6) h4 {
            text-wrap: unset;
        }

        p {
            margin-top: calc(5px * 100vw / 375px);
            font-size: calc(14px * 100vw / 375px);
            font-weight: 400;
            line-height: 143%;
        }
    }

    img {
        width: calc(369px * 100vw / 375px);
        margin-top: calc(-12px * 100vw / 375px);
        margin-left: calc(-19px * 100vw / 375px);
    }
}

@container (width > 810px) {
    section {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: calc(-66px * 100cqw / 1140px);
        margin-right: calc(1px * 100cqw / 1140px);
        margin-left: auto;

        h2 {
            font-size: calc(24px * 100cqw / 1140px);
            width: fit-content;
        }

        article {
            margin-top: calc(35px * 100cqw / 1140px);
            width: calc(269px * 100cqw / 1140px);

            &:nth-of-type(1) {
                margin-top: calc(38px * 100cqw / 1140px);
            }
            &:nth-of-type(2) {
                margin-top: calc(36px * 100cqw / 1140px);
            }

            .rhomb {
                width: calc(30px * 100cqw / 1140px);
                height: calc(30px * 100cqw / 1140px);
            }

            .purple-wrapper {
                margin-top: calc(0px * 100cqw / 1140px);
                margin-left: calc(-5px * 100cqw / 1140px);
                .purple {
                    width: calc(30px * 100cqw / 1140px);
                    height: calc(30px * 100cqw / 1140px);
                    border-width: calc(4px * 100cqw / 1140px);
                    border-radius: calc(8px * 100cqw / 1140px);
                }
                .blue {
                    width: calc(17.5px * 100cqw / 1140px);
                    height: calc(17.5px * 100cqw / 1140px);
                    border-width: calc(3px * 100cqw / 1140px);
                    border-radius: calc(6px * 100cqw / 1140px);
                    transform: translateX(calc(11px * 100cqw / 1140px))
                        translateY(calc(-1px * 100cqw / 1140px)) rotate(45deg);
                }
                .yellow {
                    width: calc(17.5px * 100cqw / 1140px);
                    height: calc(17.5px * 100cqw / 1140px);
                    border-width: calc(3px * 100cqw / 1140px);
                    border-radius: calc(6px * 100cqw / 1140px);
                    transform: translateX(calc(-3px * 100cqw / 1140px))
                        translateY(calc(-1px * 100cqw / 1140px)) rotate(45deg);
                }
            }

            .rhomb {
                border-width: calc(4px * 100cqw / 1140px);
                border-radius: calc(8px * 100cqw / 1140px);
                width: calc(28px * 100cqw / 1140px);
                height: calc(28px * 100cqw / 1140px);
            }
            .yellow {
                width: calc(30px * 100cqw / 1140px);
                height: calc(30px * 100cqw / 1140px);
            }

            h4 {
                margin-top: calc(11px * 100cqw / 1140px);
                font-size: calc(14px * 100cqw / 1140px);
                width: calc(150px * 100cqw / 1140px);
                line-height: 143%;
            }
            .h4-more {
                margin-top: calc(12px * 100cqw / 1140px);
            }

            p {
                margin-top: calc(5px * 100cqw / 1140px);
                font-size: calc(14px * 100cqw / 1140px);
                width: calc(150px * 100cqw / 1140px);
                line-height: 143%;
            }
        }

        img {
            display: none;
        }
    }
}
</style>
