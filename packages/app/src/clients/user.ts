import { sleep } from "./utils"
import { User } from "../types/User";

const USER: User = {
  username: 'ipsum',
  email: 'lorem@email.com'
}

export const getUser = async () => {
  await sleep(1000);

  if (Math.random() < 0.25) {
    return Promise.reject('Fake network error')
  }

  return Promise.resolve(USER)
}

export const getLogout = async () => {
  await sleep(1000);
  return Promise.resolve()
}