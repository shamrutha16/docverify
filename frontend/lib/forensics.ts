export type Assessment = 'Likely authentic' | 'Potentially manipulated' | 'Inconclusive'
export type VerificationStatus = 'Complete' | 'Processing' | 'Failed'

export interface VerificationRecord {
  id: string
  name: string
  type: string
  date: string
  assessment: Assessment
  confidence?: number
  status: VerificationStatus
}

export const demoRecords: VerificationRecord[] = [
  { id: 'VER-24018', name: 'degree_certificate.pdf', type: 'Certificate', date: 'Today, 10:42 AM', assessment: 'Likely authentic', confidence: 98, status: 'Complete' },
  { id: 'VER-24017', name: 'semester_marksheet.jpg', type: 'Marksheet', date: 'Yesterday, 4:18 PM', assessment: 'Potentially manipulated', confidence: 87, status: 'Complete' },
  { id: 'VER-24016', name: 'vendor_invoice_1042.pdf', type: 'Invoice', date: 'Yesterday, 1:05 PM', assessment: 'Inconclusive', confidence: 61, status: 'Complete' },
  { id: 'VER-24015', name: 'transcript_scan.png', type: 'Certificate', date: 'Oct 24, 2025', assessment: 'Likely authentic', confidence: 94, status: 'Complete' },
  { id: 'VER-24014', name: 'payment_receipt.jpg', type: 'Receipt', date: 'Oct 23, 2025', assessment: 'Potentially manipulated', confidence: 79, status: 'Complete' },
]

export const activityData = [
  { day: 'Mon', authentic: 18, suspicious: 5, inconclusive: 3 },
  { day: 'Tue', authentic: 24, suspicious: 8, inconclusive: 4 },
  { day: 'Wed', authentic: 20, suspicious: 6, inconclusive: 2 },
  { day: 'Thu', authentic: 32, suspicious: 10, inconclusive: 5 },
  { day: 'Fri', authentic: 28, suspicious: 7, inconclusive: 6 },
  { day: 'Sat', authentic: 22, suspicious: 4, inconclusive: 3 },
  { day: 'Sun', authentic: 30, suspicious: 9, inconclusive: 4 },
]

export const api = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
  async getHealth() { return fetch(`${this.baseUrl}/api/v1/health`) },
  async getHistory() { return fetch(`${this.baseUrl}/api/v1/history`) },
  async uploadDocument(file: File) { const body = new FormData(); body.append('file', file); return fetch(`${this.baseUrl}/api/v1/documents/upload`, { method: 'POST', body }) },
}
