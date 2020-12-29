import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M778.752 788.224a382.464 382.464 0 00116.032-245.632 256.512 256.512 0 00-241.728-13.952 762.88 762.88 0 01125.696 259.584zm-55.04 44.224a699.648 699.648 0 00-125.056-269.632 256.128 256.128 0 00-56.064 331.968 382.72 382.72 0 00181.12-62.336zm-254.08 61.248A320.128 320.128 0 01557.76 513.6a715.84 715.84 0 00-48.192-48.128 320.128 320.128 0 01-379.264 88.384 382.4 382.4 0 00110.144 229.696 382.4 382.4 0 00229.184 110.08zM129.28 481.088a256.128 256.128 0 00331.072-56.448 699.648 699.648 0 00-268.8-124.352 382.656 382.656 0 00-62.272 180.8zm106.56-235.84a762.88 762.88 0 01258.688 125.056 256.512 256.512 0 00-13.44-241.088A382.464 382.464 0 00235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0166.176 66.112 320.832 320.832 0 01282.112-8.128 382.4 382.4 0 00-110.144-229.12 382.4 382.4 0 00-229.632-110.208zM828.8 828.8a448 448 0 11-633.6-633.6 448 448 0 01633.6 633.6z'

const Basketball = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Basketball.displayName = 'Basketball';

export default Basketball;

