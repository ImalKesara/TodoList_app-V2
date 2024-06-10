import type { Task } from './model';

export interface ModalsDefinition {
  editask: {
    visible: boolean;
    data: Task | null;
  };
}

export const modals: ModalsDefinition = {
  editask: {
    visible: false,
    data: null,
  },
};
