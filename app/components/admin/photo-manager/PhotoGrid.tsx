"use client";

import { Car } from "@/types/car";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import PhotoCard from "./PhotoCard";
import { reorderImagesAction } from "@/app/actions/storage/reorder-images";

type Props = {
  car: Car;
};

export default function PhotoGrid({ car }: Props) {
  const router = useRouter();

  const [images, setImages] = useState(car.images ?? []);
  const [, startTransition] = useTransition();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  if (images.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-white/10 py-12 text-center text-text-muted">
        У цього автомобіля поки немає фотографій.
      </div>
    );
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = images.indexOf(String(active.id));
    const newIndex = images.indexOf(String(over.id));

    const reordered = arrayMove(images, oldIndex, newIndex);

    setImages(reordered);

    startTransition(async () => {
      await reorderImagesAction(car.id, reordered);
      router.refresh();
    });
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
          {images.map((image, index) => (
            <PhotoCard
              key={image}
              car={car}
              image={image}
              index={index}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}