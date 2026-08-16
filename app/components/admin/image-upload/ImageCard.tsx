"use client";

import Image from "next/image";
import { Star, Trash2, GripVertical } from "lucide-react";

import {
  useSortable,
} from "@dnd-kit/sortable";

import {
  CSS,
} from "@dnd-kit/utilities";

import { UploadImage } from "./types";

type Props = {
  image: UploadImage;
  index: number;
  onDelete: (id: string) => void;
  onMakeMain: (id: string) => void;
};

export default function ImageCard({
  image,
  index,
  onDelete,
  onMakeMain,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: image.id,
  });

  const style = {
    transform: CSS.Transform.toString(
      transform
    ),
    transition,
    zIndex: isDragging ? 50 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        bg-surface
        shadow-lg
        transition
        ${
          isDragging
            ? "border-primary shadow-2xl opacity-90"
            : "border-white/10 hover:border-primary/50"
        }
      `}
    >

      {/* IMAGE */}

      <div
        className="
          relative
          aspect-square
          cursor-grab
          active:cursor-grabbing
        "
        {...listeners}
      >

        <Image
          src={image.preview}
          alt={`Фото ${index + 1}`}
          fill
          unoptimized
          draggable={false}
          className="
            select-none
            object-cover
          "
        />

        {/* DRAG HANDLE */}

        <div
          className="
            absolute
            bottom-3
            left-3
            flex
            items-center
            gap-1
            rounded-full
            bg-black/70
            px-2.5
            py-1.5
            text-white
            backdrop-blur-sm
          "
        >
          <GripVertical size={15} />

          <span className="text-xs font-semibold">
            {index + 1}
          </span>
        </div>

        {/* DELETE */}

        <button
          type="button"
          onPointerDown={(e) =>
            e.stopPropagation()
          }
          onClick={(e) => {
            e.stopPropagation();
            onDelete(image.id);
          }}
          className="
            absolute
            right-3
            top-3
            rounded-full
            bg-black/70
            p-2
            text-red-400
            opacity-0
            transition
            group-hover:opacity-100
            hover:bg-red-500
            hover:text-white
          "
          aria-label="Видалити фото"
        >
          <Trash2 size={18} />
        </button>

        {/* MAIN BADGE */}

        {image.isMain && (
          <div
            className="
              absolute
              left-3
              top-3
              flex
              items-center
              gap-1
              rounded-full
              bg-accent
              px-3
              py-1
              text-xs
              font-semibold
              text-black
            "
          >
            <Star
              size={14}
              fill="currentColor"
            />

            Головне
          </div>
        )}

      </div>

      {/* FOOTER */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-3
          border-t
          border-white/10
          bg-background
          px-4
          py-3
        "
      >

        <span className="text-sm text-text-muted">
          Фото {index + 1}
        </span>

        {!image.isMain && (
          <button
            type="button"
            onClick={() =>
              onMakeMain(image.id)
            }
            className="
              text-sm
              font-medium
              text-primary
              transition
              hover:text-accent
            "
          >
            Зробити головним
          </button>
        )}

      </div>

    </div>
  );
}