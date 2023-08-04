<script>
import animatable from '../../mixins/animatable.js'

export default {
    name: 'Register',
    mounted() {
        this.animateElements(this.$el.querySelectorAll('.animatable'));
    },
    mixins: [animatable]
}
</script>

<template>
    <section>
        <div class="container register">

            <div class="row">
                <div class="col-mob-12 text-center main animatable">
                    <h3 class="title">Register</h3>
                    <p class="content">Sign up now and generate your experience pass</p>
                </div>
            </div>

            <div class="cards row">
                <div class="text-center col-mob-12 col-lg item animatable">
                    <img class="img" src="data:image/png;base64,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"><!-- end ngIf: $ctrl.images[$index] -->

                    <h3 class="subtitle text-center">Collect</h3>
                    <p class="content text-left">
                        Aenean dictum cursus ultricies.
                        Ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Phasellus scelerisque elit odio, tincidunt eleifend ligula pretium vel.
                    </p>
                </div>

                <div class="text-center col-mob-12 col-lg item animatable">
                    <img class="img" src="data:image/png;base64,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"><!-- end ngIf: $ctrl.images[$index] -->
                    <h3 class="subtitle text-center">Play</h3>
                    <p class="content text-left">
                        Aenean dictum cursus ultricies.
                        Ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Phasellus scelerisque elit odio, tincidunt eleifend ligula pretium vel.
                    </p>
                </div>

                <div class="text-center col-mob-12 col-lg item animatable">
                    <img class="img" src="data:image/png;base64,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"><!-- end ngIf: $ctrl.images[$index] -->
                    <h3 class="subtitle text-center">Retrieve</h3>
                    <p class="content text-left">
                        Aenean dictum cursus ultricies.
                        Ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Phasellus scelerisque elit odio, tincidunt eleifend ligula pretium vel.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-mob-12 text-center register main animatable">
                    <router-link :to="{name: 'register'}" class="button" type="button">Register</router-link>

                    <div class="cta">
                        Any Questions? <router-link :to="{name: 'faqs'}">Check our FAQs</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@import "../../assets/scss/variables.scss";

section {
    width: 100%;
    display: block;
    padding-bottom: 2rem;
    .row {
        margin: 0 0;
        padding: 0 0;
    }
    .cta {
        margin-top: 2rem;
    }
    .register {
        padding-top: 3rem;
        padding-bottom: 5rem;
    }
    .main,
    .item {
        opacity: $transition-opacity;
        transform: translateY($transition-distance);
        transition: transform $transition-speed ease, opacity $transition-speed ease;
        &.animating {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .main {
        transition-delay: $transition-delay;
    }
    a {
        span {
            color: $color__link;
        }
        &:active {
            span {
                color: $color__link-active;
            }
        }
    }

    .cards > div:first-child {
        transition-delay: 0.75s;
    }

    .cards > div:nth-child(2) {
        transition-delay: 1s;
    }

    .cards > div:last-child {
        transition-delay: 1.25s;
    }
}

</style>