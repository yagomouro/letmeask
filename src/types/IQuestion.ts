export interface IQuestion {
    id: string;
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    isAnswered: boolean;
    isHighlighted: boolean;
    likeCount: number;
    likedId?: string;
}
