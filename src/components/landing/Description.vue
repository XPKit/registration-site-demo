<script>
import animatable from '../../mixins/animatable.js'

export default {
    name: 'Description',
    mounted() {
        this.animateElements(this.$el.querySelectorAll('.animatable'));
    },
    mixins: [animatable]
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-mob-12 main animatable">
                    <h2 class="title">Event tagline</h2>
                    <div class="content">Aenean dictum cursus
                        ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Phasellus scelerisque elit odio, tincidunt eleifend ligula pretium vel.
                        Suspendisse laoreet elit nec rhoncus tempor. Sed scelerisque orci velit, eu gravida dui
                        porta sagittis. Sed dignissim augue in lacinia tristique. Etiam et imperdiet mi. Donec
                        cursus porttitor augue at hendrerit. Cras vitae ex nulla. Curabitur feugiat mattis
                        dictum.
                    </div>
                </div>
            </div>
            <div class="cards row no-padding">
                <div class="col-mob-12 col-lg item animatable">
                    <img class="img-fluid" src="/images/description1.jpg" alt="Photo of a car at an event">
                    <h3 class="subtitle">Option 1 Title</h3>
                    <p class="content">Option 1 content</p>
                </div>
                <div class="col-mob-12 col-lg item animatable">
                    <img class="img-fluid" src="/images/description2.jpg" alt="Person interacting with a touch screen">
                    <h3 class="subtitle">Option 2 Title</h3>
                    <p class="content">Option 2 content</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@import "../../assets/scss/variables.scss";

$transition-speed: 0.75s;
$transition-delay: 0.75s;

section {
    display: block;
    width: 100%;
    .main,
    .item {
        opacity: $transition-opacity;
        transform: translateY($transition-distance);
        transition: opacity $transition-speed ease, transform $transition-speed ease;
        transition-delay: $transition-delay;
        &.animating {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .main {
        transition-delay: $transition-delay;
    }
    .no-padding {
        padding-top: 0;
    }

    .cards > div:first-child {
        transition-delay: 0.75s;
    }

    .cards > div:last-child {
        transition-delay: 1s;
    }
}
</style>