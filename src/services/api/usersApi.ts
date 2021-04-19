import axios from "axios";
import { User } from "../../store/users/types/state";

export const fetchContent = {
  async getUsersInfo(): Promise<User[] | any> {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  },
};
