// src/application/use-cases/order.use-case.ts
import type { OrderRepository } from '@/domain/ports/order.repository'
import type { Order } from '@/domain/entities/order.entity'
import type { PaginatedResult } from '@/domain/entities/paginated-result.entity'
import type { AddItemDto } from '@/application/dtos/add-item.dto'
import type { OrderStatus } from '@/domain/enums/order-status.enum'

export class OrderUseCase {
  private readonly orderRepository: OrderRepository

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository
  }

  getOrders(page = 1, p0: string | undefined): Promise<PaginatedResult<Order>> {
    return this.orderRepository.getOrders(page)
  }

  getOrder(id: number): Promise<Order> {
    return this.orderRepository.getOrder(id)
  }

  createOrder(): Promise<Order> {
    return this.orderRepository.createOrder()
  }

  addItem(orderId: number, dto: AddItemDto): Promise<Order> {
    return this.orderRepository.addItem(orderId, dto)
  }

  confirmOrder(orderId: number): Promise<Order> {
    return this.orderRepository.confirmOrder(orderId)
  }

  getOrderStatus(page = 1, status?: OrderStatus): Promise<PaginatedResult<Order>> {
    return this.orderRepository.getOrders(page, status)
  }

  updateOrderStatus(id: number, status: OrderStatus): Promise<Order> {
    return this.orderRepository.updateOrderStatus(id, status)
  }

}
