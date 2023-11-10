export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Brand: {
        Row: {
          created_at: string
          id: number
          image: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          image: string
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          image?: string
          name?: string
        }
        Relationships: []
      }
      Category: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      Comment: {
        Row: {
          comment: string
          created_at: string
          id: number
          product: number
          user: number
        }
        Insert: {
          comment: string
          created_at?: string
          id?: number
          product: number
          user: number
        }
        Update: {
          comment?: string
          created_at?: string
          id?: number
          product?: number
          user?: number
        }
        Relationships: [
          {
            foreignKeyName: "Comment_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "Product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Comment_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Product: {
        Row: {
          brand: number
          categoryId: number | null
          created_at: string
          description: string
          id: number
          images: string[]
          name: string
          price: number
        }
        Insert: {
          brand: number
          categoryId?: number | null
          created_at?: string
          description: string
          id?: number
          images: string[]
          name: string
          price: number
        }
        Update: {
          brand?: number
          categoryId?: number | null
          created_at?: string
          description?: string
          id?: number
          images?: string[]
          name?: string
          price?: number
        }
        Relationships: [
          {
            foreignKeyName: "Product_brand_fkey"
            columns: ["brand"]
            isOneToOne: false
            referencedRelation: "Brand"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Product_categoryId_fkey"
            columns: ["categoryId"]
            isOneToOne: false
            referencedRelation: "Category"
            referencedColumns: ["id"]
          }
        ]
      }
      Product_Rating: {
        Row: {
          created_at: string
          id: number
          product: number
          rate: number
          rating: number
          user: number
        }
        Insert: {
          created_at?: string
          id?: number
          product: number
          rate: number
          rating: number
          user: number
        }
        Update: {
          created_at?: string
          id?: number
          product?: number
          rate?: number
          rating?: number
          user?: number
        }
        Relationships: [
          {
            foreignKeyName: "Product_Rating_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "Product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Product_Rating_rating_fkey"
            columns: ["rating"]
            isOneToOne: false
            referencedRelation: "Rating"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Product_Rating_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Rating: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      Size: {
        Row: {
          categoryId: number
          created_at: string
          id: number
          name: string
        }
        Insert: {
          categoryId: number
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          categoryId?: number
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "Size_categoryId_fkey"
            columns: ["categoryId"]
            isOneToOne: false
            referencedRelation: "Category"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          created_at: string
          id: number
          image: string
          lastname: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          image: string
          lastname: string
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          image?: string
          lastname?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
