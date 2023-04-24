<script setup lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import VChart, { THEME_KEY } from 'vue-echarts'
import { onMounted, provide, ref } from 'vue'

import { graphic, use } from 'echarts/core'

import { LineChart } from 'echarts/charts'

import {
  GridComponent,
  TooltipComponent,
} from 'echarts/components'

import { CanvasRenderer } from 'echarts/renderers'

use([
  LineChart,
  GridComponent,
  TooltipComponent,
  CanvasRenderer,
])

provide(THEME_KEY, 'dark')

const windowLoaded = ref(false)

const option = ref({
  backgroundColor: '#ffffff00',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Mat (g)',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0,
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)',
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)',
          },
        ]),
      },
      emphasis: {
        focus: 'series',
      },
      data: [95, 105, 95, 105, 95, 105, 95],
    },
  ],
})

onMounted(() => {
  setTimeout(() => {
    windowLoaded.value = true
  }, 1000)
})
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Övervy</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            Övervy
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Live kamerafeed</IonCardTitle>
        </IonCardHeader>
        <img class="feed" src="http://10.22.3.3:81/stream">
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Graf</IonCardTitle>
          <IonCardSubtitle>Såhär mycket mat har din hund käkat</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <VChart v-if="windowLoaded" class="chart" :option="option" autoresize />
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
</template>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }

  .feed {
    border-radius: 4px;
    width: 100%;
    object-fit: cover;
  }

  .chart {
    height: 300px;
  }
</style>
