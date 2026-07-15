// src/application/use-cases/category.use-case.ts
import type { CategoryRepository } from '@/domain/ports/category.repository'
import type { Category } from '@/domain/entities/category.entity'
import type { CategoryStats } from '@/domain/entities/category-stats.entity'
import type { UpdateCategoryDto } from '../dtos/update-category.dto'
import type { CreateCategoryDto } from '../dtos/create-category.dto'

export class CategoryUseCase {
  createCategory(dto: CreateCategoryDto) {
    throw new Error('Method not implemented.')
  }
  updateCategory(id: number, dto: UpdateCategoryDto) {
    throw new Error('Method not implemented.')
  }
  deleteCategory(id: number) {
    throw new Error('Method not implemented.')
  }
  private readonly categoryRepository: CategoryRepository

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  getCategories(): Promise<Category[]> {
    return this.categoryRepository.getCategories()
  }

  getStats(): Promise<CategoryStats> {
  return this.categoryRepository.getStats()
}
}