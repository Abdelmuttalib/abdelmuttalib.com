import {
  ArrowPathRoundedSquareIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import cn from "classnames";
import { FC, ReactElement } from "react";
import Link from "next/link";
import { Url } from "../../../types";

interface TweetActionT {
  colorStyles: string;
  title: string;
  icon: JSX.Element;
  count?: number;
}

const tweetActions: TweetActionT[] = [
  {
    colorStyles:
      "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500",
    title: "Reply",
    count: 7,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-[19px]"
        fill="currentColor"
      >
        <g>
          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
        </g>
      </svg>
    ),
  },
  {
    colorStyles:
      "hover:bg-emerald-500/10 hover:text-emerald-500 group-hover:bg-emerald-500/10 group-hover:text-emerald-500",
    title: "Retweet",
    count: 27,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-[19px]"
        fill="currentColor"
      >
        <g>
          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
        </g>
      </svg>
    ),
  },
  {
    colorStyles:
      "hover:bg-rose-500/10 hover:text-rose-500 group-hover:bg-rose-500/10 group-hover:text-rose-500",
    title: "Like",
    count: 141,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-[19px]"
        fill="currentColor"
      >
        <g>
          <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
        </g>
      </svg>
    ),
  },
  {
    colorStyles:
      "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500",
    title: "View",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-[19px]"
        fill="currentColor"
      >
        <g>
          <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
        </g>
      </svg>
    ),
  },
  {
    colorStyles:
      "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500",
    title: "Share",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-[19px]"
        fill="currentColor"
      >
        <g>
          <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
        </g>
      </svg>
    ),
  },
];

const TweetActions = (): ReactElement => {
  return (
    // tweet actions
    <div className="flex gap-x-3 justify-between h-9 mt-1 mb-1 text-gray-500 -mx-1">
      {tweetActions.map((tweetAction) => (
        <button
          key={tweetAction.title}
          type="button"
          title={tweetAction.title}
          className={cn(
            "group flex items-center gap-1 text-xs",
            tweetAction.colorStyles.split(" ")[1]
          )}
        >
          <div
            className={cn(
              "flex items-center gap-1 p-2 rounded-full text-[#71767b]",
              tweetAction.colorStyles
            )}
          >
            {tweetAction.icon}
          </div>
          <p className="text-[#71767b] group-hover:text-current">
            {tweetAction.count}
          </p>
        </button>
      ))}
    </div>
  );
};

function PinnedTweet() {
  return (
    <div className="inline-flex gap-2 text-[#71767b] w-full max-w-[150px] ml-7">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
        className="w-4"
      >
        <g>
          <path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"></path>
        </g>
      </svg>
      <p className="font-bold text-xs pl-1">Pinned Tweet</p>
    </div>
  );
}

interface WithAttachmentLinkDataT {
  linkCom?: Url;
  linkTitle?: string;
  image?: string;
  type?: string;
  jobTitle?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  companyLogo?: string;
  companyLink?: Url;
}

interface WithLinkDataT {
  linkImageSrc: string;
  linkCom: string;
  linkTitle: string;
}

export interface TweetPropsT {
  name?: string;
  username?: string;
  tweet?: string;
  tweetDate: string;
  withAttachmentLink?: boolean;
  withAttachmentLinkData?: WithAttachmentLinkDataT;
  withLink?: boolean;
  withLinkData?: WithLinkDataT;
  pinnedTweet?: boolean;
}

const Tweet = ({
  name = "Abdelmuttalib Ahmed",
  username = "@Abdelmuttalib_",
  tweet,
  tweetDate,
  withAttachmentLink,
  withAttachmentLinkData,
  withLink,
  withLinkData,
  pinnedTweet,
}: TweetPropsT) => {
  return (
    <div
      className={cn(
        "border-b border-zinc-800/90 w-full px-4 flex flex-col gap-y-1 cursor-pointer",
        { "pt-2": pinnedTweet, "pt-3": !pinnedTweet }
      )}
    >
      {pinnedTweet && <PinnedTweet />}
      <div className="flex gap-x-2 h-fit">
        <div className="h-full">
          <div className="relative w-12 h-12 rounded-full bg-gray-600">
            <Image
              src="/me.jpg"
              alt="personal photo"
              // width={24}
              // height={24}
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex-1">
          {/* tweet head */}
          <div className="flex justify-between w-full">
            <div className="flex items-center text-sm text-white w-full gap-x-1">
              <p className="font-bold truncate  hover:underline cursor-pointer">
                {name}
              </p>
              <span className="text-[#71767b] truncate">{username}</span>
              <span className="w-[2px] h-[2px] bg-[#71767b] rounded-full mt-0.5"></span>
              <p className="text-[#71767b] cursor-pointer truncate">
                {tweetDate}
              </p>
            </div>

            <button
              type="button"
              title="More"
              aria-label="More"
              className={cn(
                "group flex items-center text-xs",
                "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500".split(
                  " "
                )[1]
              )}
            >
              <span
                className={cn(
                  "flex items-center gap-1 p-2 rounded-full",
                  "hover:bg-sky-500/10 hover:text-sky-500 group-hover:bg-sky-500/10 group-hover:text-sky-500"
                )}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-[18px] text-[#71767b] rounded-full hover:text-sky-500 group-hover:text-sky-500"
                  fill="currentColor"
                >
                  <g>
                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>
          {/* tweet */}
          <div>
            <p className="text-sm text-white pt-0.5">
              {withAttachmentLink &&
              withAttachmentLinkData &&
              withAttachmentLinkData.type === "experience"
                ? tweet?.split("+").map((part, index) => (
                    <span key={index} className="block">
                      {" "}
                      {index === 0 ? part : "-" + part}
                    </span>
                  ))
                : tweet}
            </p>
          </div>

          {/* tweet attachment link */}
          {withAttachmentLink &&
            withAttachmentLinkData &&
            (withAttachmentLinkData.type === "experience" ? (
              <Link
                href={withAttachmentLinkData.companyLink!}
                target="_blank"
                className="hover:opacity-90 ease-in-out duration-100"
              >
                <div className="w-full h-24 border border-zinc-700 mt-4 rounded-2xl grid grid-cols-3 gap-x-3">
                  <div className="relative col-span-1 bg-zinc-900 rounded-l-2xl flex justify-center items-center">
                    <Image
                      src={`/images/companies/${withAttachmentLinkData.companyLogo}`}
                      alt={`${withAttachmentLinkData.company} company logo`}
                      fill
                      className="object-contain w-9 h-9 bg-[#e7e9ea] p-3 rounded-l-2xl"
                    />
                  </div>
                  <div className="col-span-2 rounded-r-2xl flex flex-col justify-center px-3 text-sm gap-y-1 font-medium">
                    <span className="text-[#71767b] text-xs font-normal">
                      {withAttachmentLinkData.startDate} -{" "}
                      {withAttachmentLinkData.endDate}
                    </span>
                    <p className="text-[#e7e9ea]">
                      {withAttachmentLinkData.jobTitle}
                    </p>
                    <span className="text-[#71767b]">
                      {withAttachmentLinkData.company}
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <Link href={withAttachmentLinkData.linkCom!} target="_blank">
                <div className="group w-full h-24 border border-zinc-700 mt-4 rounded-2xl grid grid-cols-3 hover:opacity-90">
                  <div className="relative col-span-1 bg-zinc-900 rounded-l-2xl flex justify-center items-center">
                    {/* <NewspaperIcon className="w-9 text-[#71767b]" /> */}
                    <Image
                      src={`/images/${withAttachmentLinkData.image}`}
                      alt={`${withAttachmentLinkData.linkTitle}`}
                      fill
                      className="object-contain w-9 h-9 bg-[#e7e9ea] p-3 rounded-l-2xl"
                    />
                  </div>
                  <div className="col-span-2 rounded-r-2xl flex flex-col justify-center px-3 text-sm gap-y-1 font-medium">
                    <span className="text-[#71767b] truncate pr-4">
                      <>{withAttachmentLinkData.linkCom}</>
                    </span>
                    <p className="text-gray-200">
                      {withAttachmentLinkData.linkTitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          {/* tweet link components */}
          {withLink && withLinkData && (
            <Link href={withLinkData.linkCom} target="_blank">
              <div className="w-full h-72 border border-zinc-700 mt-3 rounded-2xl flex flex-col group">
                <div className="rounded-t-2xl aspect-square overflow-hidden relative group-hover:opacity-90">
                  <Image
                    src={withLinkData.linkImageSrc}
                    alt={withLinkData.linkTitle}
                    layout="fill"
                    className="text-[#71767b] w-auto h-auto object-cover"
                    quality={100}
                  />
                </div>

                <div className="rounded-b-2xl flex flex-col justify-center px-4 text-sm bg-black py-3">
                  <span className="text-[#71767b]">{withLinkData.linkCom}</span>
                  <p className="text-gray-200 font-semibold">
                    {withLinkData.linkTitle}
                  </p>
                </div>
              </div>
            </Link>
          )}
          {/* tweet actions */}
          <TweetActions />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
