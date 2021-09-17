import { Time } from "@angular/common"

export class CarRental {
  bookingId ?: number
  vehicleId ?: number
  totalCost ?: number
  numberOfPassengers ?: number
  numberOfDoors ?: number
  pricePerDay ?: number
  vehicleValue ?: number
  rentalDays ?: number

  startDate ?: Date
  endDate ?: Date

  startTime ?: Time
  endTime ?: Time

  customerName ?: string
  customerEmail ?: string
  customerPhoneNumber ?: string
  customerLicenseNumber ?: string
  customerPhysicalAddress ?: string
  insuranceType ?: string

  pickUpLocation ?: string
  dropOffLocation ?: string  

  registrationNumber ?: string
  vehicleType ?: string
  vehicleImage ?: string
  transmissionType ?: string
  gvm ?: string
}
