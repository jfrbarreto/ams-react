export interface Product {
	id?: number;
	title?: string;
	description?: string;
	price?: number;
	reviews?: ProductReview[];
	thumbnail?: string;
}

interface ProductReview {
	comment: string;
	reviewerEmail: string;
	reviewerName: string;
}

export type StoreSet = <A extends string | { type: string }>(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	partial: any,
	replace?: boolean | undefined,
	action?: A | undefined,
) => void;
