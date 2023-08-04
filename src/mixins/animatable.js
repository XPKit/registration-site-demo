export default {
    data() {
        return {
            elements: []
        }
    },

    methods: {
        animateElements(elements) {
            window.addEventListener('scroll', this.updateOnScroll);
            for (let i=0; i < elements.length; i++) {
                this.elements.push(elements[i]);
                this.checkAnimation(elements[i]);
            }
        },

        isElementInViewport(element) {
            let viewportTop = window.scrollY;
            let viewportBottom = viewportTop + window.innerHeight;
            let elemTop = Math.round(element.offsetTop);

            return (elemTop < viewportBottom);
        },

        checkAnimation(element) {
            if (!(element.classList.contains('animating'))) {
                if (this.isElementInViewport(element)) {
                    element.classList.add('animating');
                }
            }
        },

        updateOnScroll(event) {
            for (let i=0; i < this.elements.length; i++) {
                this.checkAnimation(this.elements[i]);
            }
        }
    }
};