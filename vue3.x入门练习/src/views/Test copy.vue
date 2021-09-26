<script>
import { reactive, watchEffect } from "vue";

// 类似于 react  hooks 中的 useState
const state = reactive({
  count: 1,
});

const increment = () => {
  state.count++;
};

// 类似于 react hooks 中的 useEffect
watchEffect(() => {
  document.body.innerHTML = `count:${state.count}`;
  document.body.addEventListener("click", increment);
});
</script>
