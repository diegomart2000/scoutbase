import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export const push = (path: string): void => history.push(path);
export default history;
