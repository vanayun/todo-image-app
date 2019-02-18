export class Image {
  private fileId: string;
  private fileName: string;
  private tempFileKey: string;
  private imageSrc: string;

  constructor(fileId: string, fileName: string, tempFileKey: string, imageSrc: string) {
    this.fileId = fileId;
    this.fileName = fileName;
    this.tempFileKey = tempFileKey;
    this.imageSrc = imageSrc;
  }

  public getImageSrc() {
    return this.imageSrc;
  }
}
