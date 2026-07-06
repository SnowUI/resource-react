import React, { type ComponentType } from "react";
import { useIconContext } from "./IconProvider";
import type { IconProps, IconWeight } from "./types";
import { iconsByCollection, iconsByDefault } from "../icons/by-name";

export interface IconElementProps extends IconProps {
  /** 通用使用名（kebab-case） */
  name: string;
  /** 显式指定 collection；否则按 Provider 默认或扁平默认 */
  collection?: string;
}

export function Icon({
  name,
  collection: explicitCollection,
  weight: explicitWeight,
  size: explicitSize,
  color: explicitColor,
  className,
  ...rest
}: IconElementProps) {
  const ctx = useIconContext();
  const weight: IconWeight = explicitWeight ?? ctx.weight ?? "regular";
  const size = explicitSize ?? ctx.size ?? 24;
  const color = explicitColor ?? ctx.color ?? "currentColor";

  const registry = iconsByCollection as Record<
    string,
    Record<string, ComponentType<IconProps>>
  >;

  let Component: ComponentType<IconProps> | undefined;

  // 1. 显式 collection
  if (explicitCollection) {
    Component = registry[explicitCollection]?.[name];
  }
  // 2. Provider 默认 collection
  if (!Component && ctx.collection) {
    Component = registry[ctx.collection]?.[name];
  }
  // 3. Provider replace.targetCollection
  if (!Component && ctx.replace?.targetCollection) {
    Component = registry[ctx.replace.targetCollection]?.[name];
  }
  // 4. Provider replace.priority
  if (!Component && ctx.replace?.priority) {
    for (const col of ctx.replace.priority) {
      Component = registry[col]?.[name];
      if (Component) break;
    }
  }
  // 5. fallbackCollections
  if (!Component) {
    for (const fb of ctx.fallbackCollections ?? []) {
      Component = registry[fb]?.[name];
      if (Component) break;
    }
  }
  // 6. 扁平默认
  if (!Component) {
    Component = (iconsByDefault as Record<string, ComponentType<IconProps>>)[name];
  }

  if (!Component) return null;
  return <Component weight={weight} size={size} color={color} className={className} {...rest} />;
}
