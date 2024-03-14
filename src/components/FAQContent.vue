<template>
  <div class="faq-content">
    <div class="heading">
      <h1>Frequently Asked Questions</h1>
    </div>

    <div class="questions">
      <div v-for="(item, index) in items" :key="index" class="faq-item">
        <button @click="toggle(index)" class="faq-button">
          {{ item.title }}
        </button>
        <div v-if="item.open" class="faq-content">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Varför ... ?',
          content: 'Test 123.',
          open: false
        },
        {
          title: 'Varför ... ?',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          open: false
        },
        {
          title: 'Varför ... ?',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          open: false
        }
      ]
    }
  },
  methods: {
    toggle(index) {
      this.items[index].open = !this.items[index].open
    }
  }
}
</script>

<style>
.questions {
  padding: 0 20rem;
}

.heading {
  text-align: center;
  padding: 2rem 3rem;
}

.faq-item {
  margin: 1rem 3rem;
  border-radius: 1rem;
  background-color: rgb(238, 238, 238);
}
.faq-button {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  background-color: rgb(221, 221, 221);
}
.faq-content {
  padding: 10px;
}

@media (max-width: 768px) {
  .questions {
    padding: 0;
  }
}
</style>
