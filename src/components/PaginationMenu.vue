<template>
  <div class="pagination-menu">
    <span
      :class="{ active: number === page }"
      @click="this.setPage(number)"
      v-for="number in arrayNumber"
      :key="number"
      >{{ number }}</span
    >
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapMutations } from "vuex";

@Options({
  data() {
    return {
      count: 100,
      limit: 10,
    };
  },
  computed: {
    ...mapGetters(["page"]),
    arrayNumber() {
      return new Array(Math.ceil(this.count / this.limit))
        .fill(0)
        .map((_, index) => index + 1);
    },
  },
  methods: {
    ...mapMutations(["setPage"]),
  },
})
export default class PaginationMenu extends Vue {}
</script>

<style scoped lang="scss">
.pagination-menu {
  display: flex;
  justify-content: space-around;
  span {
    padding: 0.3rem;
    border: 0.1rem gray solid;
    border-radius: 50%;
    transition: all 1s;
    &:hover,
    :focus {
      background-color: #c4c4c4;
    }
    &.active {
      background-color: #c4c4c4;
    }
  }
}
</style>
