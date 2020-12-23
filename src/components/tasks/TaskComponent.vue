<template>
  <div>
    <h1 v-text="title"></h1>
    <task-add-component></task-add-component>
    <ul>
      <li
        v-for="(task, index) in getTasksSorted"
        :key="index"
        :class="{ completed: task.completed }"
      >
        <a href="#" @click.prevent="completedTask(task)">Toggle</a>
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import TaskAddComponent from "./TaskAddComponent";

export default {
  data() {
    return {
      title: "Lista de Tarefas",
    };
  },
  computed: {
    getTasks() {
      return this.$store.state.tasks;
    },
    getTasksSorted() {
      return this.$store.getters.sortedTasks;
    },
  },
  components: {
    TaskAddComponent,
  },
  methods: {
    completedTask(task) {
      this.$store.commit("TOOGLE_TASK", task);
    },
  },
};
</script>

<style scoped>
ul li {
  text-align: left;
}
.completed {
  background-color: aqua;
}
</style>