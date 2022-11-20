
export interface ApiResponse<T>{
  data: T
  succeeded: boolean
  errors: any
  message: any
}


export interface ApiPageResponse<T> extends ApiResponse<T> {
  pageNumber: number
  pageSize: number
  totalPages: number
  totalRecords: number
}
