export class Paths {
    public flatc: string = ''
    public csv: string = ''
    public fbs: string = ''
    public csharp: string = ''
    public ts: string = ''
    public json: string = ''
    public bytes: string = ''
    public tests: string = ''
}

export const paths = new Paths();

export interface IPathStruct {
    csv: string;
    fbs: string;
}
