<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue'
</script>

<template>
  <IonPage>
    <IonContent :fullscreen="true">
      <div class="flex-container">
        <router-view />
      </div>
    </IonContent>
  </IonPage>
</template>

<style scoped>
.flex-container {
  padding: 3rem 3rem 0 3rem;
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
