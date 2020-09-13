<template>
  <v-main fluid>
    <v-container class="fill-height d-flex align-start grey lighten-5" fluid>
      <v-container class="home-container">
        <v-row class="mb-9" no-gutters>
          <v-col lg="12">
            <v-card class="pa-16" outlined>
              <v-flex class="justify-start" xs12>
                <div class="display-1">FAQ</div>
              </v-flex>

              <template>
                <div>
                  <v-container grid-list-md class="mt-5">
                    <v-layout row wrap>
                      <v-expansion-panels
                        flat
                        v-for="(subject, index) in faqs"
                        :key="index"
                        class="d-flex justify-start"
                      >
                        <div class="font-weight-bold  pa-5">
                          {{ subject.title }}
                        </div>

                        <v-expansion-panel
                          class="elevation-0"
                          v-for="(item, index) in subject.questions"
                          :key="index"
                        >
                          <v-expansion-panel-header>
                            {{ item["question"] }}</v-expansion-panel-header
                          >
                          <v-expansion-panel-content
                            class="pa-5"
                            v-html="item['answer']"
                          >
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-layout>
                  </v-container>
                </div>
              </template>
              <v-row class="mt-10" no-gutters>
                <v-col lg="12">
                  <div class="display-1">Contact Us</div>
                </v-col>
                <v-col lg="6">
                  <h4>Contact Us</h4>
                  <p>
                    Have a question not covered above? Send us a message!
                    Someone on our team will get in contact with you as soon as
                    we can! Contact us with the button below or at
                    support@lunchclub.ai
                  </p>
                  <v-btn depressed block light color="grey lighten-5"
                    >Contact US</v-btn
                  >
                </v-col>
                <v-col lg="6">
                  <h4>Contact Us</h4>
                  <p>
                    Do you have feedback or suggestions for us? Let us know
                    here! We love hearing from you to improve your Lunchclub
                    experience! Send feedback with the button below or at
                    support+product@lunchclub.ai
                  </p>
                  <v-btn depressed block light color="grey lighten-5"
                    >Write Feedback</v-btn
                  >
                </v-col>
              </v-row>
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
      faqs: [
        {
          title: "Account",
          questions: [
            {
              question: "What is the answer to life?",
              answer:
                "The number 42 is, in The Hitchhiker's Guide to the Galaxy by Douglas Adams, the 'Answer to the Ultimate Question of Life, the Universe, and Everything', calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one knows what the question is.",
            },
            {
              question: "What is the answer to life?",
              answer:
                "The number 42 is, in The Hitchhiker's Guide to the Galaxy by Douglas Adams, the 'Answer to the Ultimate Question of Life, the Universe, and Everything', calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one knows what the question is.",
            },
          ],
        },
        {
          title: "Matches",
          questions: [
            {
              question: "What is the answer to life?",
              answer:
                "The number 42 is, in The Hitchhiker's Guide to the Galaxy by Douglas Adams, the 'Answer to the Ultimate Question of Life, the Universe, and Everything', calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one knows what the question is.",
            },
            {
              question: "What is the answer to life?",
              answer:
                "The number 42 is, in The Hitchhiker's Guide to the Galaxy by Douglas Adams, the 'Answer to the Ultimate Question of Life, the Universe, and Everything', calculated by an enormous supercomputer named Deep Thought over a period of 7.5 million years. Unfortunately, no one knows what the question is.",
            },
          ],
        },
      ],
    };
  },
};
</script>
