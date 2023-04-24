<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { useStore } from '../store'

const store = useStore()
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Inställningar</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            Inställningar
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Antal matningar per dag</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {{ store.feedingsPerDay }} st
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Datum</IonCardTitle>
          <IonCardSubtitle>Datum din hund ska matas</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <ul v-for="date in store.dates!">
            <li>{{ date }}</li>
          </ul>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ändra inställningar</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          I framtiden ska man kunna ändra sina inställningar
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>
