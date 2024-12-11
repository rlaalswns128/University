export default interface WhiskyList {
    whiskyNumber: number;
    title: string;
    content: string;
    whiskyMainImage: string | null;
    likesCount: number;
    commentCount: number;
    writeDatetime: string;
}