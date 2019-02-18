export class Todo {
  private id: string;
  private content: string;
  private createdAt: string;
  private done: boolean;
  private imageSrc?: string;

  constructor(id: string, content: string, createdAt: string, done: boolean, imageSrc?: string) {
    this.id = id;
    this.content = content;
    this.createdAt = createdAt;
    this.done = done;
    this.imageSrc = imageSrc;
  }
}
