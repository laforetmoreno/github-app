import url from '../config/urls';
import request from '../utils/request';

export const getUserData = async () => await request(url.user);

export const getRepos = async () => await request(url.repos)

export const getSubscriptions = async () => await request(url.subscriptions)