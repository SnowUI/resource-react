import React, { createContext, useContext, useMemo, type ReactNode } from "react";
import type { IconWeight, ReplacePolicy } from "./types";

export interface IconContextValue {
  collection?: string;
  weight?: IconWeight;
  size?: number | string;
  color?: string;
  allowRemote?: boolean;
  fallbackCollections?: string[];
  replace?: ReplacePolicy;
}

const IconContext = createContext<IconContextValue | undefined>(undefined);

export interface IconProviderProps extends IconContextValue {
  /** shorthand：等价于 replace.targetCollection */
  targetCollection?: string;
  /** shorthand：等价于 replace.priority */
  priority?: string[];
  /** shorthand：等价于 replace.replaceMap */
  replaceMap?: Record<string, string>;
  /** shorthand：等价于 replace.preserve */
  preserve?: string[];
  children?: ReactNode;
}

export function IconProvider({
  collection,
  weight,
  size,
  color,
  allowRemote,
  fallbackCollections,
  replace,
  targetCollection,
  priority,
  replaceMap,
  preserve,
  children,
}: IconProviderProps) {
  const value = useMemo<IconContextValue>(() => {
    const mergedReplace =
      replace ??
      (targetCollection || priority || replaceMap || preserve
        ? { targetCollection, priority, replaceMap, preserve }
        : undefined);
    return {
      collection,
      weight,
      size,
      color,
      allowRemote,
      fallbackCollections,
      replace: mergedReplace,
    };
  }, [collection, weight, size, color, allowRemote, fallbackCollections, replace, targetCollection, priority, replaceMap, preserve]);

  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
}

export function useIconContext(): IconContextValue {
  return useContext(IconContext) ?? {};
}
