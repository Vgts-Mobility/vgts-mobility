"use server";

import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function submitReview(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const rating = Number(formData.get("rating"));
  const text = String(formData.get("text") || "").trim();
  const photo = formData.get("photo");

  if (!name) {
    return {
      success: false,
      error: "nameRequired",
    };
  }

  if (!rating || rating < 1 || rating > 5) {
    return {
      success: false,
      error: "ratingRequired",
    };
  }

  if (!text) {
    return {
      success: false,
      error: "textRequired",
    };
  }

  let photoUrl: string | null = null;

  // PHOTO
  if (photo instanceof File && photo.size > 0) {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(photo.type)) {
      return {
        success: false,
        error: "photoType",
      };
    }

    // Maximum 5 MB
    if (photo.size > 5 * 1024 * 1024) {
      return {
        success: false,
        error: "photoSize",
      };
    }

    const extension =
      photo.name.split(".").pop()?.toLowerCase() || "jpg";

    const fileName = `${crypto.randomUUID()}.${extension}`;

    const filePath = `reviews/${fileName}`;

    const arrayBuffer = await photo.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { error: uploadError } =
      await supabaseAdmin.storage
        .from("reviews")
        .upload(filePath, buffer, {
          contentType: photo.type,
          upsert: false,
        });

    if (uploadError) {
      console.error(
        "Review photo upload error:",
        uploadError
      );

      return {
        success: false,
        error: "photoUploadError",
      };
    }

    const { data } = supabaseAdmin.storage
      .from("reviews")
      .getPublicUrl(filePath);

    photoUrl = data.publicUrl;
  }

  // DATABASE
  const { error } = await supabaseAdmin
    .from("reviews")
    .insert({
      name,
      rating,
      text,
      photo_url: photoUrl,
      status: "pending",
      approved_at: null,
    });

  if (error) {
    console.error(
      "Review insert error:",
      error
    );

    return {
      success: false,
      error: "submitError",
    };
  }

  revalidatePath("/admin/reviews");

  return {
    success: true,
  };
}