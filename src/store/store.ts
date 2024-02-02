import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import {StoreState, StoreActions} from './interface';

const initState: StoreState = {
    modalVisiable:false,
    modalContent:'',
    token:'',
    userInfo:'',
    tab:'index',
    loading:false,

};

const useStore = create<StoreState & StoreActions>()(
  devtools(
      immer((set) => ({
        ...initState,
          setModalVisiable:(modalVisiable:boolean)=>set(()=>({modalVisiable})),
          setModalContent:(modalContent:any)=>set(()=>({modalContent})),
          setToken:(token:any)=>set(()=>({token})),
          setUserInfo:(userInfo:any)=>set(()=>({userInfo})),
          setTab:(tab:any)=>set(()=>({tab})),
          // 全局控制加载中状态
          setLoading:(loading:any)=>set(()=>({loading})),

      })),
      {
        name: 'global-store',
      },
  ),
);
export default useStore;
