<template>
  <v-main fluid>
    <v-container class="fill-height d-flex align-start grey lighten-5" fluid>
      <v-container class="home-container">
        <v-row class="mb-9" no-gutters>
          <v-col lg="12">
            <v-card class="pa-16" outlined>
              <v-flex class="justify-start" xs12>
                <h3>Community Guidelines</h3>
              </v-flex>

              <template>
                <div>
                  <v-container grid-list-md class="mt-5">
                    <v-layout row wrap>
                      <v-row
                        flat
                        v-for="(subject, index) in guidelines"
                        :key="index"
                        class="d-flex justify-start"
                      >
                        <div class="font-weight-bold green--text  pa-5">
                          {{ subject.title }}
                        </div>
                        <div class="font-weight-light  pa-5">
                          {{ subject.desc }}
                        </div>
                      </v-row>
                    </v-layout>
                  </v-container>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-main>
</template>

<style scoped>
@media only screen and (min-width: 920px) {
  .home-container {
    max-width: 920px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      guidelines: [
        {
          title: "What is the answer to life?",
          desc:
            "The number 42 is, in The Hitchhiker's Guide to the Galaxy by Douglas Adams, the 'Answer to the Ultimate Question of Life, the Universe, and Everything', calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one knows what the question is.",
        },
        {
          title: "What is the answer to life?",
          desc:
            "The number 42 is, in The Hitchhiker's Guide to the Galaxy by Douglas Adams, the 'Answer to the Ultimate Question of Life, the Universe, and Everything', calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one knows what the question is.",
        },
      ],
    };
  },
};
</script>
