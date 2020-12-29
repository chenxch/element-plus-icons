import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M704 288h131.072a32 32 0 0131.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 11-64 0v-96H384v96a32 32 0 01-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 01-31.808-35.2l57.6-576a32 32 0 0131.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1145.248 45.184l-128 128a32 32 0 01-45.248 0l-128-128a32 32 0 1145.248-45.248L704 837.504V608a32 32 0 1164 0v229.504l73.408-73.408z'

const SoldOut = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

SoldOut.displayName = 'SoldOut';

export default SoldOut;

