<script setup lang="ts">
import { arrowForward } from 'ionicons/icons'
import { IonFab, IonFabButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Option {
  id: number
  name: string
  value: boolean
}

const router = useRouter()

const options = ref([
  {
    id: 0,
    name: 'Ja',
    value: true,
  },
  {
    id: 1,
    name: 'Nej',
    value: false,
  },
])
const currentOption = ref<Option | null>(null)

function compareWith(o1: any, o2: any) {
  return (o1 && o2) ? o1.id === o2.id : o1 === o2
}

function next() {
  if (currentOption.value)
    router.push('/welcome/2')
}
</script>

<template>
  <img src="../assets/travel.png" alt="travel">
  <h3>Ska du resa bort?</h3>
  <IonList class="list">
    <IonItem>
      <IonSelect
        interface="action-sheet" placeholder="Välj" :compare-with="compareWith"
        @ionChange="currentOption = $event.detail.value"
      >
        <IonSelectOption v-for="option in options" :key="option.id" :value="option">
          {{ option.name }}
        </IonSelectOption>
      </IonSelect>
    </IonItem>
  </IonList>
  <IonFab v-if="currentOption" slot="fixed" vertical="bottom" horizontal="end">
    <IonFabButton @click="next()">
      <IonIcon :icon="arrowForward" />
    </IonFabButton>
  </IonFab>
</template>

<style scoped>
.flex-container {
  margin: 3rem 3rem 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list {
  width: 100%;
}

h3 {
  margin-bottom: 1rem;
}

img {
  width: 100%;
}
</style>
