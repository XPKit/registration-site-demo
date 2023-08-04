<script>
import animatable from '../../mixins/animatable.js'

export default {
    name: 'Banner',
    mounted() {
        this.animateElements(this.$el.querySelectorAll('.animatable'));
    },
    mixins: [animatable]
}
</script>

<template>
    <section>
        <div class="banner">
            <div class="banner-text animatable">

                <h1 class="banner-title">Landing Page Title</h1>
                <p class="banner-subtitle">Landing Page Subtitle</p>
                <img class="banner-arrow" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMjg0LjkyOSAyODQuOTI5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOTI5IDI4NC45Mjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMTM1Ljg5OSwxNjcuODc3YzEuOTAyLDEuOTAyLDQuMDkzLDIuODUxLDYuNTY3LDIuODUxczQuNjYxLTAuOTQ4LDYuNTYyLTIuODUxTDI4Mi4wODIsMzQuODI5ICAgIGMxLjkwMi0xLjkwMywyLjg0Ny00LjA5MywyLjg0Ny02LjU2N3MtMC45NTEtNC42NjUtMi44NDctNi41NjdMMjY3LjgwOCw3LjQxN2MtMS45MDItMS45MDMtNC4wOTMtMi44NTMtNi41Ny0yLjg1MyAgICBjLTIuNDcxLDAtNC42NjEsMC45NS02LjU2MywyLjg1M0wxNDIuNDY2LDExOS42MjJMMzAuMjYyLDcuNDE3Yy0xLjkwMy0xLjkwMy00LjA5My0yLjg1My02LjU2Ny0yLjg1MyAgICBjLTIuNDc1LDAtNC42NjUsMC45NS02LjU2NywyLjg1M0wyLjg1NiwyMS42OTVDMC45NSwyMy41OTcsMCwyNS43ODQsMCwyOC4yNjJjMCwyLjQ3OCwwLjk1Myw0LjY2NSwyLjg1Niw2LjU2N0wxMzUuODk5LDE2Ny44Nzd6IiBmaWxsPSIjZmZmZmZmIi8+CgkJPHBhdGggZD0iTTI2Ny44MDgsMTE3LjA1M2MtMS45MDItMS45MDMtNC4wOTMtMi44NTMtNi41Ny0yLjg1M2MtMi40NzEsMC00LjY2MSwwLjk1LTYuNTYzLDIuODUzTDE0Mi40NjYsMjI5LjI1N0wzMC4yNjIsMTE3LjA1ICAgIGMtMS45MDMtMS45MDMtNC4wOTMtMi44NTMtNi41NjctMi44NTNjLTIuNDc1LDAtNC42NjUsMC45NS02LjU2NywyLjg1M0wyLjg1NiwxMzEuMzI3QzAuOTUsMTMzLjIzLDAsMTM1LjQyLDAsMTM3Ljg5MyAgICBjMCwyLjQ3NCwwLjk1Myw0LjY2NSwyLjg1Niw2LjU3bDEzMy4wNDMsMTMzLjA0NmMxLjkwMiwxLjkwMyw0LjA5MywyLjg1NCw2LjU2NywyLjg1NHM0LjY2MS0wLjk1MSw2LjU2Mi0yLjg1NGwxMzMuMDU0LTEzMy4wNDYgICAgYzEuOTAyLTEuOTAzLDIuODQ3LTQuMDkzLDIuODQ3LTYuNTY1YzAtMi40NzQtMC45NTEtNC42NjEtMi44NDctNi41NjdMMjY3LjgwOCwxMTcuMDUzeiIgZmlsbD0iI2ZmZmZmZiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="><!-- end ngIf: $ctrl.scrollIcon -->
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@import "../../assets/scss/variables.scss";

$color__banner-title: #ffffff;
$shadow__banner-title: #000000;
$color__banner-subtitle: #ffffff;
$shadow__banner-subtitle: #000000;

section {
    display: block;
    width: 100%;

    .header-padding {
        padding-top: 6rem;
    }
    .banner {
        position: relative;
        width: 100%;
        height: 31.5rem;
        height: 65vh;
        background-image: url('/images/banner.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        .banner-text {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .banner-title,
            .banner-subtitle {
                opacity: 0;
                transform: translateY($transition-distance);
            }
            .banner-arrow {
                opacity: 0;
                transform: translateY(-$transition-distance);
            }
            .banner-title {
                font-size: 2.5rem;
                margin: 0 0 1rem;
                color: $color__banner-title;
                text-shadow: $shadow__banner-title 0rem 0rem 1rem;
                transition: $transition-speed opacity ease, $transition-speed transform ease;
                transition-delay: $transition-delay;
            }
            .banner-subtitle {
                font-size: 1.25rem;
                margin: 0 0 1rem;
                color: $color__banner-subtitle;
                text-shadow: $shadow__banner-subtitle 0rem 0rem 1rem;
                transition: $transition-speed opacity ease, $transition-speed transform ease;
                transition-delay: $transition-delay;
            }
            .banner-arrow {
                position: absolute;
                width: 3rem;
                left: calc(50% - 1.5rem);
                bottom: 2rem;
                transition: $transition-speed opacity ease, $transition-speed transform ease;
                transition-delay: $transition-delay * 1.5;
            }
            &.animating {
                .banner-title,
                .banner-subtitle,
                .banner-arrow {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    }
}

</style>