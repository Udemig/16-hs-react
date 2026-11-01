"use client";

import { FC, useState } from "react";
import Field from "./Field";
import Image from "next/image";

interface Props {
  defaultUrl?: string;
}

// resim url inputu client formun geri kalanı server component
const ImagePreview: FC<Props> = ({ defaultUrl }) => {
  const [imageUrl, setImageUrl] = useState(defaultUrl || "");
  const [isValid, setIsValid] = useState(true);

  // inputa girilen url doğru formatta mı regex ile kontrol et
  const isUrl = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|avif))(?:\?.*)?$/.test(imageUrl);

  return (
    <>
      <Field htmlFor="image_url" label="Resim URL">
        <input
          type="text"
          id="image_url"
          name="image_url"
          className="input"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value.trim());
            setIsValid(true);
          }}
        />
      </Field>

      <div>
        <p className="block text-sm font-semibold text-zinc-700 mb-1.5">Resim Önizleme</p>

        <div className="relative h-48 w-full bg-zinc-50 rounded-lg overflow-hidden border border-dashed border-zinc-300">
          {isUrl && isValid ? (
            <Image
              src={imageUrl}
              onError={() => setIsValid(false)}
              alt="Önizleme"
              fill
              unoptimized
              className="object-contain p-2"
            />
          ) : (
            <div className="grid place-items-center size-full text-sm text-zinc-400">
              {imageUrl === "" ? "Henüz resim yok" : "Geçersiz URL"}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImagePreview;
