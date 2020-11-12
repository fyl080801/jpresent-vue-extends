import scopedSlot from './transforms/scopedSlot';
import scopedSlotProvider from './providers/scopedSlot';

export default ({ transform, provider }) => {
  transform(scopedSlot);
  provider(scopedSlotProvider);
};
