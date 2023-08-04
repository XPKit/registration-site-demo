<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-mob-12">
                    <div class="footer-links">
                        <router-link :to="{name: 'terms'}" class="footer-link">Terms and Conditions</router-link>
                        <router-link :to="{name: 'contact'}" class="footer-link">Contact Us</router-link>
                        <router-link :to="{name: 'faqs'}" class="footer-link">FAQs</router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

$background__footer: #000;
$color__footer: #fff;
$shadow__footer: rgba(100,100,100,0.5);

footer {
    bottom: 0;
    display: block;
    width: 100%;
    background-color: $background__footer;
    box-shadow: 0.1rem 0.1rem 1rem $shadow__footer;
    position: fixed;
    .container {
        background: transparent;
    }

    .row {
        padding: 0;
    }
    .footer-links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        .footer-link {
            margin: 0 1rem;
            color: $color__footer;
            text-decoration: none;
        }
    }

}
</style>