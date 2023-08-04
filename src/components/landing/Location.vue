<script>
import animatable from '../../mixins/animatable.js'

export default {
    name: 'Location',
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
                <div class="col-mob-12 main text-center animatable">
                    <h2 class="title">Location</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-mob-12 col-lg-6 main text-center animatable">
                    <a target="_blank" href="https://goo.gl/maps/hcQYqYmhsFvHPKYE9"><img class="img-fluid" src="https://maps.googleapis.com/maps/api/staticmap?center=O2+Arena,+Peninsula+Square,+London,+Greater+London,SE10+0DX&amp;zoom=17&amp;scale=2&amp;size=640x640&amp;maptype=roadmap&amp;format=png&amp;visual_refresh=true&amp;markers=size:mid%7Ccolor:0xff0000%7Clabel:%7CImagination+Ltd,+25+Store+St,+Fitzrovia,+London+WC1E+7BL&amp;key=AIzaSyBTPGCacYnRMHqWbFEU-MADh2mmzoRjTPw"></a>
                </div>
                <div class="col-mob-12 col-lg-6 main animatable">
                    <div class="address">
                        <h3 class="subtitle">O2 Arena</h3>
                        <address class="address-address">
                            <div class="content">Peninsula Square</div>
                            <div class="content">London, Greater London</div>
                            <div class="content">SE10 0DX</div>
                            <div class="content">United Kingdom
                            </div>
                        </address>

                        <hr>

                        <div class="direction">
                            <h5 class="subtitle direction-title">By Tube</h5>
                            <p class="content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                        </div>

                        <div class="direction">
                            <h5 class="subtitle direction-title">By Bus</h5>
                            <p class="content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                        </div>

                        <div class="direction">
                            <h5 class="subtitle direction-title">By Car</h5>
                            <p class="content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@import "../../assets/scss/variables.scss";

section {
    display: block;
    width: 100%;
    .main {
        opacity: $transition-opacity;
        transform: translateY($transition-distance);
        transition: opacity $transition-speed ease, transform $transition-speed ease;
        transition-delay: $transition-delay;
        &.animating {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .row {
        &:first-child {
            padding-bottom: 0;
        }
    }
    .address {
        .address-address {
            font-style: normal;
            margin-bottom: 1rem;
        }
    }
    .direction {
        margin-top: 1rem;
        .direction-title {
            font-size: 1.1rem;
        }
    }
}

</style>