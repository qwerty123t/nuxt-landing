<template>
    <a href="#">Top</a>
</template>


<style scoped lang="scss">
    a {
        position: sticky;
        margin-left: auto;
        top: calc(100lvh - calc(50px * 100vw / 375px));
        //bottom: -20vw;
        right: 0;
        width: calc(30px * 100vw / 375px);
        height: calc(30px * 100vw / 375px);  
        align-self: end;
        background-color: transparent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
    }

    
    @container  (width > 810px) {
        a {
            top: calc(100vh - calc(75px * 100cqw / 1140px));
            top: calc(100lvh - calc(75px * 100cqw / 1140px));
            width: calc(48px * 100cqw / 1140px);
            height: calc(48px * 100cqw / 1140px);
        }
    }
</style>

