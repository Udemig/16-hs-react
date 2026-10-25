import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Product, ProductValues, Response } from "../types";
import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const productService = {
  getAll: () => api.get<Response<Product[]>>("/shoes"),
  getOne: (id: string) => api.get<Response<Product>>(`/shoes/${id}`),
  create: (data: ProductValues) => api.post<Response<Product>>("/shoes", data),
  update: (id: string, data: ProductValues) => api.put<Response<Product>>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete<Response<null>>(`/shoes/${id}`),
};

export const useGetAllProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getAll(),
    select: (res) => res.data.data,
  });

export const useGetOneProduct = (id: string) =>
  useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getOne(id),
    select: (res) => res.data.data,
  });

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => productService.delete(id),
    onSuccess: () => {
      toast.warning("Ürün kaldırıldı");
      // arayüzün güncellenmesi için products sorgusunu tekrar çalıştırmam
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => toast.error("İşlem başarısız oldu"),
  });
};

export const useCreateProduct = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: ProductValues) => productService.create(data),
    onSuccess: () => {
      toast.success("Ürün oluşturuldu");
      navigate("/admin/dashboard");
    },
    onError: () => {
      toast.error("İşlem başarısız oldu");
    },
  });
};

export const useUpdateProduct = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, formData }: { id: string | undefined; formData: ProductValues }) =>
      productService.update(id!, formData),
    onSuccess: () => {
      toast.success("Ürün güncellendi");
      navigate("/admin/dashboard");
    },
    onError: () => {
      toast.error("İşlem başarısız oldu");
    },
  });
};
