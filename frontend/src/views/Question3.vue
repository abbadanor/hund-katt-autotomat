<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon, IonInput, IonItem } from '@ionic/vue'
import { arrowBack, arrowForward } from 'ionicons/icons'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store'

const router = useRouter()
const store = useStore()

const amount = ref(1)

function previous() {
  router.push('/welcome/2')
}

function next() {
  if (amount.value > 0) {
    router.push('/views/home')
    store.feedingsPerDay = amount.value
  }
}
</script>

<template>
  <img src="../assets/doggy.jpg" alt="travel">
  <h3>Hur många gånger per dag vill du mata din hund?</h3>
  <IonItem>
    <IonInput v-model="amount" type="number" placeholder="1" min="1" max="4" />
  </IonItem>
  <IonFab v-if="amount" slot="fixed" vertical="bottom" horizontal="end">
    <IonFabButton @click="next()">
      <IonIcon :icon="arrowForward" />
    </IonFabButton>
  </IonFab>
  <IonFab slot="fixed" vertical="bottom" horizontal="start">
    <IonFabButton @click="previous()">
      <IonIcon :icon="arrowBack" />
    </IonFabButton>
  </IonFab>
</template>

<style scoped>
img {
  border-radius: 1rem;
}

h3 {
  text-align: center;
}
</style>
