import { useState } from "react";

//Interfaces and types
export type ArrayActionsType<T> = {
  add: (newValue: T) => T[];
  remove: (idx: number) => void;
  set: (idx: number | string, newValue: T) => T[];
  setById: <K extends keyof T>(keyId: K, id: string | number, newValue: T) => T[];
  change: (values: T[]) => void;
  exists: <T, K extends keyof T>(
    state: T[],
    value: T,
    attribute: K | null
  ) => boolean;
  find: <T, K extends keyof T>(
    state: T[],
    value: T,
    attribute: K | null
  ) => number;
  removeById: (keyId: keyof T, id: string | number) => void;
};

export type ArrayStateHookType<T> = [T[], ArrayActionsType<T>];

export function useArrayState<T>(
  initialState: T[] = []
): ArrayStateHookType<T> {
  const [state, setState] = useState<T[]>(initialState);

  const add = (newValue: T) => {
    let returnVal: T[] = [];
    setState((currentState: T[]) => {
      returnVal = [...currentState, newValue];
      return returnVal;
    });
    return returnVal;
  };

  const remove = (index: number) => {
    setState((currentState) => currentState.filter((_, idx) => idx !== index));
  };

  const removeById = (keyId: keyof T, id: string | number): void => {
    setState((currentState) => currentState.filter((item) => item[keyId] !== id));
  };

  const set = (index: number | string, newValue: T) => {
    if (typeof index === "string") {
      index = parseInt(index);
    }
    let returnVal: T[] = [];
    setState((prevItems) => {
      returnVal = prevItems.map((item: T, idx: number) =>
        idx === index ? { ...newValue } : item
      );
      return returnVal;
    });
    return returnVal;
  };

  const setById = <K extends keyof T>(keyId: K, id: string | number, newValue: T) => {
    let returnVal: T[] = [];
    setState((prevItems) => {
      returnVal = prevItems.map((item: T) =>
        item[keyId] === id ? { ...newValue } : item
      );
      return returnVal;
    });
    return returnVal;
  };

  const change = (values: T[]) => {
    setState([...values]);
  };

  const find = <T, K extends keyof T>(
    state: T[],
    value: T,
    attribute: K | null = null
  ): number => {
    if (attribute !== null) {
      return state.findIndex((item) => item[attribute] === value[attribute]);
    }
    return state.findIndex((item) => item === value);
  };

  const exists = <T, K extends keyof T>(
    state: T[],
    value: T,
    attribute: K | null = null
  ): boolean => {
    return find(state, value, attribute) !== -1;
  };

  return [state, { add, remove, set, setById, change, exists, find, removeById }];
}
