import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type Update = { title: string; href: string; createdDate: string; id: string };

dayjs.extend(relativeTime);

const UpdateItem = ({ update }: { update: Update }) => {
  return (
    <li className="group">
      <Link href={update.href}>
        <div className="absolute aspect-square h-2.5 rounded-full bg-slate-300 -left-[.323rem] mt-0.5 outline outline-2 outline-white"></div>
        <p className="text-sm text-slate-400 leading-none capitalize">
          {dayjs(update.createdDate).fromNow()}
        </p>
        <p className="leading-none mt-1.5 group-hover:text-slate-500">
          {update.title}
        </p>
      </Link>
    </li>
  );
};

const LatestUpdates = ({ list }: { list: Update[] }) => {
  return (
    <Card className="overflow-hidden sticky top-4">
      <CardHeader className="flex-row justify-between items-center py-4">
        <CardTitle className="mt-1">Latest Updates</CardTitle>
        <Button asChild variant="ghost" className="text-slate-400">
          <Link href="/">
            See more <ArrowRight size={18} className="ml-1" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="pl-7 h-[calc(100%-80px)]">
        <ul className="border-l border-slate-300 h-full px-6 relative flex flex-col gap-4">
          {list.map((update) => {
            return <UpdateItem key={update.id} update={update} />;
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LatestUpdates;
