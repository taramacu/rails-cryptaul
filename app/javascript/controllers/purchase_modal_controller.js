import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["purchase"]

  // connect() {
    // this.hiTarget.innerHTML = 'Hello, dropdown!'
    // console.log("purchase modal controller is connected")

  expand() {
    this.purchaseTarget.classList.toggle("collapse")
  }

}
