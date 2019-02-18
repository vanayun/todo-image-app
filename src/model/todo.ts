export class Todo {
  constructor(
    public id: string,
    public content: string,
    public createdAt: string,
    public completed: boolean,
    public imageSrc?: string) {
  }
}
