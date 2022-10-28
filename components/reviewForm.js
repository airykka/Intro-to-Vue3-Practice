app.component("review-form", {
  template:
    /*html*/
    `
    <form action="" class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="names"/>
    
    <label for="review">Review:</label>
    <textarea id="review" cols="30" rows="10" v-model="review"></textarea>
    
    <label for="rating">Rating</label>
    <select id="rating" v-model.number="rating">
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>

    <label for="recommend">Would you recommend this product?</label>
    <select id="rating" v-model="recommend">
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    
    <input type="submit" class="button" value="Submit"/>
  </form>


  `,

  data() {
    return {
      names: "",
      review: "",
      recommend: "",
      rating: null,
    };
  },

  methods: {
    onSubmit() {
      if (
        this.name === "" ||
        this.review === "" ||
        this.recommend === "" ||
        this.rating === null
      ) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }

      let productReview = {
        names: this.names,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };

      this.$emit("review-submission", productReview);

      this.names = "";
      (this.review = ""), (this.rating = null), (this.recommend = "");
    },
  },
});
