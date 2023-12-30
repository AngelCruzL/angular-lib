export type ToastParams = {
  message: string;
  type: string;
  title: string;
};

export class AcToast {
  title: string;
  message: string;
  type: string;

  constructor({ message, type, title }: ToastParams) {
    this.title = title;
    this.message = message;
    this.type = type;
  }
}
