import { cn } from "@/lib/cn";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export function FollowLinkArrowIcon({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-full p-1.5", className)}>
      <ArrowTopRightOnSquareIcon className="w-5" />
    </div>
  );
}
