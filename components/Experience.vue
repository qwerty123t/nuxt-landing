<template>
    <section>
        <h2>Опыт работы</h2>
        <article class="first">
            <time datetime="2019-07">Июль 2019</time>
            <h3>
                Freelance Designer
                <div class="rhomb purple"></div>
                <div class="rhomb yellow"></div>
                <div class="rhomb blue"></div>
            </h3>
            <p>Netherlands, Worldwide</p>
            <p class="duties first">
                Available for a project or job in UX/UI, Visual and Product
                design.
            </p>
            <a href="#">Commercial tryouts</a>
            <a href="#">Personal projects</a>
        </article>

        <article>
            <time datetime="2017-01">Январь 2017 - Сентябрь 2018</time>
            <h3>
                Digital Designer
                <div class="rhomb blue"></div>
                <div class="rhomb pink"></div>
            </h3>
            <div class="company">
                <img :src="jcs" alt="jcs" />

                <div class="company-text">
                    <h4>J Creative Solutions</h4>
                    <p>Digital agency in Minsk, Belarus</p>
                </div>
            </div>
            <p class="duties second">
                Created visuals for digital marketing channels such as social
                media, promo web and online ads. Developed visual language from
                scratch or following the branding guidelines. Designed
                presentations<br />for clients and indoor purposes.
            </p>
            <a href="#">Agency projects</a>
        </article>

        <article>
            <time datetime="2014-03">Март 2014 - Февраль 2017</time>
            <div class="position">
                <h3 class="seo">
                    SEO Specialist → Lead SEO Specialist
                    <div class="rhomb orange"></div>
                    <div class="rhomb blue"></div>
                </h3>
            </div>
            <div class="company">
                <img :src="oz" alt="oz" />
                <div class="company-text">
                    <h4>OZ.by</h4>
                    <p>Online bookstore in Minsk, Belarus</p>
                </div>
            </div>
            <p class="duties">
                Improved website performance and user experience of the biggest
                online bookstore OZ in Belarus, being a part of the marketing
                team,<br />I interpreted Google Analytics data to IT, content
                and marketing colleagues. Advised on tech and content
                optimization strategy, automated processes, provided reports,
                increased organic traffic up to 150%.
            </p>
            <a href="#">Annual company report 2016</a>
        </article>

        <article>
            <time datetime="2012-08">Август 2012 - Ноябрь 2013</time>
            <div class="position">
                <h3>
                    Content Specialist
                    <div class="rhomb orange"></div>
                </h3>
            </div>
            <div class="company">
                <img :src="vek" alt="21vek" />
                <div class="company-text">
                    <h4>21vek.by</h4>
                    <p>E-commerce store in Minsk, Belarus</p>
                </div>
            </div>
            <p class="duties">
                Added and modified the product information, prepared images and
                text for the website, developed categories filters, ensure all
                info is correct in the catalogue with the goal of improving
                online shopper experience.
            </p>
        </article>

        <article>
            <time datetime="2011-08">Август 2011 - Ноябрь 2014</time>
            <div class="position">
                <h3>
                    Software Support Engineer
                    <div class="rhomb green"></div>
                </h3>
            </div>
            <div class="company last">
                <img :src="integral" alt="integral" />
                <div class="company-text">
                    <h4>Integral</h4>
                    <p>Microelectronics factory in Minsk, Belarus</p>
                </div>
            </div>
            <p class="duties">
                Supported retail accounting system LS Trade, troubleshoot
                technical problems.
            </p>
        </article>

        <img id="floatingGuy" :src="float" class="floating-guy" alt="" />
    </section>
</template>

<script setup>
import jcs from '@/assets/images/jcs.jpg';
import oz from '@/assets/images/oz.jpg';
import vek from '@/assets/images/21vek.jpg';
import integral from '@/assets/images/integral.svg';
import float from '@/assets/images/float.png';
import { animate, scroll } from 'motion';

onMounted(() => {
    animateOnScroll();
});

const animateOnScroll = () => {
    const floatingGuy = document.getElementById('floatingGuy');

    scroll(
        animate(
            floatingGuy,
            { 
                transform: ["translateY(0)", "translateY(-10vw)"],
                target: floatingGuy, 
                offset: ["start end", "end end"]  
            },
        )
    );
};
</script>

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: column;
    margin-top: calc(-26.5px * 100vw / 375px);

    h2 {
        font-size: calc(20px * 100vw / 375px);
        font-weight: 700;
    }

    article {
        margin-top: calc(58px * 100vw / 375px);

        time {
            color: #828282;
            font-size: calc(14px * 100vw / 375px);
            display: block;
            margin-top: calc(2px * 100vw / 375px);
        }

        h3 {
            margin-top: calc(8px * 100vw / 375px);
            font-size: calc(14px * 100vw / 375px);
            font-weight: 700;
            position: relative;
            display: inline-block;

            .rhomb {
                position: absolute;
                top: calc(3px * 100vw / 375px);
                right: calc(-22px * 100vw / 375px);
                width: calc(12px * 100vw / 375px);
                aspect-ratio: 1;
                border-radius: calc(2px * 100vw / 375px);
                z-index: 2;
                transform: rotate(45deg);

                &:nth-child(2) {
                    right: calc(-31px * 100vw / 375px);
                    z-index: 1;
                }
                &:nth-child(3) {
                    right: calc(-40px * 100vw / 375px);
                    z-index: 0;
                }
            }
            .purple {
                background: linear-gradient(45deg, #aea9fe 50%, #938df8 50%);
            }
            .yellow {
                background: linear-gradient(45deg, #ffe975 50%, #ffcf41 50%);
            }
            .blue {
                background: linear-gradient(45deg, #77c9fb 50%, #4ebff3 50%);
            }
            .pink {
                background: linear-gradient(45deg, #fe73a5 50%, #ef5389 50%);
            }
            .green {
                background: linear-gradient(45deg, #64ddba 50%, #3fc59d 50%);
            }
            .orange {
                background: linear-gradient(45deg, #ffbb87 50%, #ffa35c 50%);
            }
        }

        p {
            font-size: calc(14px * 100vw / 375px);
            margin-top: calc(8px * 100vw / 375px);
        }

        .duties {
            line-height: 143%;
            margin-top: calc(8px * 100vw / 375px);
        }

        .first {
            line-height: 120%;
        }
        .second {
            margin-top: calc(5px * 100vw / 375px);
        }

        a {
            display: block;
            color: #2f80ed;
            text-decoration: underline;
            text-underline-offset: calc(2px * 100vw / 375px);
            text-decoration-skip-ink: none;
            font-size: calc(14px * 100vw / 375px);
            margin-top: calc(3.8px * 100vw / 375px);
            cursor: pointer;
        }

        .company {
            display: flex;
            margin-top: calc(8px * 100vw / 375px);

            img {
                width: calc(30px * 100vw / 375px);
                height: calc(30px * 100vw / 375px);
                border-radius: 50%;
            }
            .company-text {
                display: flex;
                //flex-direction: column;
                flex-wrap: wrap;
                margin-left: calc(8px * 100vw / 375px);
                margin-top: auto;
                margin-bottom: auto;

                h4 {
                    font-size: calc(14px * 100vw / 375px);
                    font-weight: 700;
                    margin-right: calc(9px * 100vw / 375px);
                }
                p {
                    margin-top: 0;
                }
            }

            &.last {
                width: 102%;
            }
        }
    }

    .first {
        margin-top: calc(18px * 100vw / 375px);
    }

    .floating-guy {
        margin: calc(39px * 100vw / 375px) auto 0 auto;
        width: calc(200px * 100vw / 375px);
    }
}

@container (width > 810px) {
    section {
        position: relative;
        margin-top: calc(-66px * 100cqw / 1140px);

        h2 {
            font-size: calc(24px * 100cqw / 1140px);
            font-weight: 700;
        }

        article {
            margin-top: calc(59px * 100cqw / 1140px);

            time {
                margin-top: calc(0px * 100cqw / 1140px);
                font-size: calc(14px * 100cqw / 1140px);
            }

            h3 {
                margin-top: calc(8.5px * 100cqw / 1140px);
                font-size: calc(14px * 100cqw / 1140px);
                .rhomb {
                    top: calc(3px * 100cqw / 1140px);
                    right: calc(-5.8px * 100vw / 375px);
                    width: calc(12px * 100cqw / 1140px);
                    height: calc(12px * 100cqw / 1140px);
                    border-radius: calc(2px * 100cqw / 1140px);

                    &:nth-child(2) {
                        right: calc(-8.2px * 100vw / 375px);
                    }
                    &:nth-child(3) {
                        right: calc(-10.5px * 100vw / 375px);
                    }
                }
            }
            .seo {
                font-size: calc(14.1px * 100cqw / 1140px);
            }

            p {
                margin-top: calc(8px * 100cqw / 1140px);
                font-size: calc(14px * 100cqw / 1140px);
            }

            .duties {
                margin-top: calc(8px * 100cqw / 1140px);
                width: calc(560px * 100cqw / 1140px);
            }
            .first {
                margin-top: calc(7px * 100cqw / 1140px);
            }
            .second {
                margin-top: calc(9px * 100cqw / 1140px);
            }

            a {
                margin-top: calc(1px * 100cqw / 1140px);
                font-size: calc(14px * 100cqw / 1140px);
                text-underline-offset: calc(2px * 100cqw / 1140px);
                line-height: 130%;
            }

            .company {
                margin-top: calc(8px * 100cqw / 1140px);

                img {
                    width: calc(30px * 100cqw / 1140px);
                    height: calc(30px * 100cqw / 1140px);
                }
                .company-text {
                    margin-left: calc(8px * 100cqw / 1140px);

                    h4 {
                        font-size: calc(14px * 100cqw / 1140px);
                        margin-right: calc(8px * 100cqw / 1140px);
                    }
                    p {
                        margin-top: 0;
                        font-size: calc(14px * 100cqw / 1140px);
                    }
                }
            }
        }

        .first {
            margin-top: calc(29px * 100cqw / 1140px);
        }

        .floating-guy {
            position: absolute;
            top: calc(-1px * 100cqw / 1140px);
            left: calc(464.5px * 100cqw / 1140px);
            margin-top: 0;
            width: calc(500px * 100cqw / 1140px);
        }
    }
}
</style>
