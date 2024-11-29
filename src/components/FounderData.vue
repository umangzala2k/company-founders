<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  founderId: {
    type: String,
    default: '',
  },
})

const {
  name = null,
  email = null,
  phone = null,
  location = null,
  picture = null,
} = props.data?.results ? props.data.results[0] : {}
</script>

<template>
  <v-card v-if="name && email && phone && location" class="pa-4 elevation-2">
    <v-card-title class="headline">
      <div class="d-flex justify-space-between align-center">
        <span>{{ name.title }} {{ name.first }} {{ name.last }}</span>
        <v-avatar class="border mr-2">
          <v-img
            :src="`https://robohash.org/${founderId}`"
            height="100px"
            width="100px"
            class="rounded-circle"
          />
        </v-avatar>
      </div>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <v-img
            :src="picture?.large"
            alt="Profile Picture"
            max-width="150"
            height="150"
            class="rounded-circle"
          />
        </v-col>
        <v-col cols="12" md="9">
          <div class="my-4">
            <span class="font-weight-bold">Email:</span> {{ email }}
          </div>
          <div class="my-4">
            <span class="font-weight-bold">Phone:</span> {{ phone }}
          </div>
          <div class="my-4">
            <span class="font-weight-bold">Location:</span>
            {{ location.street.number }} {{ location.street.name }},
            {{ location.city }}, {{ location.state }}, {{ location.country }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-card v-else class="pa-4">
    <v-card-text>No user data available.</v-card-text>
  </v-card>
</template>
