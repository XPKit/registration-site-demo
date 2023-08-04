<script>
import getPkce from 'oauth-pkce';

export default {
    name: 'RegisterView',
    data() {
        return {
            showOptions: false,
            enableRegister: this.appSettings.xpkit.enable_xpkit_register,
            authProviders: this.appSettings.xpkit.auth_providers,
            codeVerifier: null,
            codeChallenge: null,
            state: null
        }
    },
    methods: {
        isProviderEnabled(name) {
            return this.authProviders.includes(name)
        },

        getProviderLink(name) {
            const redirectUrl = `${this.appSettings.domain}${this.appSettings.xpkit.auth_callback}`;
            return `https://auth.${this.appSettings.xpkit.region}/authorize/?response_type=code&provider=${name}&client_id=${this.appSettings.xpkit.auth_client_id}&state=${this.state}&code_challenge=${this.codeChallenge}&code_challenge_method=S256&redirect_uri=${redirectUrl}`;
        },

        generatePkceValues() {
            const sessionStorage = window.sessionStorage;

            getPkce(43, (error, { verifier, challenge }) => {
                if (! error) {
                    this.codeVerifier = verifier;
                    this.codeChallenge = challenge;
                    this.state = crypto.randomUUID();

                    sessionStorage.setItem('codeVerifier', this.codeVerifier);
                    sessionStorage.setItem('state', this.state);

                    if (this.$route.query.xpkit_login) {
                        window.location.href = this.getProviderLink('xpkit');
                    } else {
                        this.showOptions = true;
                    }

                }
            });
        }
    },
    computed: {
        registrationLink() {
            const redirectUrl = `${this.appSettings.domain}${this.$router.resolve({ name: 'register'}).href}?xpkit_login=1`;
            return `https://auth.${this.appSettings.xpkit.region}/registration/${this.appSettings.xpkit.account_id}/?redirect_uri=${redirectUrl}`;
        }
    },
    mounted() {
        this.generatePkceValues();
    }
}
</script>

<template>
    <div class="container">
        <div class="row main">
            <div class="col-mob-12 text-center">
                <h1 class="title">Register</h1>
                <p class="content">Sign up today and register for the event.</p>
                <hr>
            </div>
        </div>
        <div class="row main register-buttons" v-if="showOptions">
            <div class="col-lg-3"></div>
            <div class="col-mob-6 col-lg-3">
                <a :href="getProviderLink('apple')" v-if="isProviderEnabled('apple')" title="Sign in with Apple"><img src="/images/button_apple.png" alt="Sign in with Apple"></a>
                <a :href="getProviderLink('google')" v-if="isProviderEnabled('google')" title="Sign in with Google"><img src="/images/button_google.png" alt="Sign in with Google"></a>
                <a :href="getProviderLink('microsoft')" v-if="isProviderEnabled('microsoft')" title="Sign in with Microsoft"><img src="/images/button_microsoft.png" alt="Sign in with Microsoft"></a>
            </div>
            <div class="col-mob-6 col-lg-3">
                <a :href="getProviderLink('facebook')" v-if="isProviderEnabled('facebook')" title="Sign in with Facebook"><img src="/images/button_facebook.png" alt="Sign in with Facebook"></a>
                <a :href="getProviderLink('linkedin')" v-if="isProviderEnabled('linkedin')" title="Sign in with LinkedIn"><img src="/images/button_linkedin.png" alt="Sign in with LinkedIn"></a>
                <a :href="getProviderLink('xpkit')" v-if="isProviderEnabled('xpkit')" title="Sign in with XPKit"><img src="/images/button_xpkit.png" alt="Sign in with XPKit"></a>
            </div>
            <div class="col-lg-3"></div>
        </div>
        <div class="row no-padding main register-buttons" v-if="showOptions">
            <div class="col-mob-12">
                <div v-if="enableRegister">
                    <span>OR</span>

                    <a :href="registrationLink" title="Register with XPKit"><img src="/images/button_xpkit_register.png" alt="Register with XPKit"></a>
                </div>
            </div>
        </div>

        <div class="row no-padding loading" v-if="!showOptions">
            <div class="col-mob-12">
                <img src="/images/loading.svg" width="100" alt="Loading icon">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.register-buttons {
    text-align: center;

    span {
        display: block;
        font-size: 80%;
        font-weight: bold;
        margin: 20px 0;
    }

    img {
        display: inline-block;
    }

    p {
        margin-bottom: 30px;
    }
}

.no-padding {
    padding-top: 0;
}

.register-buttons img {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 200px;
}

.loading img {
    margin: 0 auto;
}

</style>