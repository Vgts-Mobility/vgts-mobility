"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import ImageCard from "./ImageCard";
import { UploadImage } from "./types";

type Props = {
  images: UploadImage[];
  onDelete: (id: string) => void;
  onMakeMain: (id: string) => void;
  onReorder: (images: UploadImage[]) => void;
};

export default function ImageGrid({
  images,
  onDelete,
  onMakeMain,
  onReorder,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) {
      return;
    }

    const oldIndex = images.findIndex(
      (image) => image.id === active.id
    );

    const newIndex = images.findIndex(
      (image) => image.id === over.id
    );

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    const reordered = arrayMove(
      images,
      oldIndex,
      newIndex
    );

    /*
     * Перше фото завжди головне.
     */
    const normalized = reordered.map(
      (image, index) => ({
        ...image,
        isMain: index === 0,
      })
    );

    onReorder(normalized);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
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