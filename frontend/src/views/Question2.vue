<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonDatetime, IonFab, IonFabButton, IonIcon } from '@ionic/vue'
import { ref } from 'vue'
import { arrowBack, arrowForward } from 'ionicons/icons'
import { useStore } from '../store'

const router = useRouter()
const store = useStore()

const dateValues = ref(['2023-02-22'])

function updateDates(event: any) {
  dateValues.value = event.target.value
}

function next() {
  if (dateValues.value.length > 0) {
    router.push('/welcome/3')
    store.dates = dateValues.value
  }
}

function previous() {
  router.push('/welcome/1')
}
</script>

<template>
  <img src="../assets/calendar.png" alt="travel">
  <h3>Vilka datum ska du vara borta?</h3>
  <IonDatetime
    v-model="dateValues"
    class="hehe"
    presentation="date"
    min="2023-02-22"
    :multiple="true"
  />
  <IonFab v-if="dateValues.length > 0" slot="fixed" vertical="bottom" horizontal="end">
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
h3 {
  text-align: center;
}
.hehe {
  max-width: 300px;
}
</style>
