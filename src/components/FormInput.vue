<template>
  <v-field>
    <v-label :for="id" :text="label" />
    <input
      :type="type"
      :class="classes"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </v-field>
</template>

<script>
import VField from "@/components/FormField";
import VLabel from "@/components/FormLabel";

export default {
  components: {
    VField,
    VLabel
  },

  props: {
    id: String,
    label: String,
    placeholder: String,
    type: String,
    value: String
  },

  computed: {
    classes() {
      return {
        "c-form__input": true
      };
    }
  }
};
</script>

<style lang="scss">
@import "~@/styles/components/form/input";
</style>
