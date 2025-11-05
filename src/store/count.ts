import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// type Store = {
//     count: number,
//     actions: {
//         increase: () => void,
//         decrease: () => void,
//     }
// }

export const countStore = create(
    immer(
        combine({ count: 0 }, (set, get) => ({
            actions: {
                increase: () => {
                    set((state)=>{
                        state.count+=1;
                    })
                },
                decrease: () => {
                    set((state)=>{
                        state.count-=1;
                    })
                },
            }
        }))
    ))

// export const countStore = create<Store>((set, get) => (
//     {
//         count: 0,
//         actions: {
//             increase: () => {
//                 set((store) => ({
//                     count: store.count + 1
//                 }))
//             },
//             decrease: () => {
//                 set((store) => ({
//                     count: store.count - 1
//                 }))
//             },
//         }
//     }
// ))

export const useCount = () => {
    const count = countStore((store) => store.count);
    return count;
}

export const useIncreaseCount = () => {
    const increase = countStore((store) => store.actions.increase);
    return increase;
}

export const useDecreaseCount = () => {
    const decrease = countStore((store) => store.actions.decrease);
    return decrease;
}


