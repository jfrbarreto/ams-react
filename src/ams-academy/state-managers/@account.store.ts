import { produce } from "immer";
import { create } from "zustand";
import { StoreSet } from "../../ams-shop-exercise/lib/types";

/*----------------------------------------------------------------------------*/
/* Accounts # State
/*----------------------------------------------------------------------------*/

interface State {
  user: string;
  address: string;
}

const initialState: State = {
  user: "",
  address: ""
};

/*----------------------------------------------------------------------------*/
/* Accounts # Mutations
/*----------------------------------------------------------------------------*/

interface Mutations {
  setUser(o: string): void;
  setAddress(o: string): void;
  reset(): void;
}

function mutations(set: StoreSet): Mutations {
  function setUser(o: string) {
    set(
      produce((state: State) => {
        state.user = o;
      })
    );
  }

  function setAddress(o: string) {
    set(
      produce((state: State) => {
        state.address = o;
      })
    );
  }

  function reset() {
    set(initialState);
  }

  return {
    setUser,
    setAddress,
    reset
  };
}

/*----------------------------------------------------------------------------*/
/* Accounts # Store
/*----------------------------------------------------------------------------*/

interface Store extends State, Mutations {}

export const useAccountsStore = create<Store>()((set) => ({
  ...initialState,
  ...mutations(set)
}));

export const getAccountsStore = () => useAccountsStore.getState();
