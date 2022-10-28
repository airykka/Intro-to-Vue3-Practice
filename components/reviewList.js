app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },

  template:
    /*html*/

    ` <div class="review-container">
  <h3>Reviews:</h3>
  <ul>
  <li v-for="(review, index) in reviews" :key="index">
  <p>{{review.names}}<span v-for="n in review.rating">⭐</span></p>
  
  <p>{{review.review}}</p>

  <p>Would you recommend this product? {{review.recommend}}</p>
  </li>
  </ul>
  
  </div>`,
});
