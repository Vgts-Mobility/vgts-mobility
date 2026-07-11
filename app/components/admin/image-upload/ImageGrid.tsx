"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import ImageCard from "./ImageCard";
import { UploadImage } from "./types";

type Props = {
  images: UploadImage[];
  onDelete: (id: string) => void;
  onMakeMain: (id: string) => void;
  onDragEnd: (event: any) => void;
};

export default function ImageGrid({
  images,
  onDelete,
  onMakeMain,
  onDragEnd,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={images.map((image) => image.id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-5">
          {images.map((image, index) => (
            <ImageCard
              key={image.id}
              image={image}
              index={index}
              onDelete={onDelete}
              onMakeMain={onMakeMain}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}