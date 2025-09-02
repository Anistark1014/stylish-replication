export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      cash_transactions: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          id: string
          transaction_date: string
          transaction_type: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          id?: string
          transaction_date?: string
          transaction_type: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          id?: string
          transaction_date?: string
          transaction_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      clearance: {
        Row: {
          amount: number
          created_at: string | null
          date: string | null
          description: string | null
          id: string
          member_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number
          created_at?: string | null
          date?: string | null
          description?: string | null
          id?: string
          member_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          date?: string | null
          description?: string | null
          id?: string
          member_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      clearances: {
        Row: {
          created_at: string | null
          date: string
          id: string
          member_id: string | null
          paid_amount: number
          status: string
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: string
          member_id?: string | null
          paid_amount: number
          status: string
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          member_id?: string | null
          paid_amount?: number
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "clearances_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      company_balance: {
        Row: {
          company_balance: number | null
          created_at: string
          id: number
        }
        Insert: {
          company_balance?: number | null
          created_at?: string
          id?: number
        }
        Update: {
          company_balance?: number | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number
          category: string
          date: string
          description: string | null
          document_url: string | null
          id: string
          inventory_transaction_id: string | null
          type: string
        }
        Insert: {
          amount: number
          category: string
          date: string
          description?: string | null
          document_url?: string | null
          id?: string
          inventory_transaction_id?: string | null
          type?: string
        }
        Update: {
          amount?: number
          category?: string
          date?: string
          description?: string | null
          document_url?: string | null
          id?: string
          inventory_transaction_id?: string | null
          type?: string
        }
        Relationships: []
      }
      goods_purchases: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          id: string
          payment_status: string | null
          purchase_date: string
          supplier_name: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          id?: string
          payment_status?: string | null
          purchase_date?: string
          supplier_name: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          id?: string
          payment_status?: string | null
          purchase_date?: string
          supplier_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      inventory_transactions: {
        Row: {
          cost_per_unit: number | null
          created_at: string
          id: string
          notes: string | null
          product_id: string
          product_name: string
          quantity: number
          transaction_date: string
          type: string
        }
        Insert: {
          cost_per_unit?: number | null
          created_at?: string
          id?: string
          notes?: string | null
          product_id: string
          product_name: string
          quantity: number
          transaction_date?: string
          type: string
        }
        Update: {
          cost_per_unit?: number | null
          created_at?: string
          id?: string
          notes?: string | null
          product_id?: string
          product_name?: string
          quantity?: number
          transaction_date?: string
          type?: string
        }
        Relationships: []
      }
      investments: {
        Row: {
          amount: number
          created_at: string
          id: string
          investor_name: string
          note: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          investor_name: string
          note?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          investor_name?: string
          note?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      loan_payments: {
        Row: {
          amount: number
          created_at: string
          id: string
          loan_id: string
          note: string | null
          payment_date: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          loan_id: string
          note?: string | null
          payment_date?: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          loan_id?: string
          note?: string | null
          payment_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "loan_payments_loan_id_fkey"
            columns: ["loan_id"]
            isOneToOne: false
            referencedRelation: "loans"
            referencedColumns: ["id"]
          },
        ]
      }
      loans: {
        Row: {
          amount: number
          created_at: string
          duration_months: number
          id: string
          interest: number | null
          interest_rate: number
          issuer: string
          remaining_balance: number
          start_date: string
          status: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          duration_months: number
          id?: string
          interest?: number | null
          interest_rate: number
          issuer: string
          remaining_balance: number
          start_date?: string
          status?: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          duration_months?: number
          id?: string
          interest?: number | null
          interest_rate?: number
          issuer?: string
          remaining_balance?: number
          start_date?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          date: string | null
          id: string
          message: string | null
          read_status: boolean | null
          related_entity_id: string | null
          role: string | null
          timestamp: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          date?: string | null
          id?: string
          message?: string | null
          read_status?: boolean | null
          related_entity_id?: string | null
          role?: string | null
          timestamp?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          date?: string | null
          id?: string
          message?: string | null
          read_status?: boolean | null
          related_entity_id?: string | null
          role?: string | null
          timestamp?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      product_request_items: {
        Row: {
          id: string
          price: number
          product_id: string | null
          product_name: string
          quantity: number
          request_id: string | null
        }
        Insert: {
          id?: string
          price?: number
          product_id?: string | null
          product_name: string
          quantity?: number
          request_id?: string | null
        }
        Update: {
          id?: string
          price?: number
          product_id?: string | null
          product_name?: string
          quantity?: number
          request_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_request_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_request_items_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "requests"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          availability: string | null
          category: string | null
          cost_price: number | null
          created_at: string | null
          description: string | null
          gross_profit: number | null
          id: string
          image_url: string | null
          info_link: string | null
          inventory: number | null
          media: Json | null
          mrp: number | null
          name: string
          price_ranges: Json | null
          sku_id: string | null
        }
        Insert: {
          availability?: string | null
          category?: string | null
          cost_price?: number | null
          created_at?: string | null
          description?: string | null
          gross_profit?: number | null
          id?: string
          image_url?: string | null
          info_link?: string | null
          inventory?: number | null
          media?: Json | null
          mrp?: number | null
          name: string
          price_ranges?: Json | null
          sku_id?: string | null
        }
        Update: {
          availability?: string | null
          category?: string | null
          cost_price?: number | null
          created_at?: string | null
          description?: string | null
          gross_profit?: number | null
          id?: string
          image_url?: string | null
          info_link?: string | null
          inventory?: number | null
          media?: Json | null
          mrp?: number | null
          name?: string
          price_ranges?: Json | null
          sku_id?: string | null
        }
        Relationships: []
      }
      requests: {
        Row: {
          admin_notes: string | null
          amount_paid: number
          created_at: string | null
          id: string
          payment_status: string | null
          products_ordered: Json
          request_date: string | null
          reseller_id: string | null
          special_instructions: string | null
          status: string
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          admin_notes?: string | null
          amount_paid?: number
          created_at?: string | null
          id?: string
          payment_status?: string | null
          products_ordered?: Json
          request_date?: string | null
          reseller_id?: string | null
          special_instructions?: string | null
          status?: string
          total_amount?: number
          updated_at?: string | null
        }
        Update: {
          admin_notes?: string | null
          amount_paid?: number
          created_at?: string | null
          id?: string
          payment_status?: string | null
          products_ordered?: Json
          request_date?: string | null
          reseller_id?: string | null
          special_instructions?: string | null
          status?: string
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "requests_reseller_id_fkey"
            columns: ["reseller_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      rewards: {
        Row: {
          created_at: string | null
          description: string
          id: string
          image_url: string | null
          is_active: boolean | null
          link: string | null
          points_required: number
          tier: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          link?: string | null
          points_required: number
          tier: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          link?: string | null
          points_required?: number
          tier?: string
          title?: string
        }
        Relationships: []
      }
      sales: {
        Row: {
          created_at: string | null
          date: string
          gross_profit: number | null
          id: string
          member_id: string
          outstanding: number
          paid: number
          payment_status: string
          price: number
          product_id: string | null
          qty: number
          total: number
          transaction_type: string | null
          type: string
        }
        Insert: {
          created_at?: string | null
          date: string
          gross_profit?: number | null
          id?: string
          member_id: string
          outstanding: number
          paid?: number
          payment_status: string
          price: number
          product_id?: string | null
          qty: number
          total: number
          transaction_type?: string | null
          type?: string
        }
        Update: {
          created_at?: string | null
          date?: string
          gross_profit?: number | null
          id?: string
          member_id?: string
          outstanding?: number
          paid?: number
          payment_status?: string
          price?: number
          product_id?: string | null
          qty?: number
          total?: number
          transaction_type?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          allow_signup: boolean
          id: number
        }
        Insert: {
          allow_signup?: boolean
          id?: number
        }
        Update: {
          allow_signup?: boolean
          id?: number
        }
        Relationships: []
      }
      shrinkage_logs: {
        Row: {
          created_at: string | null
          date: string
          id: string
          notes: string | null
          product_id: string | null
          product_name: string
          quantity: number
        }
        Insert: {
          created_at?: string | null
          date?: string
          id?: string
          notes?: string | null
          product_id?: string | null
          product_name: string
          quantity: number
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          notes?: string | null
          product_id?: string | null
          product_name?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "shrinkage_logs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          contact_info: Json | null
          coverage: number
          created_at: string | null
          due_balance: number
          email: string | null
          exclusive_features: string | null
          flagged_status: boolean | null
          has_completed_onboarding: boolean
          id: string
          is_active: boolean | null
          name: string | null
          region: string | null
          reward_points: number
          role: string
          sub_region: string | null
        }
        Insert: {
          contact_info?: Json | null
          coverage?: number
          created_at?: string | null
          due_balance?: number
          email?: string | null
          exclusive_features?: string | null
          flagged_status?: boolean | null
          has_completed_onboarding?: boolean
          id?: string
          is_active?: boolean | null
          name?: string | null
          region?: string | null
          reward_points?: number
          role: string
          sub_region?: string | null
        }
        Update: {
          contact_info?: Json | null
          coverage?: number
          created_at?: string | null
          due_balance?: number
          email?: string | null
          exclusive_features?: string | null
          flagged_status?: boolean | null
          has_completed_onboarding?: boolean
          id?: string
          is_active?: boolean | null
          name?: string | null
          region?: string | null
          reward_points?: number
          role?: string
          sub_region?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      cash_balance_summary: {
        Row: {
          available_cash_balance: number | null
          total_inflows: number | null
          total_outflows: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_auditor: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
