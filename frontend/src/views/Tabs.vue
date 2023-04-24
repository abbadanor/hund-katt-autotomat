<script setup lang="ts">
import { IonIcon, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue'
import { analytics, home, settingsOutline } from 'ionicons/icons'
</script>

<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar>
        <IonTabButton tab="tab1" href="/views/graph">
          <IonIcon :icon="analytics" />
        </IonTabButton>

        <IonTabButton tab="tab2" href="/views/home">
          <IonIcon :icon="home" />
        </IonTabButton>

        <IonTabButton tab="tab3" href="/views/settings">
          <IonIcon :icon="settingsOutline" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
