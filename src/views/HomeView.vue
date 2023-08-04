<script>
import Banner from '../components/landing/Banner.vue';
import Description from '../components/landing/Description.vue';
import Location from '../components/landing/Location.vue';
import Register from '../components/landing/Register.vue';

export default {
    name: 'HomeView',
    components: {
        Banner,
        Description,
        Location,
        Register
    }
}
</script>

<template>
    <Banner />
    <Description />
    <Location />
    <Register />
</template>