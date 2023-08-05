import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

export const fullHeight = Dimensions.get('window').height;

export const fullWidth = Dimensions.get('window').width;

export const getRandomKey = () => uuid.v4();

export const getFromAsyncStorage = (key: string) => AsyncStorage.getItem(key);

export const setInAsyncStorage = async (key: string, value: string) => AsyncStorage.setItem(key, value);

export async function setUserToken(accessToken: string) {
  return setInAsyncStorage('userToken', accessToken);
}

export async function getUserToken() {
  return getFromAsyncStorage('userToken');
}
