"use client";

import {
  createContext,
  MouseEventHandler,
  useContext,
  useState,
  useRef,
  ReactNode,
} from "react";
import Link from "next/link";
import {
  FigmaURL,
  GithubURL,
  LinkedinURL,
  ResumeURL,
  TwitterURL,
} from "@/lib/constants";
import { Icons } from "@/components/icons";

export const SocialLinks = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const [buttonBoundingBox, setButtonBoundingBox] = useState<DOMRect | null>(
    null
  );
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(
    null
  );
  const [isHoveredFromNull, setIsHoveredFromNull] = useState<boolean>(true);

  const buttonListRef = useRef<HTMLDivElement>(null);

  const repositionHover: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!buttonListRef?.current || !e.target) return;
    const target = e.target as HTMLElement;
    setButtonBoundingBox(target.getBoundingClientRect());
    setHoveredButton(target.id);
    setWrapperBoundingBox(buttonListRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!hoveredButton);
  };

  const getButtonStyles = () => {
    if (!buttonBoundingBox || !wrapperBoundingBox) return {};
    return {
      transitionProperty: "transform, opacity, width",
      transitionDuration: isHoveredFromNull ? "0ms" : "150ms",
      opacity: hoveredButton ? 1 : 0,
      width: `${buttonBoundingBox.width}px`,
      transform: `translate(${
        buttonBoundingBox.left - wrapperBoundingBox.left
      }px) scale(${hoveredButton ? "1" : "0.95"})`,
    };
  };
  return (
    <LinkListHoverContext.Provider value={{ repositionHover }}>
      <div
        ref={buttonListRef}
        onMouseLeave={() => setHoveredButton(null)}
        className="relative -mx-2 flex items-center gap-1 md:gap-2"
      >
        <div
          className="bg-popover dark:bg-transparent/20 absolute inset-y-0 left-0 rounded h-full scale-95"
          style={{ ...getButtonStyles() }}
        />

        {/* <LinkTrigger id={TwitterURL} href={TwitterURL}>
          Twitter
        </LinkTrigger> */}
        {/* <LinkTrigger id={ResumeURL} href={ResumeURL}>
          Resume
        </LinkTrigger> */}
        <LinkTrigger id={LinkedinURL} href={LinkedinURL}>
          LinkedIn
        </LinkTrigger>
        <LinkTrigger id={GithubURL} href={GithubURL}>
          GitHub
        </LinkTrigger>
        {/* <LinkTrigger id={FigmaURL} href={FigmaURL}>
          Figma
        </LinkTrigger> */}
      </div>
    </LinkListHoverContext.Provider>
  );
};

export const LinkTrigger = ({
  id,
  href,
  children,
}: {
  id: string;
  href: string;
  children: ReactNode;
}) => {
  const { repositionHover } = useLinkHover();
  return (
    <Link
      target="_blank"
      href={href}
      onMouseEnter={repositionHover}
      rel="noopener"
      id={id}
      className="group/link text-sm inline-flex items-center py-1 px-2 gap-1 relative cursor-pointer bg-transparent border-none text-foreground-subtle hover:text-foreground focus-visible:text-foreground focus-visible:bg-popover"
    >
      {children}
      <span className="grid place-items-center transition-transform pointer-events-none group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5">
        <Icons.arrowUpRight className="pointer-events-none" />
      </span>
    </Link>
  );
};

export const LocalLinkTrigger = ({
  id,
  href,
  children,
}: {
  id: string;
  href: string;
  children: ReactNode;
}) => {
  const { repositionHover } = useLinkHover();
  return (
    <Link
      href={href}
      onMouseEnter={repositionHover}
      id={id}
      className="group/link text-sm inline-flex items-center py-1 px-2 gap-1 relative cursor-pointer bg-transparent border-none text-foreground-subtle hover:text-foreground focus-visible:text-foreground focus-visible:bg-popover"
    >
      {children}
      <span className="grid place-items-center transition-transform pointer-events-none group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5">
        <Icons.arrowUpRight className="pointer-events-none" />
      </span>
    </Link>
  );
};

const LinkListHoverContext = createContext<{
  repositionHover: MouseEventHandler<HTMLAnchorElement>;
} | null>(null);

const useLinkHover = () => {
  const context = useContext(LinkListHoverContext);

  if (!context) {
    throw new Error(
      `LinksList compound components cannot be rendered outside the LinksList component`
    );
  }

  return context;
};
