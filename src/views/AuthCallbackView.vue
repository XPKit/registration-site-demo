<script>

export default {
    name: 'AuthCallbackView',
    data() {
        return {
            'state': null,
            'codeVerifier': null,
            'code': null,
            'errors': {
                'state': 'There was a problem with the sign in.',
                'invalid_request': 'The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.',
                'unauthorized_client': 'The client is not authorized to request an authorization code using this method.',
                'access_denied': 'The resource owner or authorization server denied the request.',
                'server_error': 'The authorization server encountered an unexpected condition that prevented it from fulfilling the request.',
                'temporarily_unavailable': 'The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server. Returned when the your XPKit license has expired.',
                'invalid_client': 'The client_id or client_secret is not valid.',
                'invalid_grant': 'The code_verifier or code is not valid.',
                'unsupported_grant_type': 'The grant_type is not valid'
            },
            'error': null
        }
    },
    methods: {
        async exchangeCode() {
            const tokenExchangeEndpoint = `https://auth.${this.appSettings.xpkit.region}/api/token/`;
            const redirectUrl = `${this.appSettings.domain}${this.appSettings.xpkit.auth_callback}`;
            const formData = new FormData();
            formData.append('grant_type', 'authorization_code');
            formData.append('code', this.code);
            formData.append('client_id', this.appSettings.xpkit.auth_client_id);
            formData.append('redirect_uri', redirectUrl);
            formData.append('code_verifier', this.codeVerifier);

            const response = await fetch(tokenExchangeEndpoint, {
                method: 'POST',
                body: formData
            });
            return response.json();
        }
    },
    mounted() {
        const sessionStorage = window.sessionStorage;
        this.state = sessionStorage.getItem('state');
        this.codeVerifier = sessionStorage.getItem('codeVerifier');
        this.code = this.$route.query.code;

        if (this.state !== this.$route.query.state || ! this.code) {
            this.error = this.errors['state'];
        }
        if (this.$route.query.error) {
            this.error = this.errors[this.$route.query.error];
        }

        if (! this.error) {
            this.exchangeCode().then((data) => {
                if (data['access_token']) {
                    sessionStorage.setItem('xpkitAccessToken', data['access_token']);
                    return this.$router.push({ name: 'visitor-details' });
                };

                if (data['error']) {
                    this.error = this.errors[data['error']];
                }
            });
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row main animatable">
            <div class="col-mob-12 text-center">
                <h1 class="title">Register</h1>
                <p class="content">Sign up today and register for the event.</p>
                <hr>
            </div>
        </div>
        <div class="row no-padding main">
            <div class="col-mob-12">
                <img v-if="!error" src="/images/loading.svg" width="100" alt="Loading icon">
                <p v-if="error" class="error">
                    {{ error }}
                    <br />
                    <router-link :to="{name: 'register'}" class="button">Try again</router-link>
                </p>


            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.error {
    padding-bottom: 200px;
}

.main img {
    margin: 0 auto;
}

.button {
    display: inline-block;
    margin-top: 20px;
}

</style>