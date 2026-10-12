import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./api";
import type { FilterParams, GetPlaceResponse, GetPlacesResponse } from "../types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// custom hooks
// useQuery: sayfa yüklendiği anda api isteklerini atar
export const useGetPlaces = (params?: FilterParams) =>
  useQuery({
    queryKey: ["places", params],
    queryFn: () => api.get<GetPlacesResponse>("/places", { params }),
    select: (res) => res.data.places,
  });

// bir konaklama alanını al
export const useGetPlace = (id?: string) =>
  useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<GetPlaceResponse>(`/places/${id}`),
    select: (res) => res.data.place,
    enabled: !!id,
  });

// bir konaklama alanını sil
export const useDeletePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => api.delete(`/places/${id}`),
    onSuccess: (res) => {
      toast.success("Konaklama alanı kaldırıldı");
      navigate("/");
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};

// yeni bir konaklama alanı oluştur
export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: any) => api.post("/places", data),
    onSuccess: (res) => {
      toast.success("Konaklama alanı oluşturuldu");
      navigate("/");
    },
    onError: (err) => {
      toast.error(`Bir hata oluştu: ${err.message}`);
    },
  });
};
