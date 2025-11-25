export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'STAFF';
  createdAt: Date;
  updatedAt: Date;
}

export interface Student {
  id: string;
  rollNumber: string;
  name: string;
  email?: string;
  department: string;
  year: number;
  semester: number;
  subjects: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  rows: number;
  columns: number;
  layout?: any;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Exam {
  id: string;
  name: string;
  subject: string;
  date: Date;
  duration: number;
  roomId: string;
  maxStudents: number;
  rules?: any;
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  createdAt: Date;
  updatedAt: Date;
  room?: Room;
}

export interface Seating {
  id: string;
  examId: string;
  studentId: string;
  roomId: string;
  seatRow: number;
  seatCol: number;
  createdAt: Date;
  exam?: Exam;
  student?: Student;
  room?: Room;
}