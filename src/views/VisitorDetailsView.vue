<script>
import animatable from '../mixins/animatable.js'

export default {
    name: 'VisitorDetailsView',
    components: {

    },
    data() {
        return {
            accessToken: '',
            error: '',
            submitted: false,
            xpkitError: false,
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                mobileNumber: '',
                marketingOptin: false
            }
        }
    },
    methods: {
        async getUserDetails() {
            const aboutMeEndpoint = `https://auth.${this.appSettings.xpkit.region}/api/user/me/`;

            const response = await fetch(aboutMeEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.accessToken}`
                }
            });
            return response.json();
        },
        async processFormSubmission() {
            if (! this.submitted) {
                this.submitted = true;
                this.validateSubmission();
                if (! this.error) {
                    const profileResponse = await this.createProfileRequest();
                    const profileId = profileResponse.resource_id;
                    if (profileId) {
                        const activityResponse = await this.createActivityRequest(profileId);
                        if (activityResponse.resource_id) {
                            return this.$router.push({ name: 'thanks' });
                        }
                    }
                    this.xpkitError = true;
                    this.submitted = false;
                }
            }
        },
        validateSubmission() {
            for (let [key, value] of Object.entries(this.formData)) {
                if (value === '' && key !== 'mobileNumber') {
                    this.error = key;
                    return;
                }
            }
        },
        async createProfileRequest() {
            const profileEndpoint = `https://profiles.${this.appSettings.xpkit.region}/api/profile/create-update/`;

            let profileData = {
                'first_name': this.formData.firstName,
                'last_name': this.formData.lastName,
                'email': [this.formData.email],
                'marketing_optin': this.formData.marketingOptin
            };

            if (this.formData.mobileNumber) {
                profileData['mobile_number'] = this.formData.mobileNumber;
            }

            const response = await fetch(profileEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.accessToken}`
                },
                body: JSON.stringify(profileData)
            });
            return response.json();
        },
        async createActivityRequest(profileId) {
            const activityEndpoint = `https://activities.${this.appSettings.xpkit.region}/api/activity/`;

            let activityData = {
                'owner_id': profileId,
                'activity_type': this.appSettings.xpkit.registration_activity.activity_type,
                'experience_id': this.appSettings.xpkit.registration_activity.experience_id,
                'payload': {
                    'object_id': this.appSettings.xpkit.registration_activity.object_id
                }
            };

            const response = await fetch(activityEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.accessToken}`
                },
                body: JSON.stringify(activityData)
            });
            return response.json();
        }

    },
    mounted() {
        this.accessToken = window.sessionStorage.getItem('xpkitAccessToken')
        if (! this.accessToken) {
            return this.$router.push({ name: 'register' });
        }
        this.animateElements(this.$el.querySelectorAll('.animatable'));
        this.getUserDetails().then((data) => {
            if (data['error']) {
                return this.$router.push({ name: 'register' });
            }
            const userResource = data['resource'];
            this.formData.firstName = userResource['first_name'];
            this.formData.lastName = userResource['last_name'];
            this.formData.email = userResource['email'];
        });
    },
    mixins: [animatable]
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row main animatable">
                <div class="col-mob-12 text-center">
                    <h1 class="title">Register</h1>
                    <p class="content">Fill in the missing details below to complete registration.</p>
                    <hr>
                </div>
            </div>
            <div class="row no-padding main animatable">
                <div class="col-mob-12">
                    <h1 class="subtitle">Your Details</h1>
                    <p class="content">*All fields marked with (*) are mandatory</p>
                </div>
            </div>
            <div class="row">
                <div class="col-mob-12">
                    <form name="registerform" @submit.prevent>

                        <div class="form-element">
                            <div class="error-container">
                                <p class="error" v-if="error === 'firstName'">Please enter your first name</p>
                            </div>
                            <label class="form-field" for="firstName">
                                <input type="text" id="firstName" name="firstName" class="input" required="required" v-model="formData.firstName">
                                <span class="label" :class="{ 'input-active': formData.firstName != '' }">First name *</span>
                            </label>
                        </div>

                        <div class="form-element">
                            <div class="error-container">
                                <p class="error" v-if="error === 'lastName'">Please enter your last name</p>
                            </div>
                            <label class="form-field" for="lastName">
                                <input type="text" id="lastName" name="lastName" class="input" required="required" v-model="formData.lastName">
                                <span class="label" :class="{ 'input-active': formData.lastName != '' }">Last name *</span>
                            </label>
                        </div>

                        <div class="form-element">
                            <div class="error-container">
                                <p class="error" v-if="error === 'email'">Please enter a valid email address</p>
                            </div>
                            <label class="form-field" for="email">
                                <input type="email" id="email" name="email" class="input" required="required" v-model="formData.email">
                                <span class="label" :class="{ 'input-active': formData.email != '' }">Email address *</span>
                            </label>
                        </div>

                        <div class="form-element">
                            <div class="error-container"></div>
                            <label class="form-field" for="mobileNumber">
                                <input type="text" id="mobileNumber" name="mobileNumber" class="input" v-model="formData.mobileNumber">
                                <span class="label" :class="{ 'input-active': formData.mobileNumber != '' }">Mobile number</span>
                            </label>
                        </div>

                        <div class="form-element">
                            <div class="error-container">
                                <p class="error"></p>
                            </div>
                            <label class="form-field transparent" for="marketing_opt_in">
                                <input type="checkbox" id="marketing_opt_in" name="marketing_opt_in" class="form-checkbox-checkbox" v-model="formData.marketingOptin">
                                <span class="label form-checkbox">I would like you to keep me informed about upcoming events and products</span>
                            </label>
                        </div>

                        <div v-if="xpkitError" class="service-error">
                            <p>We could not register you at this time. Please try again.</p>
                        </div>

                        <div class="submission">

                            <button class="button" type="submit" @click="processFormSubmission" :disabled="submitted">Submit</button>
                            <img v-if="submitted" src="/images/loading.svg" width="50" alt="Loading icon">

                        </div>

                        <div class="tac">
                            By proceeding, you agree to our <router-link :to="{name: 'terms'}">Terms and Conditions</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

@import "../assets/scss/variables.scss";

section {
    width: 100%;
    display: block;

    .cta {
        margin-top: 1rem;
    }
    .register {
        padding-top: 3rem;
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

    .header-padding {
        padding-top: 6rem;
    }

    .row {
        &.no-padding {
            padding: 0;
        }
    }

    .confirm {
        input {
            vertical-align: top;
            margin-top:5px;
        }
        label {
            display: inline-block;
            margin-bottom: .5rem;
            width: 90%;
            padding: 0 0 0 20px;
        }
    }

    .submission {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-bottom: 2rem;
        .button {
            margin: 1rem 0;
        }
    }

    .tac {
        text-align: center;
    }

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

    .error {
        opacity: 1;
    }

    button:disabled {
        opacity: 0.5;
        cursor: default;
    }

    .service-error {
        p {
            color: $color__error;
            text-align: center;
        }
    }
}

</style>