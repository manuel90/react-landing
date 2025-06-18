import { type Dispatch, type SetStateAction, useState } from "react";

//Interfaces and types
export type RecordStateHookType<T> = [
  T,
  {
    set: (key: keyof T, newValue: unknown) => void;
    remove: (key: keyof T) => void;
    setAll: Dispatch<SetStateAction<T>>;
  }
];

export function useRecordState<T>(
  initialState: T,
  onUpdate?: (newVal: T) => void
): RecordStateHookType<T> {
  const [state, setState] = useState<T>(initialState);

  /**
   * Set an attribute of the record object.
   * @param key
   * @param newValue
   */
  const set = (key: keyof T, newValue: unknown): void => {
    setState((currentState) => {
      if (currentState && key) {
        const newState = { ...currentState, [key]: newValue };
        if (onUpdate) {
          onUpdate(newState);
        }
        return newState;
      }
      return currentState;
    });
  };

  /**
   * Remove an attribute of the record object.
   * @param key
   */
  const remove = (key: keyof T): void => {
    setState((currentState: T) => {
      if (currentState && key) {
        const newState = { ...currentState };
        delete newState[key];
        return newState;
      }
      return currentState;
    });
  };

  return [state, { set, remove, setAll: setState }];
}
