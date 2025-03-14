import { produce } from "immer";
import { create } from "zustand";
import type { StoreSet } from "../../../ams-shop-exercise/lib/types";

/*----------------------------------------------------------------------------*/
/* Example_3 # State
/*----------------------------------------------------------------------------*/

interface State {
	input1: string;
	input2: string;
}

const initialState: State = {
	input1: "",
	input2: "",
};

/*----------------------------------------------------------------------------*/
/* Example_3 # Mutations
/*----------------------------------------------------------------------------*/

interface Mutations {
	setInput1(o: string): void;
	setInput2(o: string): void;
	reset(): void;
}

function mutations(set: StoreSet): Mutations {
	function setInput1(o: string) {
		set(
			produce((state: State) => {
				state.input1 = o;
			}),
		);
	}

	function setInput2(o: string) {
		set(
			produce((state: State) => {
				state.input2 = o;
			}),
		);
	}

	function reset() {
		set(initialState);
	}

	return {
		setInput1,
		setInput2,
		reset,
	};
}

/*----------------------------------------------------------------------------*/
/* Example_3 # Store
/*----------------------------------------------------------------------------*/

interface Store extends State, Mutations {}

export const useExample_3Store = create<Store>()((set) => ({
	...initialState,
	...mutations(set),
}));

export const getExample_3Store = () => useExample_3Store.getState();
