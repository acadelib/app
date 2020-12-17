<template>
  <container>
    <row is-centered>
      <column tablet="6" desktop="4">
        <router-view />
      </column>
    </row>
  </container>
</template>

<script>
import Container from "@/components/grid/Container";
import Row from "@/components/grid/Row";
import Column from "@/components/grid/Column";

export default {
  components: {
    Container,
    Row,
    Column,
  },
};
</script>
