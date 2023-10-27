export interface IMerch {
    id: number;
    name: string;
    desc: string;
    price: number;
    status: boolean;
    img: string | null;
    categoryId: number;
    companyId: number;
};

export interface ICategory {
    id: number;
    name: string;
};

export interface ICompany {
    id: number;
    name: string;
};

export interface ICharacteristic {
    id: number;
    name: string;
    body: string;
    merchId?: number;
};

export interface ICommentary {
    id: number;
    name?: string;
    body?: string;
    userId?: number;
    merchId?: number;
    commentaryId?: number;
};

export interface ICommentaryAnswer extends ICommentary {
    status: boolean;
};

export interface ICommentaryWithReplies extends ICommentary {
    replies: Array<any>;
};