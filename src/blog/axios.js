// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://betty.restful.training/api/blog",

    // use your own key
    params: {
        key: "837f88f6d9917b405cd6ac10d0d7cbb8e0bc6963",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});