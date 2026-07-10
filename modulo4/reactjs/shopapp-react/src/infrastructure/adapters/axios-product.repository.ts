// src/infrastructure/adapters/axios-product.repository.ts
import { apiClient } from '@/infrastructure/http/axios-client'
import { parseApiError } from '@/infrastructure/http/parse-api-error'
import type { ProductRepository } from '@/domain/ports/product.repository'
import type { Product } from '@/domain/entities/product.entity'
import type { PaginatedResult } from '@/domain/entities/paginated-result.entity'
import type { ProductFilters } from '@/domain/entities/product-filters.entity'
import type { OrderStats } from '@/domain/entities/order-stats.entity'
import type { ProductStats } from '@/domain/entities/product-stats.entity'

export class AxiosProductRepository implements ProductRepository {
  getStats(): Promise<ProductStats>
  getStats(): Promise<OrderStats>
  getStats(): Promise<import("../../domain/entities/product-stats.entity").ProductStats> | Promise<import("../../domain/entities/order-stats.entity").OrderStats> {
    throw new Error('Method not implemented.')
  }
  async getProducts(
    filters?: Partial<ProductFilters>,
    page = 1,
  ): Promise<PaginatedResult<Product>> {
    const params: Record<string, string | number> = { page, page_size: 12 }

    if (filters?.search) {
      params.search = filters.search
    }
    if (filters?.categoryId !== undefined && filters.categoryId !== null) {
      params.category = filters.categoryId
    }
    if (filters?.ordering) {
      params.ordering = filters.ordering
    }

    try {
      const { data } = await apiClient.get<PaginatedResult<Product>>('/products/', { params })
      return data
    } catch (err) {
      throw parseApiError(err)
    }
  }

  async getProduct(id: number): Promise<Product> {
    try {
      const { data } = await apiClient.get<Product>(`/products/${id}/`)
      return data
    } catch (err) {
      throw parseApiError(err)
    }
  }

}