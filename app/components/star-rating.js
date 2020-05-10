import { computed } from "@ember/object";
import Component from "@ember/component";

export default Component.extend({
  // tagName: "div", <== tagName defaulted to div
  classNames: ["rating-panel"],
  rating: 0,
  maxRating: 5,

  stars: computed("rating", "maxRating", function () {
    let stars = [];
    for (let i = 1; i <= this.maxRating; i++) {
      stars.push({ rating: i, isFull: this.rating >= i });
    }
    return stars;
  }),
});
