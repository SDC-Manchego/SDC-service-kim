import http from "k6/http";
import { sleep } from "k6";

export let options = {
    vus: 5,
    duration: "600s",
    rps: 100000
}

export default function() {
  http.get("http://localhost:3001/api/photos?product_id=4354");
};