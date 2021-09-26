
import { ref, reactive, computed, watch, onMounted, getCurrentInstance } from "vue";

export default function useTest() {
    console.log(getCurrentInstance())
    const { ctx } = getCurrentInstance()

    const count = ref(1)

    // 类似于 react  hooks 中的 useState
    const state = reactive({
        count: 1,
    });

    const increment = () => {
        count.value++
        state.count++;
    };

    const doubleCount = computed(() =>
        state.count * 2
    )
    const doubleCount2 = computed(() =>
        count.value * 2
    )
    const number = computed(() =>
        ctx.$store.state.number
    )
    const updataNumber = () => {
        // ctx.$store.commit("SET_NUMBER", count.value * 100)
        ctx.$store.dispatch("setNumber", count.value * 100)
    }

    const aa = computed(() =>
        // ctx.$store.state.a.aa
        ctx.$store.getters.aaValue
    )
    const updataAA = () => {
        ctx.$store.commit("SET_AA", ctx.$store.state.a.aa + 10)
    }
    const bb = computed(() =>
        // ctx.$store.state.b.bb 
        ctx.$store.getters.bbValue
    )
    const updataBB = () => {
        ctx.$store.commit("SET_BB", ctx.$store.state.b.bb + 100)
    }

    watch(() => state.count, () => {
        console.log("state.conut -  发生了改变：", state.count)
    })
    watch(() => count, () => {
        console.log("count.value -  发生了改变：", count.value)
    })

    onMounted(() => {
        console.log("onMounted……")
    })
    const gotoAbout = () => {
        ctx.$router.push("/about")
    }

    return {
        count,
        state,
        increment,
        doubleCount,
        doubleCount2,
        gotoAbout,
        number,
        updataNumber,
        aa,
        bb,
        updataAA,
        updataBB
    }

}

