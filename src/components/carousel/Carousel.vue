<template>
  <div
    id="slider"
    class="relative overflow-hidden w-full flex items-center"
    style="height:50vh;"
  >
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div
        v-if="show"
        :key="current"
        class="absolute top-0 w-full h-full flex justify-center items-center bg-cover bg-no-repeat"
        :style="{ 'background-image': `url(${slides[current].img})` }"
      >
        <p>I'm {{ slides[current].title }}!</p>
      </div>
    </transition-group>

    <div
      class="btn btn-prev absolute select-none z-10 w-10 h-10 cursor-pointer flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-110 hover:text-white rounded-full bg-white hover:bg-blue-700"
      aria-label="Previous slide"
      @click="slide(-1)"
    >
      &#10094;
    </div>
    <div
      class="btn btn-next absolute select-none z-10 w-10 h-10 cursor-pointer flex justify-center items-center transition duration-300 ease-in-out  transform hover:scale-110 hover:text-white rounded-full bg-white hover:bg-blue-700"
      aria-label="Next slide"
      @click="slide(1)"
    >
      &#10095;
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data: function() {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        {
          title: "Prima SLide",
          img: "https://picsum.photos/id/1/800/400",
        },
        {
          title: "Seconda SLide",
          img: "https://picsum.photos/id/3/800/400",
        },
        {
          title: "Terza SLide",
          img: "https://picsum.photos/id/20/800/400",
        },
      ],
    };
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style>
/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.btn {
  left: 1%;
}

.btn-next {
  left: auto;
  right: 1%;
}
</style>
