import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { TextButton } from "@/components/ui/Button";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  headingLevel?: "h2" | "h3";
}

export default function BlogCard({
  post,
  headingLevel = "h3",
}: BlogCardProps) {
  const HeadingTag = headingLevel;

  return (
    <Link
      href={post.href}
      className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF]"
      aria-label={`Read ${post.title}`}
    >
      <article className="flex h-full flex-col border border-white/[0.08] bg-[#09090B] transition-colors duration-300 group-hover:border-white/[0.16] group-hover:bg-[#0D0D10]">
        <div className="relative aspect-video w-full overflow-hidden bg-[#111116]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"
          />
          <span className="absolute left-4 top-4 border border-white/15 bg-black/65 px-2.5 py-1 text-white/80 type-label type-legacy-162">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/38 type-label type-legacy-163">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          <HeadingTag
            className="mt-5 line-clamp-2 text-[#F5F5F7] type-legacy-164"
          >
            {post.title}
          </HeadingTag>

          {post.description && (
            <p
              className="mt-3 line-clamp-3 type-b3 type-legacy-023"
              style={{ color: "rgba(245,245,247,0.52)" }}
            >
              {post.description}
            </p>
          )}

          <div className="mt-auto pt-8">
            <TextButton href={post.href} icon={ArrowUpRight} asSpan>
              Read article
            </TextButton>
          </div>
        </div>
      </article>
    </Link>
  );
}
