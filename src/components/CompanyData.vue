<script setup>
defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <v-subheader class="font-weight-bold">Company Overview</v-subheader>
  <v-table class="mt-4 rounded-lg elevation-2">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="font-weight-bold category-header">Category</th>
          <th class="font-weight-bold details-header">Details</th>
        </tr>
      </thead>
      <tbody>
        <!-- Company Information -->
        <tr>
          <td><strong>Company Name:</strong></td>
          <td>{{ data.name }}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>{{ data.email }}</td>
        </tr>
        <tr>
          <td><strong>VAT:</strong></td>
          <td>{{ data.vat }}</td>
        </tr>
        <tr>
          <td><strong>Phone:</strong></td>
          <td>{{ data.phone }}</td>
        </tr>
        <tr>
          <td><strong>Country:</strong></td>
          <td>{{ data.country }}</td>
        </tr>

        <!-- Addresses -->
        <tr>
          <td><strong>Addresses:</strong></td>
          <td>
            <div v-for="(address, index) in data.addresses" :key="index">
              {{ address.city }}, {{ address.zipcode }},
              {{ address.country }}
            </div>
          </td>
        </tr>

        <!-- Contact Information -->
        <tr>
          <td colspan="2"><strong>Contact Information:</strong></td>
        </tr>
        <tr>
          <td><strong>First Name:</strong></td>
          <td>{{ data.contact.firstname }}</td>
        </tr>
        <tr>
          <td><strong>Last Name:</strong></td>
          <td>{{ data.contact.lastname }}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>{{ data.contact.email }}</td>
        </tr>
        <tr>
          <td><strong>Phone:</strong></td>
          <td>{{ data.contact.phone }}</td>
        </tr>
        <tr>
          <td><strong>Website:</strong></td>
          <td>
            <a
              class="text-primary"
              :href="data.contact.website"
              target="_blank"
              >{{ data.contact.website }}</a
            >
          </td>
        </tr>
        <tr>
          <td><strong>Birthday:</strong></td>
          <td>{{ data.contact.birthday }}</td>
        </tr>

        <!-- Company Website -->
        <tr>
          <td><strong>Company Website:</strong></td>
          <td>
            <a class="text-primary" :href="data.website" target="_blank">{{
              data.website
            }}</a>
          </td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>
