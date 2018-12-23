import * as chokidar from 'chokidar'
import { resolve } from 'path';
/**
 * 热更新监听
 * @param p 
 */
export default function hot_reload_listen(p: string) {
    chokidar.watch(p).on('all', (event, file) => {
        if (require.cache[resolve(file)]) {
            delete require.cache[resolve(file)]
        }
    })
}