import { create } from "zustand"


interface UpLoadModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useUpLoadModal = create<UpLoadModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}));
export default useUpLoadModal;