<script setup>
import { ref, watch } from 'vue'
import { getFounderData, getCompanyData } from '@/service/index.js'
import FounderData from '@/components/FounderData.vue'
import CompanyData from '@/components/CompanyData.vue'

const founderId = ref('')
const loading = ref(false)

const founderData = ref(null)
const companyData = ref(null)

let interval = null

watch(founderId, () => {
  founderData.value = null
  companyData.value = null
  if (interval) {
    clearInterval(interval)
  }

  interval = setTimeout(() => {
    fetchFounderData()
  }, 500)
})

const fetchFounderData = async () => {
  try {
    loading.value = true

    const { data: founderRes } = await getFounderData(founderId.value)
    founderData.value = founderRes

    const { data: companyRes } = await getCompanyData(founderId.value)
    companyData.value = companyRes.data[0]
  } catch (error) {
    console.error('Failed: ', { error })
  } finally {
    loading.value = false
  }
}
</script>


<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <p class="mt-6">
        Please enter the founder's unique ID to get started.
      </p>
      <v-text-field
        v-model="founderId"
        variant="outlined"
        density="compact"
        type="text"
        :disabled="loading"
        placeholder="Any characters will do..."
      />
    </v-col>
    <v-col cols="12" md="8">
      <div v-if="loading" class="text-center">
        <v-progress-circular indeterminate color="primary" size="40" />
      </div>
      <div v-if="founderId && !loading">
        <FounderData
          v-if="founderData"
          :data="founderData"
          :founderId="founderId"
        />
        <div v-if="companyData" class="mt-6">
          <CompanyData :data="companyData" />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

