import { produce } from "immer";
import { create } from "zustand";
import { StoreSet } from "../../../ams-shop-exercise/lib/types";

/*----------------------------------------------------------------------------*/
/* Example_3 # State
/*----------------------------------------------------------------------------*/

interface State {
  searchString: string;
}

const initialState: State = {
  searchString: ""
};

/*----------------------------------------------------------------------------*/
/* Example_3 # Mutations
/*----------------------------------------------------------------------------*/

interface Mutations {
  setSearchString(o: string): void;
  reset(): void;
}

function mutations(set: StoreSet): Mutations {
  function setSearchString(o: string) {
    set(
      produce((state: State) => {
        state.searchString = o;
      })
    );
  }

  function reset() {
    set(initialState);
  }

  return {
    setSearchString,
    reset
  };
}

/*----------------------------------------------------------------------------*/
/* Example_3 # Store
/*----------------------------------------------------------------------------*/

interface Store extends State, Mutations {}

export const useExample_3Store = create<Store>()((set) => ({
  ...initialState,
  ...mutations(set)
}));

export const getExample_3Store = () => useExample_3Store.getState();
