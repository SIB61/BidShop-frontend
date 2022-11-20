export interface District {
  id: string
  division_id: string
  name: string
  bn_name: string
  lat: string
  long: string
}

export interface SubDistrict {
  id: string
  district_id: string
  name: string
  bn_name: string
}
