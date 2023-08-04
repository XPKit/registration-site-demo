<script>
import animatable from '../mixins/animatable.js'

export default {
    name: 'Header',
    data() {
        return {
            hideMobileMenu: false
        }
    },
    methods: {
        toggleMobileNavigation() {
            this.hideMobileMenu = ! this.hideMobileMenu;
        }
    },
    mounted() {
        this.animateElements(this.$el.querySelectorAll('.animatable'));
    },
    mixins: [animatable]
}
</script>

<template>
    <header>
        <nav>
            <div class="container">
                <div class="row header">
                    <div class="header-content animatable" role="button" tabindex="0">
                        <router-link :to="{name: 'home'}"><img srcset="/images/logo-2x.png 2x, /images/logo-3x.png 3x" src="/images/logo.png" alt="XPKit logo"></router-link>
                        <div class="header-details header-no-mobile">
                            <span class="header-name">Name of the Event</span>
                            <div class="header-details-row bottom">
                                <span class="header-tagline">SIGNATURE OF THE EVENT</span>
                                <span class="header-dates">DATE OF THE EVENT</span>
                            </div>
                        </div>
                    </div>
                    <div class="header-content header-no-mobile animatable">

                        <div class="header-register">
                            <router-link :to="{name: 'register'}" class="header-register-button button">Register</router-link>
                        </div>
                        <div class="header-settings"></div>
                    </div>
                    <div class="header-menu" role="button" tabindex="0">
                        <img src="/images/hamburger.png" alt="Show menu" @click="toggleMobileNavigation">
                    </div>
                </div>
                <div class="mobile-menu" :class="{ 'header-no-mobile': hideMobileMenu }" aria-hidden="true">
                    <div class="container">
                        <div class="row">
                            <div class="col-mob-12 mobile-menu-content">
                                <div class="mobile-menu-name">
                                    <span class="header-name">Name of the Event</span>
                                    <span class="header-tagline">SIGNATURE OF THE EVENT</span>
                                    <span class="header-dates">DATE OF THE EVENT</span>
                                </div>
                                <div class="header-register">
                                    <router-link :to="{name: 'register'}" class="header-register-button button">Register</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
        <div class="header-padding"></div>
    </header>
</template>

<style lang="scss" scoped>

@import "../assets/scss/variables.scss";

$background__header: #ffffff;
$color__header: #000000;
$border__header: #cccccc;
$shadow__header: rgb(100,100,100);

$color__header-name: #000;
$color__header-tagline: #000;
$color__header-dates: #000;

$background__header-button: #000;
$color__header-button: #fff;
$border__header-button: #eee;
$background__header-button-active: #444444;
$color__header-button-active: #fff;
$border__header-button-active: #444444;

$color__lang-unactive: #ccc;
$border__lang-unactive: transparent;
$color__lang-active: #000;
$border__lang-active: #000;


$breakpoint__mobile-header: 1000px;

nav {
    position: fixed;
    left: 0;
    top: 0;
    height: 6rem;
    width: 100%;
    background-color: $background__header;
    border-bottom: 0.05rem solid $border__header;
    box-shadow: 0.1rem 0.1rem 1rem $shadow__header;
    display: flex;
    align-items: center;
    z-index: 2;
    .container {
        background-color: transparent;
    }
    .row {
        padding: 0 0;
        justify-content: space-between;
    }
    .header-content {
        height: 4rem;
        display: flex;
        align-items: center;
        opacity: 0;
        transform: translateX(-3rem);
        transition: $transition-speed transform ease, $transition-speed opacity ease;
        &.animating {
            opacity: 1;
            transform: translateX(0);
            transition-delay: 0.75;
        }
        &:first-child {
            padding-left: 15px;
        }
        &:last-child {
            padding-right: 15px;
        }
    }
    .header-image {
        height: 100%;
    }
    .header-details {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 1rem;
    }
    .header-name {
        font-size: 1.75rem;
        font-weight: 700;
        color: $color__header-name;
    }
    .header-details-row {
        display: flex;
        font-size: 0.75rem;
        &.bottom {
            margin-top: 0.25rem;
        }
    }
    .header-tagline {
        font-weight: 700;
        margin-right: 0.5rem;
        color: $color__header-tagline;
    }
    .header-dates {
        display: block;
        color: $color__header-dates;
    }
    .header-settings {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    .header-register {
        margin: 0 1rem;
        .header-register-button {
            padding: 0.5rem 2rem;
            border: 0.05rem solid $border__header-button;
            background-color: $background__header-button;
            color: $color__header-button;
            cursor: pointer;
            &:active {
                border: 0.05rem solid $border__header-button-active;
                background-color: $background__header-button-active;
                color: $color__header-button-active;
            }
        }
    }
    .header-lang {
        display: flex;
        justify-content: space-between;
        .header-lang-item {
            color: $color__lang-unactive;
            border-bottom: 0.05rem solid $border__lang-unactive;
            font-size: 0.7rem;
            margin: 0 0.25rem;
            text-decoration: none;
            user-select: none;
            &.active {
                color: $color__lang-active;
                border-bottom: 0.05rem solid $border__lang-active;
            }
        }
    }
    .header-social {
        display: flex;
        .header-social-item {
            margin: 0 0.25rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .header-social-image {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
    .header-menu {
        display: none;
    }

    .mobile-menu {
        display: none;
    }

    @media (max-width: $breakpoint__mobile-header) {
        .header-menu {
            display: block;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            width: 3rem;
            height: 3rem;
            margin-top: 0.5rem;
        }
        .header-no-mobile {
            display: none !important;
        }
        .mobile-menu {
            display: flex;
            position: fixed;
            left: 0;
            top: 6rem;
            width: 100%;
            background-color: $background__header;
            border-bottom: 0.05rem solid $border__header;
        }
        .mobile-menu-content {
            display: flex;
            flex-direction: column;
        }
        .mobile-menu-name {
            text-align: center;
            .header-name {
                display: block;
                margin: 1.5rem 0 1rem;
            }
            .header-tagline {
                display: block;
                margin: 0.5rem 0;
            }
            .header-dates {
                display: block;
                margin: 0.5rem 0;
            }
        }
        .header-register {
            margin: 1rem 1rem;
            text-align: center;
        }
        .header-lang {
            margin: 1rem 0;
        }
        .header-social {
            margin: 1rem 0;
        }
    }
}

.header-padding {
    padding-top: 6rem;
}

</style>