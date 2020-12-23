<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      v-model="task.name"
      id=""
      placeholder="Adicionar Nova tarefa"
    />
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        name: "",
        completed: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addTask", this.task);

      this.task = {
        name: "",
        completed: false,
      };
    },
  },
};
</script>

<style scoped>
</style>