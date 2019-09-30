import { Toaster } from "@blueprintjs/core";

const AppToaster = {
  toaster: Toaster.create(),
  show(options) {
    this.toaster.show(options);
  }
};

export { AppToaster };
