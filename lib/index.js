import scopedSlot from './transforms/scopedSlot';
import scopedSlotProvider from './transforms/scopedSlot';

export default ({ transform, provider }) => {
  transform(scopedSlot);
  provider(scopedSlotProvider);
};
