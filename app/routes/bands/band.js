import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    console.log("Model hook called for `bands.band` called with", params.slug);
    let bands = this.modelFor("bands");
    return bands.find((band) => band.slug === params.slug);
  },
});
