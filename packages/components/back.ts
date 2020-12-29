import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M224 480h640a32 32 0 110 64H224a32 32 0 010-64z'

const Back = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Back.displayName = 'Back';

export default Back;

