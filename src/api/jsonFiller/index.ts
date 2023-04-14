import axios from "axios";
export const fetchJsonFillerRequest=() => axios.get("https://jsonplaceholder.typicode.com/todos/");